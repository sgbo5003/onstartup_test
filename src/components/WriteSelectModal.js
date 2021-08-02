import React, { useState } from "react";
import BackImg from "../images/back.png";

const WriteSelectModal = (props) => {
  const selectList = props.categoryData.category_text.map((data, idx) => {
    return (
      <li>
        <a
          class="write_select_list"
          onClick={() => {
            props.setCategory(props.categoryData.category_text[idx]);
          }}
        >
          {props.categoryData.category_text[idx]}
        </a>
      </li>
    );
  });

  return (
    <div class={props.class}>
      <div class="write_select_popup">
        <ul>
          <li>
            <div class="write_select_popup_title">
              분야 선택
              <span class="write_select_popup_back" onClick={props.onOpenModal}>
                <img src={BackImg} alt="back.png" />
              </span>
            </div>
            <ul class="write_select_li" onClick={props.onOpenModal}>
              <li>
                <a class="write_select_first_list">마이페이지 > 포트폴리오</a>
              </li>
              {selectList}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WriteSelectModal;
