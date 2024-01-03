import React, { useEffect, useState } from "react";
import "./style.css";
import { IoIosArrowUp } from "react-icons/io";
type TScrollBtn = {
  handleScroll: () => void;
};
const ScrollButton = ({ handleScroll }: TScrollBtn) => {
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      {showScroll && (
      <div className="scroll-top-btn">
        <IoIosArrowUp onClick={handleScroll} />
      </div>
      )}
    </>
  );
};

export default ScrollButton;
