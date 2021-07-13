import React from "react";
import { Link } from "react-router-dom";
import category1Img from "../images/Category_icon1.png";
import category2Img from "../images/Category_icon2.png";
import category3Img from "../images/Category_icon3.png";
import category4Img from "../images/Category_icon4.png";
import category5Img from "../images/Category_icon5.png";
import category6Img from "../images/Category_icon6.png";
import category7Img from "../images/Category_icon7.png";
import category8Img from "../images/Category_icon8.png";
import sideIcon1 from "../images/Side_icon1.png";
import sideIcon2 from "../images/Side_icon2.png";

const componentArray = [
  {
    src: category1Img,
    title: "커머스 정보",
  },
  {
    src: category2Img,
    title: "브랜딩",
  },
  {
    src: category3Img,
    title: "커머스 UI UX",
  },
  {
    src: category4Img,
    title: "도매상품소싱",
  },
  {
    src: category5Img,
    title: "촬영·편집",
  },
  {
    src: category6Img,
    title: "자사몰 운영 / 관리",
  },
  {
    src: category7Img,
    title: "오픈마켓 운영 / 관리",
  },
  {
    src: category8Img,
    title: "콘텐츠 마케팅",
  },
];

const Sidebar = (data) => {
  const componentArrayList = componentArray.map((data, index) => {
    return (
      <li key={index} className="side_sub_bar">
        <a className="side_sub_menu">
          <span className="side_sub_menu_icon_cove">
            <img src={data.src} className="side_sub_menu_icon" />
          </span>
          <span className="sidemenu_text">{data.title}</span>
        </a>
      </li>
    );
  });
  return (
    <div className="side_bar_cove">
      <div className="side_bar">
        {/*홈 & 저장글 */}
        <div className="side_homesave">
          <p className="side_menu_cove">
            <Link to="/" className="side_menu side_menu_active">
              <span className="home_img_cove side_img_cove">
                <img className="home_img" src={sideIcon1} alt="Side_icon1" />
              </span>
              <span className="home_text side_text_cove">홈</span>
            </Link>
          </p>
          <p className="side_menu_cove">
            <Link to="/SaveWrite" className="side_menu" href="save_text.php">
              <span className="save_img_cove side_img_cove">
                <img className="save_img" src={sideIcon2} alt="Side_icon2" />
              </span>
              <span className="save_text side_text_cove">저장글</span>
            </Link>
          </p>
        </div>
        <div className="side_category">
          <ul className="side_main">
            <li className="side_title">CATEGORY</li>
            {/*카테고리 하위 항목들 */}
            <ul className="side_sub">{componentArrayList}</ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
