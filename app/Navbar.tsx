"use client";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex justify-around items-center border-b h-14">
      <Link href="/">
        <AiFillBug className="text-2xl text-black" size={25} />
      </Link>
      <ul className="flex gap-3">
        {links.map((link) => (
          <li
            key={link.label}
            className={classNames(
              "text-base font-medium",
              currentPath === link.href ? "text-zinc-900" : "text-zinc-500",
              "hover:text-zinc-800 transition-colors"
            )}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
