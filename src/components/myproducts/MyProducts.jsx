import React, { useState, useEffect } from "react";

import MyProductsCard from "./MyProductsCard";

import axios from "axios";

const MyProducts = () => {
  const [currentTab, setCurrentTab] = useState("Myproduct");
  const [myproduct, setMyProducts] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios.get("http://localhost:90/product/get").then((res) => {
      console.log(res.data);
      setMyProducts(res.data.data);
      console.log(myproduct);
    });
  }, []);

  return (
    <div className="mybooks-container">
      <div className="tabs">
        <div
          className={`tabs__tab ${
            currentTab === "Myproduct" && "tabs__tab--open"
          }`}
          onClick={() => setCurrentTab("Myproduct")}
        >
          My Products ({myproduct.length})
        </div>
      </div>
      <div>
        {currentTab === "Myproduct" &&
          myproduct.map((product) => <MyProductsCard product={product} />)}
      </div>
    </div>
  );
};

export default MyProducts;
