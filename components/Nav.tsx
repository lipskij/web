import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-end space-x-4 mr-16 p-6 font-light text-[20px] text-black-100">
      <ul className="flex flex-row items-center justify-center space-x-16">
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
