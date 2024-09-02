import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-end space-x-4 pr-16 p-2 font-light text-[20px] bg-transparent">
      <ul className="flex flex-row items-center justify-center space-x-16 ">
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
