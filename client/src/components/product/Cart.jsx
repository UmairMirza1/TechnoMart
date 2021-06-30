import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getSingleProduct } from "../../actions/product";

const Cart = ({ getSingleProduct, products, isLoaded }) => {
  useEffect(() => {
    getSingleProduct(products[0]);
  }, [getSingleProduct, products]);
  return !isLoaded || !products ? (
    <Fragment>Loading cart...</Fragment>
  ) : (
    <Fragment>{products[0]}</Fragment>
  );
};

Cart.propTypes = {
  getSingleProduct: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  products: state.cart.products,
  isLoaded: state.cart.isLoaded,
});

export default connect(stateToProps, { getSingleProduct })(Cart);
