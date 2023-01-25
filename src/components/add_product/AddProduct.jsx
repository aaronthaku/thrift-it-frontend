import React from "react";
import "./addProduct.scss";
import Box from "@mui/material/Box";
import { Theme, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import { useState, useEffect } from "react";

import {
  Button,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Stack } from "react-bootstrap";
import { Name } from "selenium-webdriver/lib/command";
import { toast } from "react-toastify";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = [
  "Furniture",
  "Electronics",
  "Bike",
  "Car",
  "Other Vehicles",
  "Kitchen Items",
  "Decoration Items",
  "Appliances",
  "Household Items",
];

function getStyles(name, categoryName, theme) {
  return {
    fontWeight:
      categoryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddProduct = () => {
  const theme = useTheme();
  const [categoryName, setcategoryName] = React.useState([]);
  const [name, setName] = useState("");
  const [rich_desc, setRich_desc] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_img, setProduct_img] = useState("");

  const addProduct = (e) => {
    if (
      categoryName === [] ||
      name === "" ||
      rich_desc === "" ||
      author === "" ||
      product_price === "" ||
      product_img === "" ||
      desc === ""
    ) {
      toast.warn("Fill all Required Field", {
        position: "top-center",
        autoClose: 4000,
      });
      return;
    }

    const data = new FormData();
    data.append("category", categoryName);
    data.append("name", name);
    data.append("rich_desc", rich_desc);
    data.append("desc", desc);
    data.append("author", author);
    data.append("product_price", product_price);
    data.append("product_img", product_img);
    console.log(data);

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .post("http://localhost:90/product/add", data, config)
      .then((res) => {
        if (res.status === 201) {
          console.log("Product Added Successfully");
          window.location.replace("/dashboard");
          toast.success("Product Added Successfully", {
            position: "top-center",
            autoClose: 4000,
          });
        } else {
          console.log("Please Try Again! Something Went Wrong!!!", res);
          toast.error("Somthing went wrong!", {
            toastId: "error",
            position: "top-center",
            autoClose: 4000,
          });
        }

        // console.log(res);
      })

      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setcategoryName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 0, pb: 2 },
          // width: 762,
          maxWidth: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <div className="row">
          <TextField
            required
            id="outlined-required fullWidth"
            fullWidth
            label="Name"
            width="100%"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            required
            id="outlined-required fullWidth"
            fullWidth
            label="Product Owner"
            width="100%"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <TextField
            required
            multiline
            fullWidth
            rows={2}
            maxRows={4}
            id="outlined-required outlined-multiline-static"
            label="Description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            maxRows={6}
            id="outlined-required outlined-multiline-static"
            label="Rich Description"
            onChange={(e) => {
              setRich_desc(e.target.value);
            }}
          />
          <FormControl sx={{ pb: 2 }} required fullWidth>
            <InputLabel id="demo-multiple-name-label">
              Product Category
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={categoryName}
              onChange={handleChange}
              input={<OutlinedInput label="Product Category" />}
              MenuProps={MenuProps}
            >
              {categories.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, categoryName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            required
            id="outlined-required fullWidth"
            type="file"
            label="Product Image"
            fullWidth
            width="100%"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setProduct_img(e.target.files[0]);
            }}
          />
          <TextField
            required
            fullWidth
            id="outlined-required outlined-multiline-static"
            label="Product Price"
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
          />
          <Button
            className=" productadd mt-2 fs-5 fw-bold"
            fullWidth
            variant="contained"
            // endIcon={<AddCircleIcon className="fs-3" />}
            onClick={addProduct}
          >
            <AddCircleIcon></AddCircleIcon> Post a Product
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default AddProduct;
