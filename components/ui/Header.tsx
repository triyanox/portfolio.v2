import MenuToggle from './MenuToggle'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className="fixed z-50 w-full px-2 pt-2 md:px-12">
      <nav className="flex w-full items-center justify-between rounded-full bg-white bg-opacity-70 px-4 py-3 backdrop-blur-2xl dark:bg-black dark:bg-opacity-70 sm:px-4 md:px-12">
        <MenuToggle />
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Header
