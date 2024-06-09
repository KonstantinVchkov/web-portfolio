import "../../styles/scroll-to-top-style.css";
import { IoIosArrowUp } from "react-icons/io";
import { TScrollBtn } from "../../types/ProjectTypes";
import useHeader from "../../hooks/useHeader";

const ScrollButton = ({ handleScroll }: TScrollBtn) => {
  const { showScroll } = useHeader();
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
