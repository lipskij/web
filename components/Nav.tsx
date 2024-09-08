import React from "react";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-2 font-light text-[20px] bg-transparent">
      <div className="flex-shrink-0">
        <Logo />
      </div>
      <ul className="flex flex-row items-center space-x-16">
        <li className="link">
          <a className="a" href="/">
            Home
          </a>
        </li>
        <li className="link">
          <a className="a" href="/about">
            About
          </a>
        </li>
        <li className="link">
          <a className="a" href="/work">
            Work
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
