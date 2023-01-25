import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { FaChevronCircleRight } from "react-icons/fa";
import "./listedproduct-card.scss";
import { Link } from "react-router-dom";

const ListedProductCard = ({ product }) => {
  const { _id, name, author, product_price, product_pic } = product;

  return (
    <div className="propertycards row m-2 p-2 justify-content-center">
      <div className="card mt-2" style={{ width: "16rem" }}>
        <img
          src={`http://localhost:90/${product_pic}`}
          className="card-img mt-3"
        />

        <div className="top-left">&nbsp;For Sale</div>
        <div className="top-right">&nbsp;Used</div>
        <div className="card-body p-2">
          <p className="book-Name my-1">{name}</p>
          <h5 className="book-Author my-2">{author}</h5>
          {/* <p className="book-Name my-1">{name}</p> */}
          <div className="d-flex justify-content-between mt-2">
            <div className="d-flex flex-nowrap">
              <p className="bookcost">Rs. {product_price}</p>
            </div>
          </div>
        </div>
        <Link
          to={"/singleproduct/" + _id}
          className="btn rent-btn ms-3"
          onClick={window.location.replace}
        >
          <FaChevronCircleRight className="rent-icon" data-test="Vmore-btn" />
        </Link>
        {/* <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <br />
          <p>{author}</p>
          <p>Rs. {product_price}</p>
          <Link
            to={"/singleproduct/" + _id + "/" + author}
            className="btn rent-btn ms-3"
            onClick={window.location.replace}
          >
            <ReadMoreIcon className="rent-icon" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ListedProductCard;
