import { Fragment, useState } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { sortPriceAction, sortNameAction, getRangeAction } from "../../actions/filter";

const SideBar = ({ sortPriceAction, sortNameAction, getRangeAction, products }) => {
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
    ending: ""
  })

  const rangeChange = (e) => {
    setRange({...range, [e.target.name]: e.target.value})
  }

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
      })
    }
    if (range.ending === "") {
      var max = 0;
      products.forEach((product) => {if (product.price > max) max = product.price})
      setRange({
        ...range,
        ending: max.toString()
      })
    }
    getRangeAction(products, range.starting, range.ending)
    setRange({
        starting: "",
        ending: ""
      })
  }

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
            <button className="btn btn-success" onClick={sortPrice}>
              {price.text}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-success" onClick={sortName}>
              {name.text}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>Range</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input type="text"
            className="text-box"
            name="starting"
            value={range.starting}
            onChange={(e) => rangeChange(e)}
            />
          </div>
          <div className="col-sm-6">
            <input type="text"
            className="text-box"
            name="ending"
            value={range.ending}
            onChange={(e) => rangeChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button onClick={getRange} className="btn btn-success">Search</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>Brand</p>
          </div>
          </div>
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

export default connect(stateToProps, { sortPriceAction, sortNameAction, getRangeAction })(
  SideBar
);
