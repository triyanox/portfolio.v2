import { motion } from "framer-motion";
import { IconButton } from "./Buttons";
import { CgClose } from "react-icons/cg";
import { TbMenu } from "react-icons/tb";
import { useMenu } from "../../lib/hooks/useMenu";

const MenuToggle = () => {
  const { open, setOpen } = useMenu();
  return (
    <motion.div
      whileTap={{ scale: 0.7, rotate: -30, elevation: 10 }}
      transition={{ duration: 0.3, damping: 10 }}
    >
      <IconButton
        onclick={() => setOpen(!open)}
        icon={
          open ? (
            <CgClose className="text-3xl" />
          ) : (
            <TbMenu className="text-3xl" />
          )
        }
        aria-label="Menu Toggle"
      />
    </motion.div>
  );
};

export default MenuToggle;
