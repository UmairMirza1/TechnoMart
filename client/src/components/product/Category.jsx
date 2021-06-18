import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../layout/SideBar";
import Products from "./Products";

const Category = () => {
  const location = useLocation();
  const categoryLocation = location.state;
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory(categoryLocation);
  }, [categoryLocation]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center text-center">
        <div className="col-sm-6">
          <h1>{category}</h1>
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
          <Products category={category} />
        </div>
      </div>
    </div>
  );
};

export default Category;
