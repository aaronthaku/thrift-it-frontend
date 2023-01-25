import React from "react";
import "./products.scss";
import staticimg from "../assets/homepage.png";
import { BiSearch } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Products = () => {
  return (
    <div>
      <section className="listedBook-container">
        <form
          className="search"
          //   onSubmit={searchBooks}
        >
          <input
            type="text"
            className="search__input"
            placeholder="Enter products name....."
            //   onChange={(e) => setSearchQuery(e.target.value)}
            data-test="search-query"
          />
          <button className="search__btn" type="submit">
            <BiSearch />
            Search
          </button>
        </form>

        <div className="heading2 mt-5">
          <h4 className="ms-2">Recommended Products</h4>
        </div>
        <div className="listedBook">
          {/* {listedProducts.slice(0, 4).map((product) => (
            <ListedProductCard product={product} />
          ))} */}
          <div className="propertycards row m-2 p-2 justify-content-center">
            <div className="card mt-2" style={{ width: "16rem" }}>
              <img
                src={staticimg}
                alt="background"
                // {`http://localhost:90/${product_pic}`}
                className="card-img mt-3"
              />

              <div className="top-left">&nbsp;For Sale</div>
              <div className="top-right">&nbsp;Used</div>
              <div className="card-body p-2">
                <p className="book-Name my-1">Chair</p>
                <h5 className="book-Author my-2">David</h5>
                {/* <p className="book-Name my-1">{name}</p> */}
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex flex-nowrap">
                    <p className="bookcost">Rs. 1000</p>
                  </div>
                </div>
              </div>
              {/* <Link
                to={"/singleproduct/" + _id}
                className="btn rent-btn ms-3"
                onClick={window.location.replace}
              >
                <FaChevronCircleRight
                  className="rent-icon"
                  data-test="Vmore-btn"
                />
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Products;
