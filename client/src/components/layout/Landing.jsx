import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Products from "../product/Products";

// Images
import banner1 from "../../static/banner1.png";
import banner2 from "../../static/banner2.png";
import banner3 from "../../static/banner3.png";

//Redux
import { connect } from "react-redux";
import { highlightProducts } from "../../actions/product";

const Landing = ({ highlightProducts }) => {
  useEffect(() => {
    highlightProducts();
  }, [highlightProducts]);
  return (
    <Fragment>
      {/* Welcome */}
      <div className="container-fluid">
        <div className="row justify-content-center text-center">
          <div className="col-sm-12">
            <h1>Welcome to TechnoMart</h1>
          </div>
        </div>
      </div>
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
              src={banner1}
              className="d-block w-100"
              alt="Banner 1"
              style={{ height: "auto", maxHeight: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={banner2}
              className="d-block w-100"
              alt="Banner 2"
              style={{ height: "auto", maxHeight: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={banner3}
              className="d-block w-100"
              alt="Banner 3"
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
              <div className="col-sm-6 text-center">
                <h1>Highlights of the Day</h1>
              </div>
            </div>
            <Products isHighlight={true} />
            {/* <Products /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  highlightProducts: PropTypes.func.isRequired,
};

export default connect(null, { highlightProducts })(Landing);
