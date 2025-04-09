import {
  FaBars,
  FaBell,
  FaChartBar,
  FaComments,
  FaMoon,
  FaRegDotCircle,
} from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
// import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-2 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <span className="text-xl font-semibold">
          Pre<span className="text-gray-600">Skool</span>
        </span>
      </div>

      <div className="hidden md:flex w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-1 px-3 py-1 border rounded-full bg-gray-100">
          <MdOutlineCalendarToday className="text-sm" />
          <span className="text-sm">Academic Year : 2024 / 2025</span>
        </div>
        <IoLanguage className="text-lg cursor-pointer" />
        <FaMoon className="text-lg cursor-pointer" />
        <FaBell className="text-lg cursor-pointer" />
        <FaComments className="text-lg cursor-pointer" />
        <FaChartBar className="text-lg cursor-pointer" />
        <img
          src="/profile.png"
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer border"
        />
      </div>
    </nav>
  );
};

export default Navbar;
