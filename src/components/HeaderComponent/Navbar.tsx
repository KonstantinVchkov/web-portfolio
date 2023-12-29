// import "./navbar.css";
// import { RefObject, useRef } from "react";
// // export const hero = useRef(null);
// // const aboutMe = useRef(null);
// // const projects = useRef(null);
// // const skills = useRef(null);
// // const contact = useRef(null);

// const Navbar = () => {
//   const hero = useRef(null);
//   const aboutMe = useRef(null);
//   const projects = useRef(null);
//   const skills = useRef(null);
//   const contact = useRef(null);

//   const scrollOnHref = (elementRef: RefObject<HTMLElement | null>) => {
//     if (elementRef.current) {
//       window.scrollTo({
//         top: elementRef.current.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   };
//   return (
//     <div className="navigation">
//       <ul>
//         <li onClick={() => scrollOnHref(hero)}>Home</li>
//         <li>About me</li>
//         <li>Projects</li>
//         <li>Skills</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

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
    <>
      <div ref={ref} className="lg:hidden navigation">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0  border-b border-b-white/20"
            >
              <ul className="grid gap-2">
                {routes.map((route, idx) => {
                  const { Icon } = route;

                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={route.title}
                      className="w-50 p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                    >
                      <a
                        onClick={() => setOpen((prev) => !prev)}
                        className={
                          "flex items-center justify-between  p-5 rounded-xl bg-neutral-950"
                        }
                        href={route.href}
                      >
                        <span className="flex gap-1 text-lg">
                          {route.title}
                        </span>
                        <Icon className="text-xl" />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="themeChange">Change Theme</div>
    </>
  );
};
