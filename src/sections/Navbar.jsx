import React, { useRef } from "react";

const Navbar = () => {
  //Taking ref of this nav for gsap animating
  const navRef = useRef(null);
  const linksRef = useRef([]);
  return (
    <nav
      ref={navRef}
      className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
    >
      <div className="flex flex-col gap-y-2 text-5xl md:text-6xl lg:text-8xl ">
        {["home", "services", "about", "work", "contact"].map(
          (section, index) => (
            <div key={index} className="">
              <a className="hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                {section}
              </a>
            </div>
          ),
        )}
      </div>
    </nav>
  );
};

export default Navbar;
