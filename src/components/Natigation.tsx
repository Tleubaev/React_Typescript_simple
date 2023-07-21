import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
      <span className="font-bold">React 2023</span>
      <span className="">
        <Link to="/" className="mr-4">
          Products
        </Link>
        <Link to="about">About</Link>
      </span>
    </nav>
  );
}

export default Navigation;
