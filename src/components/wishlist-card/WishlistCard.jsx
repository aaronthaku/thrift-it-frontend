import React from "react";
import "./wishlist.scss";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { Typography } from "@mui/material";
import { ImCross } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const WishlistCard = ({ product }) => {
  const { _id, productId } = product;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const removeFromWishlist = () => {
    axios
      .delete("http://localhost:90/wishlist/delete/" + _id, config)
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.msg, { toastId: "delete-wishlist" });

          setTimeout(() => window.location.reload(), 1000);
        } else {
          toast.error(res.data.msg);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="book-card wishlist-book">
      <RemoveShoppingCartIcon
        // fontSize="medium"
        className="book-card__delete"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-test="delete-modal"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Remove this product from your Cart ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="d-flex align-items-center ">
              <button
                className="approve--btn"
                data-test="yes-btn"
                onClick={removeFromWishlist}
              >
                Yes &nbsp; <BsCheckLg />
              </button>
              <button onClick={handleClose} className="reject--btn ">
                No &nbsp; <ImCross />
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
      <img
        src={`http://localhost:90/${productId.product_pic}`}
        alt="book_img"
        className="cart-card__img"
      />
      <div className="book-details wishlist-book__details">
        <h2 className="book-details__title">{productId.name}</h2>
        <p className="book-details__author">{productId.author}</p>
        <p className="book-details__desc">{productId.desc}</p>
        <p className="book-details__desc">
          {productId.category.map((categoryName) => (
            <span className="category-name">{categoryName}</span>
          ))}
        </p>
        <Link
          to={"/singleproduct/" + productId._id}
          onClick={window.location.replace}
        >
          <button className="wishlist-book__view-btn">
            View More <IoIosArrowDroprightCircle />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WishlistCard;
