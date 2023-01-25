import * as React from "react";
import "./myproductcard.scss";
import { FaTrash, FaPenAlt } from "react-icons/fa";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Typography } from "@mui/material";
import { ImCross } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";
import UpdateProduct from "../update_product/UpdateProduct";

const MyProductsCard = ({ product }) => {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [view, setView] = React.useState(false);
  const handleOpen = () => setView(true);
  const handleClose = () => setView(false);
  const handleUpdateOpen = () => setUpdateOpen(true);
  const handleUpdateClose = () => setUpdateOpen(false);
  const {
    name,
    author,
    product_price,
    product_pic,
    desc,
    category,
    status,
    _id,
  } = product;
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

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const deleteBook = () => {
    // e.preventDefault();
    // const data ={
    //   _id:id
    // }
    console.log(_id);
    axios
      .delete("http://localhost:90/product/delete/" + product._id, config)
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          console.log("Product Deleted Successfull");
          toast.success(
            "Product Deleted Successfully",
            { toastId: "Delete Success" },
            setTimeout(() => {
              window.location.reload();
            }, 1500)
          );
        } else {
          console.log("Please Try Again!!!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Modal
        open={updateOpen}
        onClose={handleUpdateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpdateProduct product={product}></UpdateProduct>
        </Box>
      </Modal>

      <div className="book-card">
        <img
          src={`http://localhost:90/${product_pic}`}
          alt="book_img"
          className="book-card__img"
        />
        <div className="book-details">
          <h2 className="book-details__title">{name}</h2>
          <p className="book-details__author">Owner:&nbsp; &nbsp; {author}</p>
          <p className="book-details__desc">Description:&nbsp; &nbsp;</p>
          <p>{desc}</p>
          <p className="book-details__desc">
            Category: &nbsp; &nbsp;{category.toString()}
          </p>

          {/* <p className="book-details__desc">
            Status:
            <span
              className={`book-details__desc  ${
                (status === "Pending" && "text-warning") ||
                (status === "Approved" && "text-success") ||
                (status === "Rejected" && "text-danger")
              }`}
            >
              {" "}
              {status}
            </span>
          </p> */}
          <p className="book-details__cost">
            Product Price:&nbsp; &nbsp;{" "}
            <span className="book-details__cost--amount">
              Rs {product_price}
            </span>
          </p>
          <div className="book-details__update">
            <button
              className="book-details__update--btn"
              onClick={handleUpdateOpen}
              data-test="update-details-btn"
            >
              Update <FaPenAlt />
            </button>
            <button className="book-details__delete--btn" onClick={handleOpen}>
              Delete <FaTrash />
            </button>
          </div>
        </div>
        <Modal
          open={view}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          data-test="delete-modal"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to delete this prouct?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="d-flex align-items-center ">
                <button
                  className="approve--btn"
                  onClick={(e) => {
                    deleteBook(product._id, e);
                  }}
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
      </div>
    </>
  );
};

export default MyProductsCard;
