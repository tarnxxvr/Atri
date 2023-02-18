import React from "react";
import "../page-css/navbar.css";
const Nav = () => {
  return (
    <>
      <div className="container navmain my-2">
        <div className="left">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="https://cdn.pixabay.com/photo/2012/04/13/01/51/hamburger-31775_960_720.png"
                  alt="Bootstrap"
                  width="50"
                  height=""
                />
              </a>
              <span className="navbar-brand mb-0 h1">Restaurante X</span>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Cart
                </a>
              </li>
            </div>
          </nav>
        </div>
        <div className="right">
          <button type="button" className="mx-1 my-2 btn btn-secondary ">
            Order Online
          </button>
          <button type="button" className="mx-1 my-2 btn echo ">
            Reservate
          </button>
        </div>
      </div>
    </>
  );
};
export default Nav;
