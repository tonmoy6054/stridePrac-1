import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Home</a></li>
        <Link to='/allproducts' className="mt-2">All Products</Link>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
  <img 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQee5i3-WURqS8SpLJTSO4e_-N5ZXzuxiF2g1sMXsGNrA&s' 
    className="w-16 h-16" 
    alt="Logo"
  />
</a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/">Home</a></li>
      <Link to='/allproducts' className="mt-2">All Products</Link>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/register' className="btn">Register</Link>
    <Link to='/login' className="btn">Login</Link>
  </div>
</div>
    );
};

export default Navbar;