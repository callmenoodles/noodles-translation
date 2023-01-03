import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const Navbar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  let burgerMenu = (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-white transition-opacity duration-450 lg:hidden ${
        isActive ? "opacity-95 z-10" : "opacity-0 hidden z-0"
      }`}
    >
      <ul className="flex flex-col h-full justify-center items-center">
        <Link legacyBehavior href="/">
          <a>
            <li
              className="p-4 duration-200 hover:text-primary"
              style={{ fontSize: "1.2rem" }}
            >
              Home
            </li>
          </a>
        </Link>
        <Link legacyBehavior href="/services/translation">
          <a>
            <li
              className="p-4 duration-200 hover:text-primary"
              style={{ fontSize: "1.2rem" }}
            >
              Translation
            </li>
          </a>
        </Link>
        <Link legacyBehavior href="/services/proofreading">
          <a>
            <li
              className="p-4 duration-200 hover:text-primary"
              style={{ fontSize: "1.2rem" }}
            >
              Proofreading
            </li>
          </a>
        </Link>
        <Link legacyBehavior href="/services/transcription">
          <a>
            <li
              className="p-4 duration-200 hover:text-primary"
              style={{ fontSize: "1.2rem" }}
            >
              Transcription
            </li>
          </a>
        </Link>
        <Link legacyBehavior href="/about">
          <a>
            <li
              className="p-4 duration-200 hover:text-primary"
              style={{ fontSize: "1.2rem" }}
            >
              About
            </li>
          </a>
        </Link>
        <Link legacyBehavior href="/contact">
          <a>
            <li
              className="p-4 duration-200 hover:text-primary"
              style={{ fontSize: "1.2rem" }}
            >
              Contact
            </li>
          </a>
        </Link>
      </ul>
    </div>
  );

  useEffect(() => {
    if (isActive) {
      disableBodyScroll(burgerMenu);
    } else {
      clearAllBodyScrollLocks();
    }
  });

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
    console.log(isActive);
  };

  const menu = (
    <div className=" mt-2rounded-md shadow-md bg-white ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <Link legacyBehavior href="/services/translation">
          <a
            className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-primary"
            role="menuitem"
          >
            Translation
          </a>
        </Link>
        <Link legacyBehavior href="/services/proofreading">
          <a
            className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-primary"
            role="menuitem"
          >
            Proofreading
          </a>
        </Link>
        <Link legacyBehavior href="/services/transcription">
          <a
            className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-primary"
            role="menuitem"
          >
            Transcription
          </a>
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      {burgerMenu}

      <div className="lg:hidden smaller:z-50">
        <div
          className={`tham tham-e-squeeze tham-w-6 z-50 ${
            isActive ? "tham-active relative" : ""
          }`}
          onMouseDown={handleClick}
        >
          <div className="tham-box">
            <div className="tham-inner"></div>
          </div>
        </div>
      </div>

      <ul className="flex flex-row smaller:hidden">
        <Link href="/" legacyBehavior>
          <a>
            <li
              className="p-4 duration-200 hover:text-primary"
              style={{ fontSize: "1.05rem" }}
            >
              Home
            </li>
          </a>
        </Link>
        <Dropdown
          trigger={["hover"]}
          overlay={menu}
          className=" p-4 cursor-default"
        >
          <button style={{ fontSize: "1.05rem" }}>Services</button>
        </Dropdown>
        <Link href="/about" legacyBehavior>
          <a>
            <li
              className="p-4 duration-200 hover:text-primary"
              style={{ fontSize: "1.05rem" }}
            >
              About
            </li>
          </a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a>
            <li
              className="p-4 duration-200 hover:text-primary"
              style={{ fontSize: "1.05rem" }}
            >
              Contact
            </li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
