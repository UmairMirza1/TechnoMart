import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import {
  searchProducts,
  getCategoryProducts,
  clickCategory,
} from "../../actions/product";
import { addToCart } from "../../actions/cart";

const Products = ({
  searchProducts,
  getCategoryProducts,
  addToCart,
  products,
  isLoaded,
  isSorted,
  isPriceAscending,
  isNameAscending,
  isClicked,
  category,
  isSearch,
  searchTerm,
  isHighlight,
}) => {
  useEffect(() => {
    if (!isClicked && !isSorted && !isSearch && !isHighlight)
      getCategoryProducts(category);
  }, [
    searchProducts,
    getCategoryProducts,
    category,
    isSorted,
    isPriceAscending,
    isNameAscending,
    isClicked,
    isSearch,
    searchTerm,
    isHighlight,
  ]);

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

  return !isLoaded || products === null ? (
    <Fragment>
      <div className="row p-3">
        <p>Loading products...</p>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      {isLoaded && products.length === 0 ? (
        <Fragment>
          <div className="row p-3">
            <p>
              {!isSearch
                ? "There are no products in this category."
                : "No products found."}
            </p>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="row text-center p-3">
            {products.map((product) => (
              <div
                className="col-md-3 d-flex flex-column justify-content-center align-items-center card p-2"
                key={product._id}
              >
                <Link
                  to={`/Product/${product._id}`}
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "5px",
                  }}
                >
                  <div className="products-image">
                    <img src={product.images[0].url} alt={product.title} />
                  </div>
                </Link>
                <Link
                  to={`/Product/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <p
                    className="mt-3"
                    style={{ width: "200px", height: "50px" }}
                  >
                    {product.title}
                  </p>
                </Link>
                <p>$ {product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => cartClick(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Products.propTypes = {
  searchProducts: PropTypes.func.isRequired,
  getCategoryProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isSorted: PropTypes.bool.isRequired,
  isPriceAscending: PropTypes.bool.isRequired,
  isNameAscending: PropTypes.bool.isRequired,
  isInRange: PropTypes.bool.isRequired,
  isClicked: PropTypes.bool.isRequired,
  isSearch: PropTypes.bool,
  searchTerm: PropTypes.string,
  isHighlight: PropTypes.bool,
};

//bp
const stateToProps = (state) => ({
  products: state.product.products,
  isLoaded: state.product.isLoaded,
  isSorted: state.product.isSorted,
  isPriceAscending: state.product.isPriceAscending,
  isNameAscending: state.product.isNameAscending,
  isInRange: state.product.isInRange,
  isClicked: state.product.isClicked,
});

//state to  props picking up state
//then actions
//connect ==> redux specific
export default connect(stateToProps, {
  searchProducts,
  getCategoryProducts,
  clickCategory,
  addToCart,
})(Products);
