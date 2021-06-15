import { useState } from "react";
import SideBar from "../layout/SideBar";

import Products from "./Products";

const ProductType = () => {
  const [getProducts, setGetProducts] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-sm-2 sidebar">
          <SideBar />
        </div>
        <div className="col-sm-10">
          <div className="row justify-content-center p-3">
            <div className="col-sm-6">
              <h1>Welcome to TechnoMart</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <button
                className="btn btn-primary"
                onClick={(e) => setGetProducts(!getProducts)}
              >
                Get Products
              </button>
            </div>
            {getProducts && <Products />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductType;
