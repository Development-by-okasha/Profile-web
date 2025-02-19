"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50  ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/courses"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Courses"
          ></MenuItem>
        </Link>
        {/* <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col gap-y-2 ">
            <HoveredLink href="/courses">Frontend Languages</HoveredLink>
            <HoveredLink href="/courses"> Backend Languages</HoveredLink>
            <HoveredLink href="/courses">Designing Softwares</HoveredLink>
            <HoveredLink href="/courses">2D Designing </HoveredLink>
            <HoveredLink href="/courses">3D Modeling Softwares</HoveredLink>
          </div>
        </MenuItem> */}
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
