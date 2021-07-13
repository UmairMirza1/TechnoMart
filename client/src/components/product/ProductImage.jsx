import PropTypes from "prop-types";
import { Fragment, useEffect, useCallback } from "react";

const ProductImage = ({ images, toggle }) => {
  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        toggle(false);
      }
    },
    [toggle]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <Fragment>
      <div className="container-fluid product-image-full">
        <div className="d-flex flex-row justify-content-end">
          <button className=" btn btn-danger" onClick={() => toggle(false)}>
            <i className="fas fa-times" />
          </button>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-image"
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
          <div className="carousel-inner image">
            <div className="carousel-item active">
              <img src={images[0].url} alt="..." />
            </div>
            <div className="carousel-item">
              <img src={images[1].url} alt="..." />
            </div>
            <div className="carousel-item">
              <img src={images[2].url} alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

ProductImage.propTypes = {
  images: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ProductImage;
