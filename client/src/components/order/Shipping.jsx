import PropTypes from "prop-types";
import { useState } from "react";

const Shipping = ({ addToOrder, orderComponent }) => {
  const [shippingData, setShippingData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    phone: "",
  });

  const { fullName, email, address, phone, city, country } = shippingData;

  const onChange = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="m-0">Shipping Details</h3>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addToOrder(shippingData);
          orderComponent("shipping");
        }}
      >
        <div className="row mt-2">
          <div className="col-sm-12">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input
              className="form-control mb-1"
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input
              className="form-control mb-1"
              type="text"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input
              className="form-control mb-1"
              type="text"
              name="address"
              value={address}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              className="form-control mb-1"
              type="text"
              name="city"
              value={city}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              className="form-control mb-1"
              type="text"
              name="country"
              value={country}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input
              className="form-control mb-1"
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-success mt-1" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Shipping.propTypes = {
  addToOrder: PropTypes.func.isRequired,
  orderComponent: PropTypes.func.isRequired,
};

export default Shipping;
