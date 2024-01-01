import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../../data/routes";
import "./navbar.css";
export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="header">
      <div className="navigation">
        <ul>
          {routes.map((nav, idx) => {
            return (
              <a key={idx} href={nav.href}>
                <li>{nav.title}</li>
              </a>
            );
          })}
        </ul>
      </div>
      <div className="themeChange">Change Theme</div>
    </div>
  );
};
