"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === pathName;

  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200
        ${isActive ? "text-amber-700" : "text-stone-500 hover:text-stone-900"}`}
    >
      {children}
      {/* Animated underline indicator */}
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-amber-600 rounded-full transition-all duration-300
          ${isActive ? "w-4/5 opacity-100" : "w-0 opacity-0"}`}
      />
    </Link>
  );
};

export default NavLink;
