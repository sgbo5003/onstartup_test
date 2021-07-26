import React, { useState } from "react";

const JoinSubmitQnaSecondModal = (props) => {
  return (
    <div className={props.class}>
      <div className="join_member_qna_checked_popup_second">
        <section>
          <div className="join_member_qna_title_container">
            <div className="join_member_qna_Qtitle">Q.</div>
            <div className="join_member_qna_title">관심분야는 무엇인가요?</div>
          </div>
          <div className="join_member_qna_special_container">
            <div className="join_member_qna_special_title">전문분야</div>
            <div className="join_member_qna_special_select_container">
              <button className="join_member_qna_select_btn">상품기획MD</button>
              <button className="join_member_qna_select_btn">브랜딩</button>
              <button className="join_member_qna_select_btn">촬영·편집</button>
              <button className="join_member_qna_select_btn">
                콘텐츠 디자인 (상세페이지, 홍보콘텐츠 등)
              </button>
              <button className="join_member_qna_select_btn">
                커머스 UIUX·개발
              </button>
              <button className="join_member_qna_select_btn">
                커머스 운영·관리
              </button>
              <button className="join_member_qna_select_btn">마케팅</button>
              <button className="join_member_qna_select_btn">고객관리</button>
              <button className="join_member_qna_select_btn">물류관리</button>
              <button className="join_member_qna_select_btn">제조</button>
              <button className="join_member_qna_select_btn">
                글로벌 셀링
              </button>
              <button className="join_member_qna_select_btn">기타</button>
            </div>
          </div>
        </section>
        <div className="join_member_qna_select_confirm_btn_container">
          <a
            className="join_member_qna_select_confirm_btn"
            onClick={() => {
              console.log("clicked");
            }}
          >
            다음으로
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinSubmitQnaSecondModal;
