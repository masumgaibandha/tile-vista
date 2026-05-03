import Link from "next/link";

const footerLinks = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "All Tiles", href: "/all-tiles" },
      { label: "My Profile", href: "/profile" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/" },
      { label: "Contact", href: "/" },
      { label: "Privacy Policy", href: "/" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "/" },
      { label: "Shipping Info", href: "/" },
      { label: "Returns", href: "/" },
    ],
  },
];

const socials = [
  {
    label: "Twitter",
    href: "/",
    d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
  },
  {
    label: "YouTube",
    href: "/",
    d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
  },
  {
    label: "Facebook",
    href: "/",
    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
  },
];

const SocialIcon = ({ label, href, d }) => (
  <a
    href={href}
    aria-label={label}
    className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-500 hover:border-amber-600 hover:text-amber-500 transition-all duration-200"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <path d={d} />
    </svg>
  </a>
);

const FooterLinkGroup = ({ heading, links }) => (
  <div className="flex flex-col gap-3">
    <h4 className="text-stone-200 text-xs font-semibold tracking-widest uppercase">
      {heading}
    </h4>
    <ul className="flex flex-col gap-2">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className="text-xs text-stone-500 hover:text-amber-400 transition-colors duration-200"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#1a1208] text-stone-400 mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-amber-600 grid grid-cols-2 gap-[3px] p-[5px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white/90 rounded-[2px]" />
              ))}
            </div>
            <span className="text-xl font-bold tracking-tight text-stone-50">
              Tile<span className="text-amber-500">Vista</span>
            </span>
          </div>

          <p className="text-xs leading-relaxed text-stone-500 max-w-[220px]">
            Premium tiles for every aesthetic — crafted for spaces that inspire.
          </p>

          <div className="flex items-center gap-3 mt-2">
            {socials.map((s) => (
              <SocialIcon key={s.label} label={s.label} href={s.href} d={s.d} />
            ))}
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((group) => (
          <FooterLinkGroup
            key={group.heading}
            heading={group.heading}
            links={group.links}
          />
        ))}
      </div>

      <div className="border-t border-[#2e2010]" />

      <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-stone-600">
          © {new Date().getFullYear()} TileVista. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5">
          <span className="block w-4 h-px bg-amber-800" />
          <span className="text-xs text-stone-600 tracking-wide">
            Premium Tile Collection
          </span>
          <span className="block w-4 h-px bg-amber-800" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
