import { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductImage from "./ProductImage";

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
  const [toggleFullImage, setToggleFullImage] = useState(false);

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
      {toggleFullImage && (
        <ProductImage images={product.images} toggle={setToggleFullImage} />
      )}
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12 product-preview-col mb-2">
                <div
                  className="product-preview"
                  onClick={() => setToggleFullImage(true)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={!preview ? product.images[0].url : preview}
                    alt={product.title}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 product-list-col mb-2">
                <div className="product-list">
                  {product.images.map((image, index) => (
                    <Fragment key={index}>
                      <div
                        className="product-list-image me-1"
                        onClick={() => setPreview(image.url)}
                      >
                        <img src={image.url} alt={product.title} />
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <h1 className="text-center">{product.title}</h1>
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
