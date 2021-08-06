import axios from "axios";
import React, { useEffect, useState } from "react";
import ReferenceSidebar from "../components/ReferenceSidebar";
// import ContextMenuIcon from "../../images/Context_menu_icon1.png";
import ContextMenuIcon from "../images/Context_menu_icon1.png";

const ReferenceChargeCoin = () => {
  const arr = [
    {
      coinValue: "10",
      price: "0,000",
    },
    {
      coinValue: "50",
      price: "0,000",
    },
    {
      coinValue: "100",
      price: "0,000",
    },
    {
      coinValue: "500",
      price: "0,000",
    },
    {
      coinValue: "1000",
      price: "0,000",
    },
    {
      coinValue: "3000",
      price: "0,000",
    },
  ];

  // axios로 받아온
  const [userCoinData, setUserCoinData] = useState({
    coin: [],
    price: [],
  });

  const userCoinDataList = userCoinData.coin.map((data, index) => {
    return (
      <div className="reference_coin_charge_coinlist">
        <div>
          <img src={ContextMenuIcon} />
          <span>{userCoinData.coin[index]} 코인</span>
        </div>
        <span>￦ {userCoinData.price[index]}</span>
      </div>
    );
  });

  const getUserCoinData = () => {
    const params = new FormData();
    params.append("command", "co");
    params.append("idx", sessionStorage.getItem("user_idx"));
    axios({
      method: "post",
      url: "/response/get_info.php",
      data: params,
    })
      .then((response) => {
        console.log("codata response :", response.data);
        setUserCoinData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserCoinData();
  }, []);

  return (
    <>
      <ReferenceSidebar />
      <div className="reference_coin_charge_container">
        <h1>코인 충전하기</h1>
        <div className="reference_coin_charge_container_content">
          <div className="reference_coin_charge_header_container">
            <div className="mypage_profiles_tab_menu_cove">
              <ul className="mypage_profiles_tab_cove">
                <li className="mypage_profiles_list my_comment_tab">
                  <a className="mypage_profiles_tab_btn my_comment_tab mypage_profiles_tab_btn_active">
                    보유코인
                  </a>
                </li>
                <li className="mypage_profiles_list">
                  <a className="mypage_profiles_tab_btn my_port_tab ">
                    코인 내역
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="reference_coin_charge_content_container">
            <div className="reference_coin_charge_mycoin">
              <span>내가 보유한 코인</span>
              <div>
                <img src={ContextMenuIcon} />
                <span>0 코인</span>
              </div>
            </div>
            {userCoinDataList}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceChargeCoin;
