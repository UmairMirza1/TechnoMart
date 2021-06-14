import { Fragment } from "react";
import { Link } from "react-router-dom";

import Products from "../product/Products";

const Landing = () => {
  return (
    <Fragment>
      <ul className="nav nav-tabs justify-content-center">
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
              <Link className="dropdown-item" to="/ProductType">
                Processors
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/GraphicsCards">
                Graphics Cards
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Motherboards">
                Motherboards
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/RAM">
                RAM
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Storage">
                Storage
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/PowerSupplies">
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
              <Link className="dropdown-item" to="/Monitors">
                Monitors
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Speakers">
                Speakers
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Mice">
                Mice
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Keyboards">
                Keyboards
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Laptops">
            Laptops
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Consoles">
            Consoles
          </Link>
        </li>
      </ul>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-sm-12">
            <div className="row justify-content-center p-3">
              <div className="col-sm-6 text">
                <h1>Welcome to TechnoMart</h1>
              </div>
            </div>
            <Products />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
