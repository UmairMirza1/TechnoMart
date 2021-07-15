import PropTypes from "prop-types";
import { Fragment } from "react";

const Confirmed = ({ orderID }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 text-center">
          {orderID !== "0" ? (
            <Fragment>
              <h2>Order Confirmed!</h2>
              <p>
                Your order has been placed succesfully. Please note your order
                ID: {orderID}. Thank you!
              </p>
            </Fragment>
          ) : (
            <Fragment>
              <h2>Order Failed!</h2>
              <p>
                Your order cannot be placed right now due to techincal
                difficulties. Please try again later.
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Confirmed.propTypes = {
  orderID: PropTypes.string.isRequired,
};

export default Confirmed;
