import React from "react";
import "./Card.scss";
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
  let navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/detail/${data.id}`)}>
      <img src={data.image} alt="images" />
      <div className="card_head">
        <div className="username-card">@{data.username}</div>
        <div className="footer-card">
          <span>Followers : {data.follower}</span>
        </div>
      </div>
    </div>
  );
}
