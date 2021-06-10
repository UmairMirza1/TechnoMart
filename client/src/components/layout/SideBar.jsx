import { Fragment } from "react";

const SideBar = () => {
  return (
    <Fragment>
      <div className="cat">
        <div className="row">
          <div className="col-sm-12">
            <h4>Categories</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>Monitor</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>Speaker</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>Mouse</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>Keyboard</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>Chairs</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideBar;
