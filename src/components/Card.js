import React from "react";
import { useLocation } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div className="main">
      <img src={data[1]} alt="" />
      <div className="sec">
        <h1>{data[2]}</h1>
        <p>{data[0]}</p>
      </div>
    </div>
  );
};

export default Card;
