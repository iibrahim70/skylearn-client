import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems = [
    { label: "Home", path: "" },
    { label: "About Us", path: "" },
    { label: "Key Information", path: "" },
    { label: "Admission", path: "" },
    { label: "Facilities", path: "" },
    { label: "Achievements", path: "" },
    { label: "Policies", path: "" },
    { label: "Request For A Tour", path: "" },
    { label: "Contact Us", path: "" },
  ];

  // stop scrolling when nav is open on small devices
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 right-0 z-10">
      {/* main navigation bar */}
      <div className="container flex items-center justify-between py-3">
        {/* left side */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden"
          >
            <IoMenu className="size-6" />
          </button>

          <Link to="/" className="font-bold text-lg md:text-xl">
            <span className="text-blue-500">Sky</span> Learn
          </Link>
        </div>

        {/* middle */}
        <div className="max-lg:hidden flex justify-between gap-5 text-[15px]">
          {navItems?.map((item, index) => (
            <Link key={index} to={item?.path as string}>
              {item?.label}
            </Link>
          ))}
        </div>

        {/* right side */}
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/signin"
            className={buttonVariants({
              className: "rounded-full",
            })}
          >
            Login
          </Link>
        </div>

        {/* mobile navigation overlay */}
        <div
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "bg-black/50 fixed top-0 left-0 w-full h-full backdrop-blur-md z-50 lg:hidden",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        ></div>

        {/* mobile navigation content */}
        <div
          className={cn(
            "bg-white absolute top-0 left-0 w-1/2 min-h-screen max-h-screen z-50 lg:hidden px-3 py-10 rounded transition-transform ease-in-out duration-300",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* closing button */}
          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex justify-end mb-5"
          >
            <button>
              <IoClose className="size-6" />
            </button>
          </div>

          {/* navigation items */}
          <div className="flex flex-col gap-1">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                to={item?.path as string}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="px-4 py-2 rounded hover:bg-gray-300/80 duration-300 transition-all cursor-pointer"
              >
                {item?.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
