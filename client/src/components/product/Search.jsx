import { useEffect } from "react";
import PropTypes from "prop-types";
import Products from "../product/Products";
import SideBar from "../layout/SideBar";

// Redux
import { connect } from "react-redux";
import { searchProducts } from "../../actions/product";

const Search = ({ searchProducts, match }) => {
  useEffect(() => {
    searchProducts(match.params.term);
  }, [searchProducts, match.params.term]);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center text-center">
        <div className="col-sm-6">
          <h1>Search Results: "{match.params.term}"</h1>
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm-2 mt-3 mb-3 text-center"
          style={{ borderRight: "1px solid grey" }}
        >
          <SideBar />
        </div>
        <div className="col-sm-10">
          <Products isSearch={true} searchTerm={match.params.term} />
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  searchProducts: PropTypes.func.isRequired,
};

export default connect(null, { searchProducts })(Search);
