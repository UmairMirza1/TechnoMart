import PropTypes from "prop-types";
import { Fragment } from "react";

const Summary = ({
  products,
  shipTo,
  payment,
  cartTotal,
  fee,
  orderTotal,
  confirmOrder,
}) => {
  return (
    <div className="container-fluid total">
      <div className="row">
        <div className="col-sm-12">
          <h3>Order Summary</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{product.product.title}</td>
                  <td>{product.quantity}</td>
                  <td>{product.newPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {Object.keys(shipTo).length !== 0 && (
            <Fragment>
              <div className="row">
                <div className="col-sm-12">
                  <p>
                    <b>Name: </b>
                    {shipTo.fullName}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <p>
                    <b>Address: </b>
                    {shipTo.address}, {shipTo.city}, {shipTo.country}.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <p>
                    <b>Email: </b>
                    {shipTo.email}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <p>
                    <b>Phone: </b>
                    {shipTo.phone}
                  </p>
                </div>
              </div>
              {Object.keys(payment).length !== 0 && (
                <Fragment>
                  <div className="row">
                    <div className="col-sm-12">
                      <p>
                        <b>Payment Type: </b>
                        {payment.type.charAt(0).toUpperCase() +
                          payment.type.slice(1)}
                      </p>
                    </div>
                  </div>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td>Cart Total</td>
                        <td>$ {cartTotal}</td>
                      </tr>
                      <tr>
                        <td>Shipping Fee</td>
                        <td>$ {fee}</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td>$ {orderTotal}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => confirmOrder()}
                  >
                    Confirm Order
                  </button>
                </Fragment>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Summary.propTypes = {
  products: PropTypes.array.isRequired,
  shipTo: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired,
  cartTotal: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  orderTotal: PropTypes.number.isRequired,
  confirmOrder: PropTypes.func.isRequired,
};

export default Summary;
