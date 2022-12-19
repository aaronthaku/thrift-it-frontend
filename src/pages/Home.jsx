import React from "react";
import "./home.scss";
import { BiSearch } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [listedBooks, setListedBooks] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [eBooks, setEBooks] = useState([]);
  const [audioBooks, setAudioBooks] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios.get("http://localhost:90/book/get").then((res) => {
      console.log(res.data);
      setListedBooks(res.data.data);
    });

    axios.get("http://localhost:90/book/recommendation", config).then((res) => {
      console.log(res.data);
      setRecommendedBooks(res.data.data);
    });

    axios.get("http://localhost:90/ebook/get").then((res) => {
      console.log(res.data);
      setEBooks(res.data.data);
      console.log(eBooks);
    });

    axios.get("http://localhost:90/audiobook/get").then((res) => {
      console.log(res.data);
      setAudioBooks(res.data.data);
      console.log(audioBooks);
    });
  }, []);

  return (
    <div className="home-container">
      <section className="hero">
        <form className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Enter book name, author....."
          />
          <button className="search__btn">
            <BiSearch />
            Search
          </button>
        </form>
        <h2 className="hero__text">
          A book worm’s paradise <br />{" "}
          <span className="hero__text--red"> RENT</span> &{" "}
          <span className="hero__text--green">EXCHANGE</span>
        </h2>
        <button className="hero__btn">
          List Books for Rent <FaBook />
        </button>
      </section>
    </div>
  );
};

export default Home;
