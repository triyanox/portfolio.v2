import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { z } from "zod";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = z.string().parse(req.query.slug) as string;
    switch (req.method) {
      case "POST": {
        const post = await prisma.post.upsert({
          create: { slug, likes: 1 },
          update: { likes: { increment: 1 } },
          where: { slug },
        });
        if (!post) return res.status(404).json("Post not found");
        return res.status(200).json(post?.likes || 1);
      }

      case "GET": {
        const post = await prisma.post.findUnique({
          where: { slug },
        });
        if (!post) return res.status(404).json("Post not found");
        return res.status(200).json(post?.likes || 1);
      }
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err: any) {
    console.error(err.message);

    res.status(500).json({
      statusCode: 500,
      message: err.message,
    });
  }
}
