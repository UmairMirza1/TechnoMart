import { Fragment } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TechnoMart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className="nav nav-tabs justify-content-center mt-5 ">
        <li className="nav-item dropdown">
          <p
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            Components
          </p>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/Processors",
                  state: "Processors",
                }}
              >
                Processors
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/GraphicsCards",
                  state: "Graphics Cards",
                }}
              >
                Graphics Cards
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/Motherboards",
                  state: "Motherboards",
                }}
              >
                Motherboards
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/RAM",
                  state: "RAM",
                }}
              >
                RAM
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/Storage",
                  state: "Storage",
                }}
              >
                Storage
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/PowerSupplies",
                  state: "Power Supplies",
                }}
              >
                Power Supplies
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <p
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            Accessories
          </p>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/Monitors",
                  state: "Monitors",
                }}
              >
                Monitors
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/Speakers",
                  state: "Speakers",
                }}
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/Mice",
                  state: "Mice",
                }}
              >
                Mice
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/Keyboards",
                  state: "Keyboards",
                }}
              >
                Keyboards
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item mt-1">
          <Link
            className="dropdown-item"
            to={{
              pathname: "/Category/Laptops",
              state: "Laptops",
            }}
            style={{ color: "blue" }}
          >
            Laptops
          </Link>
        </li>
        <li className="nav-item mt-1">
          <Link
            className="dropdown-item"
            to={{
              pathname: "/Category/Consoles",
              state: "Consoles",
            }}
            style={{ color: "blue" }}
          >
            Consoles
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
