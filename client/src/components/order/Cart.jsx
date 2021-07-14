import { Fragment } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { removeFromCart, updateQuantity } from "../../actions/cart";

const Cart = ({ products, removeFromCart, updateQuantity, orderComponent }) => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="m-0">Cart</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {products.map((product) => (
              <div className="cart-product mb-3" key={product.product.id}>
                <hr />
                <div className="row">
                  <div className="col-sm-4 cart-product-image">
                    <img
                      src={product.product.image}
                      alt={product.product.title}
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
                  <div className="col-sm-2 text-end">
                    {product.quantity === 1 ? (
                      <button
                        type="button"
                        className="btn btn-success mb-1"
                        onClick={() => updateQuantity(product.product, true)}
                        style={{ width: "50px", height: "50px" }}
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
                          style={{ width: "50px", height: "50px" }}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => updateQuantity(product.product, true)}
                          style={{ width: "50px", height: "50px" }}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-danger mb-1"
                        onClick={() => updateQuantity(product.product, false)}
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                    )}
                    <br />
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(product)}
                      style={{ width: "50px", height: "50px" }}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {products.length === 0 ? (
          <p>
            {" "}
            <b>Empty</b>
          </p>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => orderComponent("cart")}
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </Fragment>
  );
};

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  orderComponent: PropTypes.func.isRequired,
};

export default connect(null, { removeFromCart, updateQuantity })(Cart);
