import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Product", link: "/products" },
  { name: "Earn", link: "/earn" },
  { name: "Services", link: "/services" },
  { name: "Token", link: "/token" },
  { name: "Centers", link: "/centers" },
  { name: "Events", link: "/events" },
  { name: "Resources", link: "/resources" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  return (
    <header className="w-full dark:bg-transparent border-b mb-8">
      <div className="wrapper flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.svg" 
            alt={`${APP_NAME} logo`} 
            height={48}
            width={48}
            priority={true}
          />
        </Link>

        {/* Navigation Bar */}
        <nav className="flex-1 hidden justify-center lg:flex">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link href={item.link} className="text-gray-800 dark:text-gray-200 hover:text-primary uppercase font-semibold">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu on the right */}
        <div className="flex items-center">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
