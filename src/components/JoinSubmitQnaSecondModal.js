import React, { useState } from "react";

const interestComponentArray = [
  "커머스 진단",
  "상품기획MD",
  "콘텐츠",
  "브랜딩",
  "디자인 (상세페이지, 홍보컨텐츠 등)",
  "촬영·편집",
  "커머스 UIUX·개발",
  "커머스 운영·관리",
  "마케팅",
  "고객관리",
  "물류관리",
  "제조",
  "글로벌 셀링",
  "기타",
];

const JoinSubmitQnaSecondModal = (props) => {
  // 관심분야 -> 체크된 버튼들을 담는 state
  const [interestCheckedItems, setInterestCheckedItems] = useState(new Set());

  // 관심분야 item들을 제어하는 함수
  const onInterestHandler = (e) => {
    interestCheckedItems.add(e.target.value);
    setInterestCheckedItems(interestCheckedItems);
    console.log(interestCheckedItems);
  };

  // 관심분야 관련 버튼 컴포넌트 Mapping
  const interestButtonOnList = interestComponentArray.map((data) => {
    return (
      <input
        type="button"
        className="join_member_qna_select_btn"
        onClick={onInterestHandler}
        value={data}
      />
    );
  });

  return (
    <>
      <div className="join_member_qna_title_container">
        <div className="join_member_qna_Qtitle">Q.</div>
        <div className="join_member_qna_title">관심분야는 무엇인가요?</div>
      </div>
      <div className="join_member_qna_special_container">
        <div className="join_member_qna_special_title">관심분야</div>
        <div className="join_member_qna_special_select_container">
          {interestButtonOnList}
        </div>
      </div>
      <div className="join_member_qna_select_confirm_btn_container">
        <a
          className="join_member_qna_select_confirm_btn"
          onClick={props.onSubmit}
        >
          선택완료
        </a>
      </div>
    </>
  );
};

export default JoinSubmitQnaSecondModal;
