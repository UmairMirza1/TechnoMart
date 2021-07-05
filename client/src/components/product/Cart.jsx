import { Fragment } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { removeFromCart, updateQuantity } from "../../actions/cart";

const Cart = ({ products, total, updateQuantity, removeFromCart }) => {
  return products.length === 0 ? (
    <Fragment>Cart is empty.</Fragment>
  ) : (
    <Fragment>
      <div className="container-fluid">
        <h1 className="text-center">Cart</h1>
        <div className="row">
          <div className="col-sm-6">
            <h3>Items</h3>
            {products.map((product) => (
              <div className="cart-product mb-3" key={product.product.id}>
                <hr />
                <div className="row">
                  <div className="col-sm-4">
                    <img
                      src={product.product.image}
                      alt={product.product.title}
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <p>
                      <b>
                        {product.product.title}{" "}
                        {product.quantity > 1 && (
                          <Fragment>x{product.quantity}</Fragment>
                        )}
                      </b>
                    </p>
                    <p>$ {product.newPrice}</p>
                  </div>
                  <div className="col-sm-2">
                    {product.quantity === 1 ? (
                      <button
                        type="button"
                        className="btn btn-success mb-1"
                        onClick={() => updateQuantity(product.product, true)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    ) : product.quantity < product.product.maxQuantity ? (
                      <div
                        className="btn-group mb-1"
                        role="group"
                        aria-label="Basic mixed styles example"
                      >
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => updateQuantity(product.product, false)}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => updateQuantity(product.product, true)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-danger mb-1"
                        onClick={() => updateQuantity(product.product, false)}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                    )}
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(product)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-6 mt-2 total">
            <div className="row">
              <div className="col-sm-12">
                <h3>Total</h3>
                <p>
                  <b>$ {total}</b>
                </p>
                <button className="btn btn-primary">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

const stateToProps = (state) => ({
  products: state.cart.products,
  total: state.cart.total,
});

export default connect(stateToProps, { updateQuantity, removeFromCart })(Cart);
