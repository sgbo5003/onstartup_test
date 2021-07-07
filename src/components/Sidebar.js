import React from "react";
import { Link } from "react-router-dom";

const componentArray = [
  {
    src: "src/images/Category_icon1.png",
    title: "커머스 정보",
  },
  {
    src: "src/images/Category_icon2.png",
    title: "브랜딩",
  },
  {
    src: "src/images/Category_icon3.png",
    title: "커머스 UI UX",
  },
  {
    src: "src/images/Category_icon4.png",
    title: "도매상품소싱",
  },
  {
    src: "src/images/Category_icon5.png",
    title: "촬영·편집",
  },
  {
    src: "src/images/Category_icon6.png",
    title: "자사몰 운영 / 관리",
  },
  {
    src: "src/images/Category_icon7.png",
    title: "오픈마켓 운영 / 관리",
  },
  {
    src: "src/images/Category_icon8.png",
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
                <img
                  className="home_img"
                  src="src/images/Side_icon1.png"
                  alt="Side_icon1"
                />
              </span>
              <span className="home_text side_text_cove">홈</span>
            </Link>
          </p>
          <p className="side_menu_cove">
            <Link to="/SaveWrite" className="side_menu" href="save_text.php">
              <span className="save_img_cove side_img_cove">
                <img
                  className="save_img"
                  src="src/images/Side_icon2.png"
                  alt="Side_icon2"
                />
              </span>
              <span className="save_text side_text_cove">저장글</span>
            </Link>
          </p>
        </div>
        <div class="side_category">
          <ul class="side_main">
            <li class="side_title">CATEGORY</li>
            {/*카테고리 하위 항목들 */}
            <ul className="side_sub">{componentArrayList}</ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
