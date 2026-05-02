"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { router } from "better-auth/api";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const handleSignOut = async () => {
    await authClient.signOut({});
  };
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink href={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink href={"/all-tiles"}>All Tiles</NavLink>
              </li>

              <li>
                <NavLink href={"/profile"}>My Profile</NavLink>
              </li>
            </ul>
          </div>
          <Link href={"/"} className=" text-xl font-bold">
            TileVista
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/all-tiles"}>All Tiles</NavLink>
            </li>

            <li>
              <NavLink href={"/profile"}>My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <ul className="flex items-center gap-5 text-sm">
              <li>
                <Link href={"/sign-up"}>
                  <button className="btn btn-primary">SignUp</button>
                </Link>
              </li>
              <li>
                <Link href={"/sign-in"}>
                  <button className="btn btn-primary">SignIn</button>
                </Link>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image
                  alt="User name"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>

              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
