import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getProductsAction } from "../../actions/product";

const Products = ({ getProductsAction, products, isLoaded, limit }) => {
  useEffect(() => {
    getProductsAction(limit);
  }, [getProductsAction, limit]);
  return (
    isLoaded &&
    products !== null && (
      <Fragment>
        <div className="row text-center mt-1 mb-3">
          {products.map((product) => (
            <div
              className="col-md-3 d-flex flex-column justify-content-center align-items-center card p-2"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "200px", height: "200px" }}
              />
              <p className="mt-3" style={{ width: "200px", height: "50px" }}>
                {product.title}
              </p>
              <p>$ {product.price}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          ))}
        </div>
      </Fragment>
    )
  );
};

Products.propTypes = {
  getProductsAction: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  products: state.product.products,
  isLoaded: state.product.isLoaded,
});

export default connect(stateToProps, { getProductsAction })(Products);
