import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center w-full px-20 border-b-2 bg-black">
      <div>
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/94/15/fast-food-logo-original-design-set-burger-pizza-vector-36689415.jpg"
          alt=""
          className="w-35 h-16 rounded-full"
        />
      </div>

      <div className="flex gap-8 text-xl">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/products" className="text-white hover:text-gray-300">
          Products
        </Link>
        <Link to="/cart" className="text-white hover:text-gray-300">
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Header;