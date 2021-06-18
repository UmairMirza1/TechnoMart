import { Fragment } from "react";

const SideBar = () => {
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
            <p>Sort</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>Range</p>
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

export default SideBar;
