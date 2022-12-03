import { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getCategoryProducts, clickCategory } from "../../actions/product";

const Navbar = ({ getCategoryProducts, clickCategory, products, history }) => {
  const onClick = (category) => {
    getCategoryProducts(category);
    clickCategory();
  };

  const [search, setSearch] = useState("");

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
                <form
                  className="d-flex"
                  onSubmit={(e) => {
                    e.preventDefault();
                    history.push(`/Search/${search}`);
                    setSearch("");
                  }}
                >
                  <input
                    className="form-control me-2"
                    type="search"
                    aria-label="Search"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    required
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Order">
                  <p style={{ margin: "0" }}>
                    Cart{" "}
                    <sup>
                      {products.length > 0 && (
                        <span className="badge bg-secondary">
                          {products.length}
                        </span>
                      )}
                    </sup>
                  </p>
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
                    <Link className="dropdown-item" to="/Signin">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Signup">
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
            <li onClick={(e) => onClick("Processors")}>
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
            <li onClick={(e) => onClick("Graphics Cards")}>
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
            <li onClick={(e) => onClick("Motherboards")}>
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
            <li onClick={(e) => onClick("RAM")}>
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
            <li onClick={(e) => onClick("Storage")}>
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
            <li onClick={(e) => onClick("Power Supplies")}>
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
            <li onClick={(e) => onClick("Monitors")}>
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
            <li onClick={(e) => onClick("Speakers")}>
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
            <li onClick={(e) => onClick("Headphones")}>
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/Category/Headphones",
                  state: "Headphones",
                }}
              >
                Headphones
              </Link>
              
            </li>

            <li onClick={(e) => onClick("Mice")}>
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
            <li onClick={(e) => onClick("Keyboards")}>
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
        <li className="nav-item mt-1" onClick={(e) => onClick("Laptops")}>
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
        <li className="nav-item mt-1" onClick={(e) => onClick("Consoles")}>
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

Navbar.propTypes = {
  getCategoryProducts: PropTypes.func.isRequired,
  clickCategory: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const stateToProps = (state) => ({
  products: state.cart.products,
});

export default connect(stateToProps, {
  getCategoryProducts,
  clickCategory,
})(withRouter(Navbar));
