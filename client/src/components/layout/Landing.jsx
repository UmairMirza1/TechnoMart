import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Products from "../product/Products";

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
              <div className="col-sm-6 text-center">
                <h1>Highlights of the Day</h1>
              </div>
            </div>
            <Products />
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
