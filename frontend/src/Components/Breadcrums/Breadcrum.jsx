import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import { useNavigate } from "react-router-dom";

const Breadcrum = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const handleEvent = () => {
    navigate(`/${product.category}`);
  };

  const { product } = props;

  return (
    <div className="breadcrum">
      <span onClick={handleClick}>Home</span> <img src={arrow_icon} alt="" />
      <span onClick={handleEvent}> {product.category}</span>{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
