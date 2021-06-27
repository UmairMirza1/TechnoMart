import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getSingleProduct } from "../../actions/product";

const SingleProduct = ({ getSingleProduct, product, isLoaded, match }) => {
  useEffect(() => {
    getSingleProduct(match.params.id);
  }, [getSingleProduct, match.params.id]);

  return !isLoaded || product === null ? (
    <Fragment>
      <h1>Product loading...</h1>
    </Fragment>
  ) : (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-center">
            <div className="row" style={{ height: "50%" }}>
              <div className="col-sm-12">
                <img
                  src={product.image.url}
                  alt={product.title}
                  style={{
                    width: "50%",
                    height: "auto",
                    maxHeight: "50%",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
            <div className="row" style={{ height: "50%" }}>
              <div className="col-sm-12">
                <img
                  src={product.image.url}
                  alt={product.title}
                  style={{
                    width: "25%",
                    height: "auto",
                    maxHeight: "25%",
                    borderRadius: "5px",
                    marginRight: "5px",
                  }}
                />
                <img
                  src={product.image.url}
                  alt={product.title}
                  style={{
                    width: "25%",
                    height: "auto",
                    maxHeight: "25%",
                    borderRadius: "5px",
                    marginRight: "5px",
                  }}
                />
                <img
                  src={product.image.url}
                  alt={product.title}
                  style={{
                    width: "25%",
                    height: "auto",
                    maxHeight: "25%",
                    borderRadius: "5px",
                    marginRight: "5px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-center">
            <h1>{product.title}</h1>
            <hr />
            <p>About this product: {product.description}</p>
            <p>In stock: {product.quantity}</p>
            <p>$ {product.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SingleProduct.propTypes = {
  getSingleProduct: PropTypes.func.isRequired,
  product: PropTypes.object,
  isLoaded: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  product: state.product.product,
  isLoaded: state.product.isLoaded,
});

export default connect(stateToProps, { getSingleProduct })(SingleProduct);
