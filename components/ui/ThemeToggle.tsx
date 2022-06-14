import { IconButton } from "./Buttons";
import { WiMoonAltNew } from "react-icons/wi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  return (
    <motion.div
      whileTap={{ scale: 0.7, rotate: -30, elevation: 10 }}
      transition={{ duration: 0.3, damping: 10 }}
    >
      {mounted && (
        <IconButton
          aria-label="Theme Toggle"
          onclick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          icon={
            <WiMoonAltNew className="text-3xl text-white dark:text-black" />
          }
        />
      )}
    </motion.div>
  );
};

export default ThemeToggle;
