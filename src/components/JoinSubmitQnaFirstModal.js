import React from "react";

const JoinSubmitQnaFirstModal = (props) => {
  // join_member_qna.php => qna 페이지
  function onButtonClicked() {
    console.log("clicked");
  }
  return (
    <div className={props.class}>
      <div className="join_member_qna_checked_popup">
        <section>
          <div className="join_member_qna_title_container">
            <div className="join_member_qna_Qtitle">Q.</div>
            <div className="join_member_qna_title">
              운영중인 커머스, 혹은 전문분야는 무엇인가요?
            </div>
          </div>
          <div className="join_member_qna_commers_container">
            <div className="join_member_qna_commers_title">커머스</div>
            <div className="join_member_qna_commers_select_container">
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                플랫폼운영
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                스마트스토어
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                쿠팡
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                글로벌판매
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                자사몰 (카페24, 메이크샵 등)
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                창업 준비
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                오픈마켓 (11번가, 지마켓 등)
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                도매
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                기타
              </span>
            </div>
          </div>
          <div className="join_member_qna_special_container">
            <div className="join_member_qna_special_title">전문분야</div>
            <div className="join_member_qna_special_select_container">
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                상품기획MD
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                브랜딩
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                촬영·편집
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                콘텐츠 디자인 (상세페이지, 홍보콘텐츠 등)
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                커머스 UIUX·개발
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                커머스 운영·관리
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                마케팅
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                고객관리
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                물류관리
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                제조
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                글로벌 셀링
              </span>
              <span
                className="join_member_qna_select_btn"
                onClick={onButtonClicked}
              >
                기타
              </span>
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

export default JoinSubmitQnaFirstModal;
