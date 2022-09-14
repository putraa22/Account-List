import React from "react";
import Card from "../card/card";
import "./Home.scss";
import DataUser from "../../constant/data";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="list-card-wrapper">
          {DataUser?.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
