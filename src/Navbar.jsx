import { Link } from "react-router-dom";
// import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="w-full  px-4 py-5 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to='/' className="text-xl font-semibold">
            Pre<span className="text-gray-600">Skool</span>
          </Link>
        </div>
        <div className="hidden md:flex w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 px-3 py-1.5 text-sm text-primary font-Nunito-font font-normal rounded-full border border-gray-300 outline-none"
          />
        </div>
        <div>
          <ul className=" space-x-5 flex items-center">
            <Link to="/" className="text-base text-primary font-medium font-Nunito-font">Home</Link>
            <Link to="/create" className="text-base text-primary font-medium font-Nunito-font">create</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
