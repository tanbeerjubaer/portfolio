import { Link } from "react-router-dom";
import { name } from "../database/sidebar.json";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-start items-center gap-4 border-b border-gray-200 h-auto lg:h-20 px-4 lg:px-0">
      <div className="cormorant-garamond-bold text-2xl lg:text-3xl px-4 lg:px-10 py-4 lg:py-0 w-full lg:w-auto flex justify-between items-center">
        <Link to="/portfolio">{name}</Link>
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`lg:ml-6 w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
        <ul className="flex flex-col lg:flex-row justify-start items-center gap-4 lg:gap-6 pb-4 lg:pb-0">
          <li>
            <Link to="/publications" onClick={() => setIsMenuOpen(false)} className="text-base lg:text-lg">Publications</Link>
          </li>
          <li>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="text-base lg:text-lg">Projects</Link>
          </li>
          <li>
              <Link to="/experiences" onClick={() => setIsMenuOpen(false)} className="text-base lg:text-lg">Experience</Link>
          </li>
          <li>
            <Link to="/teaching-services" onClick={() => setIsMenuOpen(false)} className="text-base lg:text-lg">Teaching & Services</Link>
          </li>
          <li>
            <Link to="/awards" onClick={() => setIsMenuOpen(false)} className="text-base lg:text-lg">Awards</Link>
          </li>
          <li>
            <Link to="/cv" onClick={() => setIsMenuOpen(false)} className="text-base lg:text-lg">CV</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
