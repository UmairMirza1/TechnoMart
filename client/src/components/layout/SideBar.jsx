import { Fragment, useState } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import {
  sortPriceAction,
  sortNameAction,
  getRangeAction,
} from "../../actions/filter";

const SideBar = ({
  sortPriceAction,
  sortNameAction,
  getRangeAction,
  products,
}) => {
  const [price, setPrice] = useState({
    text: "Price Rising",
    ascending: true,
  });

  const [name, setName] = useState({
    text: "Name A-Z",
    ascending: true,
  });

  const [range, setRange] = useState({
    starting: "",
    ending: "",
  });

  const rangeChange = (e) => {
    setRange({ ...range, [e.target.name]: e.target.value });
  };

  const sortPrice = () => {
    sortPriceAction(products, price.ascending);
    setPrice({
      text: price.ascending ? "Price Falling" : "Price Rising",
      ascending: !price.ascending,
    });
  };

  const sortName = () => {
    sortNameAction(products, name.ascending);
    setName({
      text: name.ascending ? "Name Z-A" : "Name A-Z",
      ascending: !name.ascending,
    });
  };

  const getRange = () => {
    if (range.starting === "") {
      setRange({
        ...range,
        starting: "0",
      });
    }
    if (range.ending === "") {
      var max = 0;
      products.forEach((product) => {
        if (product.price > max) max = product.price;
      });
      setRange({
        ...range,
        ending: max.toString(),
      });
    }
    getRangeAction(products, range.starting, range.ending);
    setRange({
      starting: "",
      ending: "",
    });
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h4>Filters</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-success mb-2"
              onClick={sortPrice}
              style={{ width: "100%" }}
            >
              {price.text}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-success mb-2"
              onClick={sortName}
              style={{ width: "100%" }}
            >
              {name.text}
            </button>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getRange();
          }}
        >
          <div className="row">
            <div className="col-sm-12">
              <label className="form-label">Range</label>
            </div>
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control text-center mb-1"
                placeholder="Start"
                name="starting"
                value={range.starting}
                onChange={(e) => rangeChange(e)}
              />
              <input
                type="text"
                className="form-control text-center mb-2"
                placeholder="End"
                name="ending"
                value={range.ending}
                onChange={(e) => rangeChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button
                type="submit"
                className="btn btn-outline-success"
                style={{ width: "100%" }}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

SideBar.propTypes = {
  sortPriceAction: PropTypes.func.isRequired,
  sortNameAction: PropTypes.func.isRequired,
  getRangeAction: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const stateToProps = (state) => ({
  products: state.product.products,
});

export default connect(stateToProps, {
  sortPriceAction,
  sortNameAction,
  getRangeAction,
})(SideBar);
