"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Service", path: "/Service" },
  { name: "Works", path: "/Work" },
  { name: "Contact", path: "/Contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 z-50 px-6 py-4 bg-black/60 backdrop-blur-md flex items-center justify-between">
      <div className="flex">
        <span className="text-2xl font-bold">Byxbyte Media</span>
      </div>
      <div className="flex items-center gap-10">
        <ul className="flex gap-10 text-gray-400">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:text-white duration-300 ${
                  pathname === item.path ? "text-orange-400 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
