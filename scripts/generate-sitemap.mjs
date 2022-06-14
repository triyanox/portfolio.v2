import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.tsx',
    'posts/*.mdx',
    '!data/*.tsx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx',
  ])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('posts', '')
              .replace('.tsx', '')
              .replace('.mdx', '')
            const route = path === '/index' ? '' : path
            return `
              <url>
                  <loc>${`https://achaq.codes${route}`}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <priority>1.0</priority>
              </url>
            `
          })
          .join('')}
    </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  writeFileSync('public/sitemap.xml', formatted)
}

generate()
