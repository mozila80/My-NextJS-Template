import React from "react";
import Style from "./about.module.css";

export const metadata = {
  title: "About",
  description: "About Description",
};

export default function About() {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>About Us</div>
    </div>
  );
}
