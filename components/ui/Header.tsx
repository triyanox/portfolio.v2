import MobileMenu from './Nav'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className="w-full px-2 pt-2 md:px-12">
      <nav className="flex w-full items-center justify-between rounded-full  px-4 py-3 sm:px-4 md:px-12">
        <ThemeToggle />
        <MobileMenu />
      </nav>
    </header>
  )
}

export default Header
