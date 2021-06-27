import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getCategoryProducts, clickCategory } from "../../actions/product";

const Products = ({
  getCategoryProducts,
  products,
  isLoaded,
  isSorted,
  isPriceAscending,
  isNameAscending,
  isClicked,
  category,
}) => {
  useEffect(() => {
    if (!isClicked && !isSorted) getCategoryProducts(category);
  }, [
    getCategoryProducts,
    category,
    isSorted,
    isPriceAscending,
    isNameAscending,
    isClicked
  ]);
  
  return !isLoaded || products === null ? (
    <Fragment>
      <div className="row p-3">
        <p>Loading products...</p>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      {products.length === 0 ? (
        <Fragment>
          <div className="row p-3">
            <p>There are no products in this category.</p>
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
                <Link to={`/Product/${product._id}`}>
                <img
                  src={product.image.url}
                  alt={product.title}
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "5px",
                  }}
                />
                </Link>
                <Link to={`/Product/${product._id}`} style={{textDecoration: "none"}}>
                <p className="mt-3" style={{ width: "200px", height: "50px" }}>
                  {product.title}
                </p>
                </Link>
                <p>$ {product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Products.propTypes = {
  getCategoryProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isSorted: PropTypes.bool.isRequired,
  isPriceAscending: PropTypes.bool.isRequired,
  isNameAscending: PropTypes.bool.isRequired,
  isInRange: PropTypes.bool.isRequired,
  isClicked: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  products: state.product.products,
  isLoaded: state.product.isLoaded,
  isSorted: state.product.isSorted,
  isPriceAscending: state.product.isPriceAscending,
  isNameAscending: state.product.isNameAscending,
  isInRange: state.product.isInRange,
  isClicked: state.product.isClicked
});

export default connect(stateToProps, { getCategoryProducts, clickCategory })(Products);
