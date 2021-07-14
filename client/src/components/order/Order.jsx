import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Cart from "../order/Cart";
import Shipping from "./Shipping";
import Payment from "./Payment";

// Redux
import { connect } from "react-redux";
import { addPayment, addShipping } from "../../actions/order";
import Summary from "./Summary";

const Order = ({ products, total, cart, order, addShipping, addPayment }) => {
  const [showComponent, setShowComponent] = useState("cart");

  const shippingData = (shipping) => {
    addShipping(shipping, cart);
  };

  const paymentData = (payment) => {
    addPayment(payment);
  };

  const orderComponent = (component) => {
    switch (component) {
      case "cart":
        setShowComponent("shipping");
        break;
      case "shipping":
        setShowComponent("payment");
        break;
      case "payment":
        setShowComponent("payment");
        break;
      default:
        setShowComponent("cart");
    }
  };

  const confirmOrder = () => {
    const completeOrder = {
      order,
    };
    console.log(completeOrder);
  };

  return (
    <Fragment>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-sm-6">
            {showComponent === "cart" ? (
              <Cart products={products} orderComponent={orderComponent} />
            ) : showComponent === "shipping" ? (
              <Shipping
                addToOrder={shippingData}
                orderComponent={orderComponent}
              />
            ) : (
              <Payment
                addToOrder={paymentData}
                orderComponent={orderComponent}
              />
            )}
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12">
                <Summary
                  products={products}
                  cartTotal={total}
                  shipTo={order.shipping}
                  payment={order.payment}
                  fee={order.fee}
                  orderTotal={order.total}
                  confirmOrder={confirmOrder}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Order.propTypes = {
  products: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  cart: PropTypes.object.isRequired,
  addShipping: PropTypes.func.isRequired,
  addPayment: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
  products: state.cart.products,
  total: state.cart.total,
  cart: state.cart,
  order: state.order,
});

export default connect(stateToProps, { addShipping, addPayment })(Order);
