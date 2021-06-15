import { Fragment } from "react";
import { Link } from "react-router-dom";

import Products from "../product/Products";

const Landing = () => {
  return (
    <Fragment>
      {/* Tabs bar */}
      <ul className="nav nav-tabs justify-content-center tabs">
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
      {/* SlideShow */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/7001943/pexels-photo-7001943.jpeg"
              className="d-block w-100"
              alt="Deal of the Week 1"
              style={{ height: "auto", maxHeight: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/7666858/pexels-photo-7666858.jpeg"
              className="d-block w-100"
              alt="Deal of the Week 2"
              style={{ height: "auto", maxHeight: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/5507152/pexels-photo-5507152.jpeg"
              className="d-block w-100"
              alt="Deal of the Week 3"
              style={{ height: "auto", maxHeight: "500px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Products */}
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
