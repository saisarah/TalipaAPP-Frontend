import { motion } from "framer-motion";
import { useNavigationType } from "react-router-dom";

export default function Page({ children, className = "", ...props }) {
  const type = useNavigationType();

  return (
    <motion.div
      transition={{ bounce: 0, duration: 0.15}}
      initial={type === "PUSH" ? { opacity: 0, x: "100%" } :{x:"-100%"}}
      animate={{ opacity: 1, x: 0 }}
      exit={type === "POP" ? { opacity: 0, x: "100%" }: {}}
      {...props}
      className={`app-size ${className}`}
    >
      {children}
    </motion.div>
  );
}
