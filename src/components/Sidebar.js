import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, match, matchPath, useLocation } from "react-router-dom";
import sideIcon1 from "../images/Side_icon1.png";
import sideIcon2 from "../images/Side_icon2.png";
import categoryImg1 from "../images/Category_icon1.png";
import categoryImg2 from "../images/Category_icon2.png";
import categoryImg3 from "../images/Category_icon3.png";
import categoryImg4 from "../images/Category_icon4.png";
import categoryImg5 from "../images/Category_icon5.png";
import categoryImg6 from "../images/Category_icon6.png";
import categoryImg7 from "../images/Category_icon7.png";
import categoryImg8 from "../images/Category_icon8.png";

const Sidebar = () => {
  const [checkedBottomItems, setBottomCheckedItems] = useState(new Set()); //카테고리 항목 -> 클릭 된 것들 담는 state
  const [checkedTopItems, setCheckedTopItems] = useState(new Set()); // 홈 & 저장글 항목 -> 클릭 된 것들 담는 state
  const [categoryData, setCategoryData] = useState({
    category_img_root_name: [],
    category_order_num: [],
    category_parent_idx: [],
    category_text: [],
  });

  // 홈 & 저장글 클릭 & 색깔 변경 제어
  const onCheckedTopItemsHandler = () => {
    let itemSet = new Set(checkedTopItems);
    if (location.pathname === "/") {
      itemSet.add("/");
      setCheckedTopItems(itemSet);
    } else if (location.pathname === "/SaveWrite") {
      itemSet.clear();
      itemSet.add("/SaveWrite");
      setCheckedTopItems(itemSet);
    } else {
      itemSet.clear();
      setCheckedTopItems(itemSet);
    }
  };

  useEffect(() => {
    onCheckedTopItemsHandler();
  }, [checkedTopItems]);

  // 카테고리 선택 제어
  const onCheckedBottomItemsHandler = (data) => {
    let itemSet = new Set(checkedBottomItems);
    console.log(itemSet);
    if (checkedBottomItems.has(data)) {
      itemSet.delete(data);
      setBottomCheckedItems(itemSet);
    } else {
      itemSet.add(data);
      setBottomCheckedItems(itemSet);
    }
    console.log(data, checkedBottomItems.values());
  };

  // 카테고리 api 연동
  const getCategoryData = () => {
    const params = new FormData();
    params.append("command", "ca");
    params.append("kind", "main");
    axios({
      method: "post",
      url: "/response/get_info.php",
      data: params,
    })
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  function sideBarSubMenuHandlerOff() {
    return (
      <ul className="side_subsm_off">
        <li className="side_subsm_bar">
          <Link
            to="/MiddleCategory"
            className="side_subsm_menu commerce_menu1"
            on
          >
            중분류
          </Link>
        </li>
        <li className="side_subsm_bar">
          <Link to="/MiddleCategory" className="side_subsm_menu commerce_menu2">
            중분류
          </Link>
        </li>
        <li className="side_subsm_bar">
          <Link to="/MiddleCategory" className="side_subsm_menu commerce_menu3">
            중분류
          </Link>
        </li>
      </ul>
    );
  }

  function sideBarSubMenuHandlerOn() {
    return (
      <ul className="side_subsm_on">
        <li className="side_subsm_bar">
          <Link to="/MiddleCategory" className="side_subsm_menu commerce_menu1">
            중분류
          </Link>
        </li>
        <li className="side_subsm_bar">
          <Link to="/MiddleCategory" className="side_subsm_menu commerce_menu2">
            중분류
          </Link>
        </li>
        <li className="side_subsm_bar">
          <Link to="/MiddleCategory" className="side_subsm_menu commerce_menu3">
            중분류
          </Link>
        </li>
      </ul>
    );
  }
  const componentArrayList = categoryData.category_text.map((data, idx) => {
    return (
      <li
        className="side_sub_bar"
        onClick={() => onCheckedBottomItemsHandler(data)}
      >
        <span className="side_sub_menu">
          <span className="side_sub_menu_icon_cove">
            <img
              src={categoryData.category_img_root_name[idx]}
              className="side_sub_menu_icon"
            />
          </span>
          <span
            className={`sidemenu_text ${
              checkedBottomItems.has(categoryData.category_text[idx])
                ? "sidemenu_text_active"
                : ""
            }`}
          >
            {categoryData.category_text[idx]}
          </span>
        </span>
        {checkedBottomItems.has(categoryData.category_text[idx])
          ? sideBarSubMenuHandlerOn()
          : sideBarSubMenuHandlerOff()}
      </li>
    );
  });

  return (
    <div className="side_bar_cove">
      <div className="side_bar">
        {/*홈 & 저장글 */}
        <div className="side_homesave">
          <p className="side_menu_cove">
            {/*side_menu_active*/}
            <Link
              to="/"
              className={`side_menu ${
                checkedTopItems.has("/") ? "side_menu_active" : ""
              }`}
              onClick={onCheckedTopItemsHandler}
              id="home"
            >
              <span className="home_img_cove side_img_cove">
                <img className="home_img" src={sideIcon1} alt="Side_icon1" />
              </span>
              <span className="home_text side_text_cove">홈</span>
            </Link>
          </p>
          <p className="side_menu_cove">
            <Link
              to="/SaveWrite"
              className={`side_menu ${
                checkedTopItems.has("/SaveWrite") ? "side_menu_active" : ""
              }`}
              id="savewrite"
              onClick={onCheckedTopItemsHandler}
            >
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
