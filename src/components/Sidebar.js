import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const Sidebar = (data) => {
  const [open, setOpen] = useState(false);
  const [checkedItmes, setCheckedItems] = useState(new Set()); //클릭 된 것들 담는 state
  const [categoryData, setCategoryData] = useState({
    category_img_root_name: [],
    category_order_num: [],
    category_parent_idx: [],
    category_text: [],
  });

  const onCheckedItemsHandler = (e) => {
    // checkedItmes.add(e.target.innerText);
    // setCheckedItems(checkedItmes);
    console.log(checkedItmes.values());

    if (checkedItmes.has(e.target.innerText)) {
      checkedItmes.delete(e.target.innerText);
      setOpen(false);
    } else {
      checkedItmes.add(e.target.innerText);
      setCheckedItems(checkedItmes);
      setOpen(true);
    }
  };

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
        console.log("category response :", response.data);
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
          <a className="side_subsm_menu commerce_menu1">대분류</a>
        </li>
        <li className="side_subsm_bar">
          <a className="side_subsm_menu commerce_menu2">중분류</a>
        </li>
        <li className="side_subsm_bar">
          <a className="side_subsm_menu commerce_menu3">소분류</a>
        </li>
      </ul>
    );
  }

  function sideBarSubMenuHandlerOn() {
    return (
      <ul className="side_subsm_on">
        <li className="side_subsm_bar">
          <a className="side_subsm_menu commerce_menu1">대분류</a>
        </li>
        <li className="side_subsm_bar">
          <a className="side_subsm_menu commerce_menu2">중분류</a>
        </li>
        <li className="side_subsm_bar">
          <a className="side_subsm_menu commerce_menu3">소분류</a>
        </li>
      </ul>
    );
  }
  const componentArrayList = categoryData.category_text.map((data, idx) => {
    return (
      <li className="side_sub_bar" onClick={onCheckedItemsHandler}>
        <a className="side_sub_menu">
          <span className="side_sub_menu_icon_cove">
            <img
              src={categoryData.category_img_root_name[idx]}
              className="side_sub_menu_icon"
            />
          </span>
          <span className="sidemenu_text">
            {categoryData.category_text[idx]}
          </span>
        </a>
        {checkedItmes.has(categoryData.category_text[idx])
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
