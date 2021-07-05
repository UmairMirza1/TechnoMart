import { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getSingleProduct } from "../../actions/product";
import { addToCart } from "../../actions/cart";

const SingleProduct = ({
  getSingleProduct,
  addToCart,
  product,
  isLoaded,
  match,
}) => {
  useEffect(() => {
    getSingleProduct(match.params.id);
  }, [getSingleProduct, match.params.id]);

  const [preview, setPreview] = useState(false);

  const cartClick = (product) => {
    const cartProduct = {
      id: product._id,
      title: product.title,
      image: product.images[0].url,
      price: product.price,
      maxQuantity: product.quantity,
    };
    addToCart(cartProduct);
  };

  return !isLoaded || product === null ? (
    <Fragment>
      <h1>Product loading...</h1>
    </Fragment>
  ) : (
    <Fragment>
      <div className="container-fluid">
        <div className="row" style={{ height: "100%" }}>
          <div className="col-sm-6 text-center">
            <div className="row" style={{ height: "50%" }}>
              <div className="col-sm-12 product-image p-3">
                <img
                  src={!preview ? product.images[0].url : preview}
                  alt={product.title}
                />
              </div>
            </div>
            <div className="row" style={{ height: "25%" }}>
              <div className="col-sm-12 product-image-list">
                {product.images.map((image) => (
                  <img
                    key={image._id}
                    src={image.url}
                    alt={product.title}
                    onClick={() => setPreview(image.url)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-center">
            <h1>{product.title}</h1>
            <hr />
            <p>{product.description}</p>
            <p>In stock: {product.quantity}</p>
            <p>$ {product.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => cartClick(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SingleProduct.propTypes = {
  getSingleProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.object,
  isLoaded: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  product: state.product.product,
  isLoaded: state.product.isLoaded,
});

export default connect(stateToProps, { getSingleProduct, addToCart })(
  SingleProduct
);
