import { useState } from "react";
import "../../sass/main.scss";
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navigation bg-neutral-900 padding-block-36 align-items-center">
      <div className="logo flex-between align-items-center">
        <div className="align-items-center margin-inline-start-24">
          <a href="index.html" className="logo">
            <h1 className="logo fs-700 clr-neutral-100">REALITY-B</h1>
          </a>
        </div>
        <div className="align-items-center">
          <nav className="primary-navigation">
            <ul className="flex-group margin-inline-end-24" id="menu">
              <div className="flex-even-columns align-items-center">
                <li><Link to="/home"><a href="/home">HOME</a></Link></li>
                <li><Link to="/services"><a href="services/">SERVICES</a></Link></li>
                <li><Link to="/projects"><a href="projects/">PROJECTS</a></Link></li>
                <li><Link to="/about"><a href="about/">ABOUT US</a></Link></li>
              </div>
              <div>
                <li>
                  <a className="button" data-type="accent" href="#contact">CONTACT US</a>
                </li>
              </div>
            </ul>
            <button className="mobile-toggle" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
