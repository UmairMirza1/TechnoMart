import PropTypes from "prop-types";
import { Fragment } from "react";
import { useState } from "react";

const Payment = ({ addToOrder, orderComponent }) => {
  const [paymentType, setPaymentType] = useState({
    selected: "",
  });

  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: "",
  });

  const { number, expiry, cvc } = cardDetails;

  const onChangeRadio = (e) => {
    setPaymentType({
      selected: e.target.value,
    });
  };

  const onChangeCard = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    let paymentDetails = {};
    if (paymentType.selected === "card") {
      paymentDetails.type = "card";
      paymentDetails.number = cardDetails.number;
      paymentDetails.expiry = cardDetails.expiry;
      paymentDetails.cvc = cardDetails.cvc;
    } else {
      paymentDetails.type = "cash";
    }
    addToOrder(paymentDetails);
    orderComponent("payment");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="m-0">Payment Details</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <form id="payment-type" onSubmit={(e) => onSubmitForm(e)}>
            <div className="row mt-2">
              <div className="col-sm-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentType.selected === "card"}
                    onChange={(e) => onChangeRadio(e)}
                  />
                  <label className="form-check-label">Credit/Debit Card</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentType.selected === "cash"}
                    onChange={(e) => onChangeRadio(e)}
                  />
                  <label className="form-check-label">Cash on Delivery</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {paymentType.selected === "card" && (
        <Fragment>
          <div className="row">
            <div className="col-sm-12">
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <label htmlFor="number" className="form-label">
                      Card Number
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      className="form-control mb-1"
                      type="text"
                      name="number"
                      value={number}
                      onChange={(e) => onChangeCard(e)}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="city" className="form-label">
                      Expiry
                    </label>
                    <input
                      className="form-control mb-1"
                      type="text"
                      name="expiry"
                      value={expiry}
                      onChange={(e) => onChangeCard(e)}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="cvc" className="form-label">
                      CVC
                    </label>
                    <input
                      className="form-control mb-1"
                      type="text"
                      name="cvc"
                      value={cvc}
                      onChange={(e) => onChangeCard(e)}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Fragment>
      )}
      <button
        className="btn btn-success mt-1"
        type="submit"
        form="payment-type"
      >
        Submit
      </button>
    </div>
  );
};

Payment.propTypes = {
  addToOrder: PropTypes.func.isRequired,
  orderComponent: PropTypes.func.isRequired,
};

export default Payment;
