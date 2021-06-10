import { Fragment } from "react";

const Landing = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row justify-content-center p-3">
          <div className="col-sm-6">
            <h1>Welcome to TechnoMart</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <p>Start shopping in the following categories</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
