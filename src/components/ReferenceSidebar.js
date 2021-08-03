import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContextMenuIcon from "../images/Context_menu_icon1.png";
import sideIcon1 from "../images/Side_icon1.png";
import sideIcon2 from "../images/Side_icon2.png";

const ReferenceSidebar = () => {
  return (
    <div className="side_bar_cove">
      <div className="side_bar">
        {/*홈 & 저장글 */}
        <div className="side_homesave">
          <p className="side_menu_cove">
            <Link className="side_menu side_menu_active">
              <span className="home_img_cove side_img_cove">
                <img className="home_img" alt="Side_icon1" src={sideIcon1} />
              </span>
              <span className="home_text side_text_cove">자료실 홈</span>
            </Link>
          </p>
          <p className="side_menu_cove">
            <Link className="side_menu" href="save_text.php">
              <span className="save_img_cove side_img_cove">
                <img className="save_img" alt="Side_icon2" src={sideIcon2} />
              </span>
              <span className="save_text side_text_cove">자료보관함</span>
            </Link>
          </p>
          <p className="side_menu_cove">
            <Link className="side_menu" href="save_text.php">
              <span className="save_img_cove side_img_cove">
                <img className="save_img" src={ContextMenuIcon} alt="코인" />
              </span>
              <span className="save_text side_text_cove">코인 충전하기</span>
            </Link>
          </p>
          <p className="side_menu_cove">
            <Link className="side_menu" href="save_text.php">
              <span className="save_img_cove side_img_cove">
                <img className="save_img" src={ContextMenuIcon} alt="코인" />
              </span>
              <span className="save_text side_text_cove">코인 선물받기</span>
            </Link>
          </p>
        </div>
        <div className="side_category">
          <ul className="side_main">
            <li className="side_title">CATEGORY</li>
            {/*카테고리 하위 항목들 */}
            <ul className="side_sub">
              <li className="side_sub_bar">
                <span className="side_sub_menu">
                  <span className="side_sub_menu_icon_cove">
                    <img className="side_sub_menu_icon" src={ContextMenuIcon} />
                  </span>
                  <span className="sidemenu_text">PDF 교재</span>
                </span>
              </li>
              <li className="side_sub_bar">
                <span className="side_sub_menu">
                  <span className="side_sub_menu_icon_cove">
                    <img className="side_sub_menu_icon" src={ContextMenuIcon} />
                  </span>
                  <span className="sidemenu_text">상세페이지 제작</span>
                </span>
              </li>
              <li className="side_sub_bar">
                <span className="side_sub_menu">
                  <span className="side_sub_menu_icon_cove">
                    <img className="side_sub_menu_icon" src={ContextMenuIcon} />
                  </span>
                  <span className="sidemenu_text">쇼핑몰 제작</span>
                </span>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReferenceSidebar;
