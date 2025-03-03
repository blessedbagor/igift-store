"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";


export function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",   
    },
    {
      name: "About",
      link: "/about",
    },
    {
        name: "Product",
        link: "/products",
      },
      {
        name: "Earn",
        link: "/earn",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Token",
        link: "/token",
      },
    {
      name: "Centers",
      link: "/centers",
    },
    {
        name: "Events",
        link: "/events",
      },
    {
      name: "Resources",
      link: "/resources",
    },
    {
        name: "Contact",
        link: "/contact",
      },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} className="font-mono uppercase" />
    </div>
  );
}
