import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useThemeContext } from "../context/ThemeContext";

const useProjectsCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const { theme } = useThemeContext();
  const classes = theme === "light" ? "project-card" : "project-card-dark";
  return {
    scaleProgress,
    classes,
    ref,
  };
};

export default useProjectsCards;
