'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink = ({href, children}) => {
const pathName = usePathname()
const isActive = href === pathName;
    return <Link href={href}
    className={`${isActive ? "text-red-500 underline" : ""}`}
    >{children}</Link>
};

export default NavLink;