import { useEffect, useState } from "react";

const useAboutMe = () => {
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(4);
  const [isTabletMode, setIsTabletMode] = useState(false);
  const updateTabletMode = () => {
    setIsTabletMode(window.innerWidth <= 800);
  };
  useEffect(() => {
    updateTabletMode();
    window.addEventListener("resize", updateTabletMode);
    return () => {
      window.removeEventListener("resize", updateTabletMode);
    };
  }, []);

  const handleDrop = (skills:string[]) => {
    const newVisibleSkillsCount = visibleSkillsCount + 4;
    setVisibleSkillsCount(Math.min(newVisibleSkillsCount, skills.length));
  };
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return {
    handleDrop,
    defaultAnimations,
    updateTabletMode,
    isTabletMode,
    visibleSkillsCount,
  };
};

export default useAboutMe;
