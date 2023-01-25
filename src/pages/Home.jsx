import React from "react";
import "./home.scss";
import house1 from "../assets/thritit-logo.svg";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { BiSearch } from "react-icons/bi";
import { FaBook, FaChevronCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListedProductCard from "../components/listedproduct-card/listedproduct-card";
import background from "../assets/homepage.svg";
import staticimg from "../assets/Gwagon.png";
import staticimg1 from "../assets/R8 sterring wheel.jfif";
import staticimg2 from "../assets/Refrigerator.jpg";
import staticimg3 from "../assets/closet.jfif";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Home = () => {
  const [listedProducts, setListedProducts] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios.get("http://localhost:90/product/get").then((res) => {
      console.log(res.data);
      setListedProducts(res.data.data);
    });

    // axios.get("http://localhost:90/book/recommendation", config).then((res) => {
    //   console.log(res.data);
    //   setRecommendedBooks(res.data.data);
    // });
  }, []);
  return (
    <div className="home-container">
      <img src={background} alt="background" className="home-img" />
      <section className="hero">
        {/* <form className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Enter book name, author....."
      />
      <button className="search__btn">
        <BiSearch />
        Search
      </button>
    </form> */}
        <h2 className="hero__text">
          Find&nbsp; fortune&nbsp; in&nbsp; others&nbsp; junk
          <br />{" "}
          <span className="hero__text--green">
            {" "}
            Best place to buy preowned products
          </span>{" "}
        </h2>
        <button
          className="hero__btn"
          onClick={(e) => {
            window.location.replace("/books");
          }}
        >
          Explore <ArrowCircleRightIcon fontSize="large" />
        </button>
      </section>
      <section className="listedBook-container">
        <div className="heading2">
          <h4 className="ms-2">Top Recommendation Products</h4>
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
                <p className="book-Name my-1">Mercedes Gwagon</p>
                <h5 className="book-Author my-2">David</h5>
                {/* <p className="book-Name my-1">{name}</p> */}
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex flex-nowrap">
                    <p className="bookcost">Rs. 1000000</p>
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
          <div className="propertycards row m-2 p-2 justify-content-center">
            <div className="card mt-2" style={{ width: "16rem" }}>
              <img
                src={staticimg1}
                alt="background"
                // {`http://localhost:90/${product_pic}`}
                className="card-img mt-3"
              />

              <div className="top-left">&nbsp;For Sale</div>
              <div className="top-right">&nbsp;Used</div>
              <div className="card-body p-2">
                <p className="book-Name my-1">Audi R8 Sterring Wheel </p>
                <h5 className="book-Author my-2">Mickle Pickle</h5>
                {/* <p className="book-Name my-1">{name}</p> */}
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex flex-nowrap">
                    <p className="bookcost">Rs. 90000</p>
                  </div>
                </div>
              </div>
              <Link
                // to={"/singleproduct/" + _id}
                className="btn rent-btn ms-3"
                onClick={window.location.replace}
              >
                <FaChevronCircleRight
                  className="rent-icon"
                  data-test="Vmore-btn"
                />
              </Link>
            </div>
          </div>
          <div className="propertycards row m-2 p-2 justify-content-center">
            <div className="card mt-2" style={{ width: "16rem" }}>
              <img
                src={staticimg2}
                alt="background"
                // {`http://localhost:90/${product_pic}`}
                className="card-img mt-3"
              />

              <div className="top-left">&nbsp;For Sale</div>
              <div className="top-right">&nbsp;Used</div>
              <div className="card-body p-2">
                <p className="book-Name my-1">Refrigerator</p>
                <h5 className="book-Author my-2">Roman Reign</h5>
                {/* <p className="book-Name my-1">{name}</p> */}
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex flex-nowrap">
                    <p className="bookcost">Rs. 8900</p>
                  </div>
                </div>
              </div>
              <Link
                // to={"/singleproduct/" + _id}
                className="btn rent-btn ms-3"
                onClick={window.location.replace}
              >
                <FaChevronCircleRight
                  className="rent-icon"
                  data-test="Vmore-btn"
                />
              </Link>
            </div>
          </div>
          <div className="propertycards row m-2 p-2 justify-content-center">
            <div className="card mt-2" style={{ width: "16rem" }}>
              <img
                src={staticimg3}
                alt="background"
                // {`http://localhost:90/${product_pic}`}
                className="card-img mt-3"
              />

              <div className="top-left">&nbsp;For Sale</div>
              <div className="top-right">&nbsp;Used</div>
              <div className="card-body p-2">
                <p className="book-Name my-1">Closet</p>
                <h5 className="book-Author my-2">Tom Lious</h5>
                {/* <p className="book-Name my-1">{name}</p> */}
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex flex-nowrap">
                    <p className="bookcost">Rs. 9000</p>
                  </div>
                </div>
              </div>
              <Link
                // to={"/singleproduct/" + _id}
                className="btn rent-btn ms-3"
                onClick={window.location.replace}
              >
                <FaChevronCircleRight
                  className="rent-icon"
                  data-test="Vmore-btn"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="listedBook-container">
        <div className="heading2">
          <h4 className="ms-2">Recent Products</h4>
        </div>
        <div className="listedBook">
          {listedProducts.slice(0, 4).map((product) => (
            <ListedProductCard product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
