import MenuToggle from "./MenuToggle";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="px-2 w-full md:px-12 pt-2 fixed z-50">
      <nav className="w-full backdrop-blur-2xl rounded-full flex px-4 sm:px-8 md:px-12 py-3 justify-between items-center">
        <MenuToggle />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
