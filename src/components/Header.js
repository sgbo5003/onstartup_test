import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="header_area_left">
          <h1 className="logo_area">
            <Link to="/">
              <img
                className="header_logo"
                src="src/images/header_logo.png"
                alt="header_logo.png"
              />
            </Link>
          </h1>
          <div className="coar_area">
            <p>
              <Link to="/Community">커뮤니티</Link>
            </p>
            <p>
              <Link to="/Reference">자료실</Link>
            </p>
          </div>
        </div>
        <div className="header_area_right">
          <div className="coar_area">
            <p>
              <Link to="/Login">로그인</Link>
            </p>
          </div>
          {/* <h1 className="mypage_area">
              <a className="mypage_photo_cove" href="my_page.php">
                <img
                  className="mypage_photo"
                  src="src/images/default_user.png"
                  alt="default_user.png"
                />
              </a>
            </h1> */}
          {/* 설정 아이콘 */}
          <div className="Qmenu_area">
            <p className="Qmenu_list">
              <Link to="/Setting" className="Qmenu_item_cove Qmenu1">
                <img
                  className="Qmenu_item"
                  src="src/images/Qmenu_icon1.png"
                  alt="Qmenu_icon1.png"
                />
              </Link>
            </p>
            {/* <div className="Qmenu_bar">
                <span className="tail">
                  <img
                    className="tail_img"
                    src="src/images/tail.png"
                    alt="tail.png"
                  />
                </span>
                <p className="Qmenu_menu_cove">
                  <a className="Qmenu_menu" href="regit_account.php">
                    계정관리
                  </a>
                </p>
                <p className="Qmenu_menu_cove">
                  <a className="Qmenu_menu" href="regit_pass.php">
                    비밀번호 변경
                  </a>
                </p>
                <p className="Qmenu_menu_cove">
                  <a className="Qmenu_menu" href="inquiry.php">
                    문의하기
                  </a>
                </p>
                <p className="Qmenu_menu_cove">
                  <a className="Qmenu_menu" href="notice.php">
                    공지사항
                  </a>
                </p>
              </div> */}
            {/*알림 아이콘*/}
            <p className="Qmenu_list">
              <a className="Qmenu_item_cove Qmenu2">
                <img
                  className="Qmenu_item Qmenu_padding"
                  src="src/images/Qmenu_icon2.png"
                  alt="Qmenu_icon2.png"
                />
              </a>
              <a className="message_active_cove">
                <img
                  className="message_active"
                  src="src/images/message_active.png"
                  alt="message_active"
                />
              </a>
            </p>
            <div className="Qmenu_bar2" id="alram_cove">
              <span className="tail" id="alram_tail">
                <img
                  className="tail_img"
                  src="src/images/tail.png"
                  alt="tail.png"
                />
              </span>
              <div className="alram_message_cove"></div>
            </div>
            {/* 글쓰기 아이콘 */}
            <p className="Qmenu_list">
              <Link to="/Write" className="Qmenu_item_cove" href="write.php">
                <img
                  className="Qmenu_item"
                  src="src/images/Qmenu_icon3.png"
                  alt="Qmenu_icon3.png"
                />
              </Link>
            </p>
          </div>
        </div>
        <div className="header_area_middle">
          <div className="search_tab">
            <form onsubmit="return false">
              <input
                type="text"
                name="search_text"
                id="search_text"
                placeholder="검색어를 입력해 주세요."
                autocomplete="on"
              />
              <a id="search_img" href="search_list.php">
                <img
                  className="search"
                  src="src/images/search_icon1.png"
                  alt="search_icon1.png"
                />
              </a>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
