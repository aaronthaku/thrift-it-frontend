import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "../singleproduct/singleProduct.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import UpdateProduct from "../update_product/UpdateProduct";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const SingleProduct = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [details, setDetails] = useState("");
  const [commentDetails, setCommentDetails] = useState("");
  const [review, setComment] = useState("");

  const { product_id } = useParams();
  const { authormain } = useParams();

  const [product_img, setProductImg] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState([]);
  const [productowner, setProductOwner] = useState("");
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState("");
  const [listedproducts, setListedProducts] = useState([]);
  const [bookOwnerValueExists, setBookOwnerValueExists] = useState(false);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const PostComment = (e) => {
    e.preventDefault();

    const data = {
      review: review,
      productId: product_id,
    };

    axios
      .post("http://localhost:90/add_review", data, config)
      .then((response) => {
        console.log(response);
        if (response.data) {
          window.location.replace("/singleproduct/" + product_id);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:90/product/getone/" + product_id)
      .then((res) => {
        console.log(res.data);
        setProductImg(res.data.data.product_pic);
        // setProductOwner(res.data.data.productOwner);
        setName(res.data.data.name);
        setAuthor(res.data.data.author);
        setCategory(res.data.data.category);
        setDesc(res.data.data.rich_desc);
        setCost(res.data.data.product_price);
        //     setBookOwnerValueExists(true);
        //     const data = {
        //       bookOwnerId: res.data.data.bookOwner,
        //     };
        //     return data;
      })
      .catch((e) => {
        console.log(e);
      });

    // axios
    //   .get("http://localhost:90/product/getauthor/" + authormain)
    //   .then((res) => {
    //     console.log(res.data);
    //     setListedProducts(res.data.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    axios
      .get("http://localhost:90/get/book_reviews/" + product_id)
      .then((res) => {
        console.log(res.data);
        setCommentDetails(res.data.reviews);
        // setCommentDetails(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const addToWishlist = () => {
    const data = { productId: product_id };
    axios
      .post("http://localhost:90/wishlist/insert/", data, config)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          toast.success(res.data.msg, {
            position: "top-right",
            autoClose: 2000,
          });

          setTimeout(() => window.location.replace("/wishlist"), 1000);
        } else {
          toast.error(res.data.msg, {
            position: "top-right",
            autoClose: 2000,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="container container-fluid">
        <p className="card-text">
          <small className="text-muted">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> &nbsp;Last
            updated 1 min ago
          </small>
        </p>
        <div className="ud-btn">
          <button
            className="update-btn p-2  btn btn-outline-danger bg-danger m-3"
            onClick={addToWishlist}
          >
            &nbsp; Add to Cart &nbsp;&nbsp;
            <AddShoppingCartIcon />
          </button>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">
              <b>Product on Sale</b>
            </h1>
            <br />
            <br />
            <div className="product-img">
              <img
                src={`http://localhost:90/${product_img}`}
                className="img-fluid"
                width="600"
                height="600"
              />
            </div>
            <br />
            <br />
            <h1>
              <b>{name}</b>
            </h1>
            <h3>
              <b>Price: Rs.{cost}</b>
            </h3>
            <br />
            <h3>Product Informations :</h3> <br />
            <p className="">Category : {category.toString()}</p>
            <p className="desredmore">Product Status:&nbsp; Used</p>
            <p className="desredmore">Neggotiable: &nbsp; </p>
            <p className="desredmore">Delivery Range : &nbsp;Inside Valley </p>
            {/* <p className="desredmore">Road Access : 20 Feet</p> <br /> */}
            <br />
            <br />
            <h3>
              Description : <br />
              <br />
              {desc}
            </h3>
            <br />
            <br />
            <h3>Owner Informations :</h3>
            <p className="desredmore">Owner Name : {author}</p>
            <p className="desredmore">Email Address : {author}@gmail.com</p>
            <p className="desredmore">Phone Number : 9876541230</p>
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.958624070368!2d85.30930227517128!3d27.687034281201168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b4ad7096dd%3A0x29fa3d73b99dcc97!2sKupondole%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1657934561191!5m2!1sen!2snp"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div>
            <h3>Comments</h3>
            <hr
              style={{
                height: 1,
                borderWidth: 0,
                color: "gray",
                backgroundColor: "black",
              }}
            />
            <br />
            <input
              type="text"
              class="form-control"
              id="exampleInputtext"
              placeholder="Add a comment"
              aria-describedby="text"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></input>
            <button type="submit" class="btn btn-primary" onClick={PostComment}>
              Post
            </button>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          {commentDetails.length > 0 ? (
            commentDetails.map((singleData) => {
              return (
                <div className="row">
                  <div>
                    <img class="commentuser"></img>
                    <h4>{singleData.review}</h4>
                    <p className="card-text">
                      <small className="text-muted">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>{" "}
                        &nbsp;Last updated 1 min ago
                      </small>
                    </p>
                    <button className="container-top-rightdown -update p-2 btn bg-success text-white m-3">
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>{" "}
                      &nbsp;Update
                    </button>
                    <button
                      className="container-top-rightdown-delete p-2 btn bg-danger text-white m-3"
                      onClick={() => {
                        // deletePro(details._id);
                      }}
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                      &nbsp;Delete
                    </button>
                    <hr
                      style={{
                        height: 1,
                        borderWidth: 0,
                        color: "gray",
                        backgroundColor: "black",
                      }}
                    />
                    <br />
                  </div>
                </div>
              );
            })
          ) : (
            <p class="text-center">No comments</p>
          )}
        </div>
      </div>
    </>
  );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default SingleProduct;
