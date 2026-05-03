"use client";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut({});
    router.push("/sign-in");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-tiles", label: "All Tiles" },
    { href: "/profile", label: "My Profile" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Main bar */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-stone-200/80 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              {/* Small tile icon */}
              <div className="w-7 h-7 rounded-md bg-amber-600 grid grid-cols-2 gap-[3px] p-[5px] group-hover:bg-amber-700 transition-colors duration-200">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white/90 rounded-[2px]" />
                ))}
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-900">
                Tile<span className="text-amber-600">Vista</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {!user ? (
                <Link
                  href="/sign-in"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Sign In
                </Link>
              ) : (
                <div className="flex items-center gap-3">
                  {/* User name — hidden on mobile */}
                  <span className="hidden sm:block text-sm font-medium text-stone-600 truncate max-w-[120px]">
                    {user?.name}
                  </span>

                  <Avatar
                    className="ring-2 ring-amber-100 ring-offset-1 cursor-pointer"
                    size="sm"
                  >
                    <Avatar.Image
                      alt={user?.name || "User"}
                      src={user?.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback className="bg-amber-100 text-amber-700 text-sm font-semibold">
                      {user?.name?.[0]?.toUpperCase()}
                    </Avatar.Fallback>
                  </Avatar>

                  <button
                    onClick={handleSignOut}
                    className="inline-flex items-center text-sm font-medium text-stone-500 hover:text-red-600 border border-stone-200 hover:border-red-200 hover:bg-red-50 px-4 py-1.5 rounded-full transition-all duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              )}

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 rounded-lg text-stone-500 hover:bg-stone-100 transition-colors duration-150"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${mobileOpen ? "rotate-90" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden bg-white border-b border-stone-200 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-64 shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
