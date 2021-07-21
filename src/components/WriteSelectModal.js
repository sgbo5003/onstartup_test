import React, { useState } from "react";
import BackImg from "../images/back.png";

const WriteSelectModal = (props) => {
  const selects = [
    { id: 1, contentName: "커머스 정보" },
    { id: 2, contentName: "브랜딩" },
    { id: 3, contentName: "커머스 UI UX" },
    { id: 4, contentName: "도매상품소싱" },
    { id: 5, contentName: "촬영·편집" },
    { id: 6, contentName: "자사몰 운영 / 관리" },
    { id: 7, contentName: "오픈마켓 운영 / 관리" },
    { id: 8, contentName: "콘텐츠 마케팅" },
  ];

  const selectList = selects.map((data) => {
    return (
      <li>
        <a
          class="write_select_list"
          onClick={() => {
            props.setCategory(data.contentName);
          }}
        >
          {data.contentName}
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
            <ul class="write_select_li">
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
