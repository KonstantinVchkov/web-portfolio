import React from "react";
import style from "./style.module.css";
import { header } from "@/data/Wholedata";
const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <div className={style.logoText}>KonstantinDev</div>
      <div className={style.sections}>
        <ul>
          {header.map((list, idx) => {
            return <li key={idx}>{list}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
