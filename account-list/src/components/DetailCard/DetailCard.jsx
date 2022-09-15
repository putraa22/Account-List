import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataUser from "../../constant/data";
import "./DetailCard.scss";

export default function DetailCard() {
  const [data, setData] = useState({});
  let navigate = useNavigate();
  let { id } = useParams();

  const datas = DataUser;

  useEffect(() => {
    setData(datas.find((data) => data.id == id));
  }, []);

  return (
    <div className="detail_Card">
      <div className="detail_Card-container">
        <div className="card_detail-wrapper">
          <div className="card_detail-content">
            <img src={data.image} alt={data.username} />
            <span>@{data.username}</span>
          </div>
          <div className="detail_card_content">
            <div className="content-right">
              <div className="jumlah-follower">{data.follower}</div>
              <div>Followers</div>
            </div>
            <div className="content-left">
              <div className="jumlah-following">{data.following}</div>
              <div>Following</div>
            </div>
          </div>
          <div className="detail_card-footer">
            <span className="footer-detail" onClick={() => navigate("/")}>
              ✈
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default DetailCArd;
