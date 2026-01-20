import React, { gsap, useRef } from "react";
import { socials } from "../constants/index";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
  //Taking ref of this nav for gsap animating
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactsRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  useGSAP(() => {
    //gsap
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactsRef.current], {
      autoAlpha: 0,
      x: -20,
    });
  });
  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 overflow-y-auto md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col gap-y-2 text-5xl md:text-6xl lg:text-8xl ">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                {" "}
                {/* linksRef - Holds DOM refs for all nav links so GSAP can animate
              them together */}
                <a className="hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                  {section}
                </a>
              </div>
            ),
          )}
        </div>

        <div
          ref={contactsRef}
          className="flex flex-col flex-wrap justify-between"
        ></div>
        <div className="font-light">
          <p className="tracking-wider text-white/50">E - mail</p>
          <p className="text-xl tracking-widest lowercase text-pretty">
            rajkiran1.dev@gmail.com
          </p>
        </div>
        <div className="font-light">
          <p className="tracking-wider text-white/50">Socials</p>
          <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
              >
                {"{"}
                {social.name}
                {"}"}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="flex flex-col fixed z-50 items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10">
        <span
          ref={topLineRef}
          className="w-8 block h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="w-8 block h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
