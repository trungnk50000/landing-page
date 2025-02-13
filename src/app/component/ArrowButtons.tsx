"use client";

import React, { useState, useEffect } from "react";
import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";

export default function ArrowButtons() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isScrolled ? (
        <ArrowUp
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            zIndex: 50,
          }}
          onClick={scrollToTop}
        />
      ) : (
        <ArrowDown
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            zIndex: 50,
          }}
        />
      )}
    </>
  );
}
