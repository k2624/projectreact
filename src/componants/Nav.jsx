import React from "react";
import { Link, useLocation } from "react-router-dom"; // استخدم Link و useLocation من react-router-dom

export default function Nav() {
  const location = useLocation(); // الحصول على الموقع الحالي للمسار

  return (
    <div className="navegiton position-relative">
      <nav
        className="navbar  navbar-expand-lg p-4 shadow color-light fixed-top"
        id="navbar-example"
      >
        <div className="container">
          <a
            className="navbar-brand text-uppercase mb-3 fs-3 fw-bolder text-white"
            href="#"
          >
            Start Framework
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto text-center text-lg-start me-5 mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <Link
                  className={`nav-link text-uppercase rounded-2 mb-3 fs-6 fw-bolder ${
                    location.pathname === "/About" ? "bg-active" : ""
                  } text-white`}
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-uppercase rounded-2 mb-3 fs-6 fw-bolder ${
                    location.pathname === "/portfolio" ? "bg-active" : ""
                  } text-white`}
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-uppercase rounded-2 mb-3 fs-6 fw-bolder ${
                    location.pathname === "/contact" ? "bg-active" : ""
                  } text-white`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
