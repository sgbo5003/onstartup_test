import React, { useState } from "react";

const Qmenu = () => {
  return (
    <div className="Qmenu_bar">
      <span className="tail">
        <img className="tail_img" src="src/images/tail.png" alt="tail.png" />
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
    </div>
  );
};

export default Qmenu;
