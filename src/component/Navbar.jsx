import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-1 backdrop-blur-lg bg-slate-50/50 border-b border-neutral-700">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-10 w-10 mr-2"
              src="/assets/web/logo.png" 
              alt="logo"
            />
            <span className="text-xl tracking-tight font-bold font-serif">
              ITUMRC24
            </span>
          </div>
          {/* Navigation Links */}
          <ul className="hidden lg:flex space-x-12 text-1xl font-bold font-serif">
            <li>
              <NavLink 
                to="/" 
                className="hover:text-blue-500 cursor-pointer" 
                activeClassName="text-blue-500"
              >
                Track
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/schedule" 
                className="hover:text-blue-500 cursor-pointer" 
                activeClassName="text-blue-500"
              >
                Schedule
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/speakers" 
                className="hover:text-blue-500 cursor-pointer" 
                activeClassName="text-blue-500"
              >
                Speakers
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className="hover:text-blue-500 cursor-pointer" 
                activeClassName="text-blue-500"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
