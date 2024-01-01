import React from "react";
import './style.css'
import { IoIosArrowUp } from "react-icons/io";
type TScrollBtn = {
  handleScroll: () => void;
};
const ScrollButton = ({ handleScroll }: TScrollBtn) => {
  return (
    <div className="scroll-top-btn">
      <IoIosArrowUp onClick={handleScroll} />
    </div>
  );
};

export default ScrollButton;
