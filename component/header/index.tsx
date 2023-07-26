"use client";

import { useState, useEffect } from "react";
import Style from "./header.module.css";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <header className={Style.container}>
      <nav
        className={
          scrolled ? Style.navbar + " " + Style.scrolled : Style.navbar
        }>
        <div className={Style.logo}>
          <Link href='/'>Logo</Link>
        </div>
        <div className={Style.menu__desktop}>
          <Link href='/about'>About</Link>
        </div>
      </nav>
    </header>
  );
}
