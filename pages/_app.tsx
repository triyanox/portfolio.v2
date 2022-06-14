import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transformOrigin: "50% 50%" }}
          exit={{ opacity: 0, transformOrigin: "center" }}
          transition={{
            duration: 0.5,
            damping: 300,
            ease: "easeInOut",
            stiffness: 300,
          }}
        >
          <SWRConfig>
            <Component {...pageProps} />
          </SWRConfig>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
