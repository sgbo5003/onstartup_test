import React, { useEffect, useState } from "react";

const commersComponentArray = [
  "플랫폼운영",
  "스마트스토어",
  "쿠팡",
  "글로벌판매",
  "자사몰 (카페24, 메이크샵 등)",
  "창업 준비",
  "오픈마켓 (11번가, 지마켓 등)",
  "도매",
  "기타",
];

const specialComponentArray = [
  "상품기획MD",
  "브랜딩",
  "촬영·편집",
  "콘텐츠 디자인 (상세페이지, 홍보콘텐츠 등)",
  "커머스 UIUX·개발",
  "커머스 운영·관리",
  "마케팅",
  "고객관리",
  "물류관리",
  "제조",
  "글로벌 셀링",
  "기타",
];

// join_member_qna.php => qna 페이지
const JoinSubmitQnaFirstModal = (props) => {
  // 버튼이 체크 되었는지 확인하는 state
  const [buttonChecked, setButtonChecked] = useState(false);
  // 커머스 -> 체크된 버튼들을 담는 state
  const [commersCheckedItems, setCommersCheckedItems] = useState(new Set());
  // 전문분야 -> 체크된 버튼들을 담는 state
  const [specialCheckedItems, setSpecialCheckedItems] = useState(new Set());

  //   // 전문분야 itme들을 제어하는 함수
  //   const onSpecialHandler = (e) => {
  //     specialCheckedItems.add(e.target.value);
  //     setSpecialCheckedItems(specialCheckedItems);
  //     console.log(specialCheckedItems.values());
  //   };

  //   const onCommersHandler = (e) => {
  //     commersCheckedItems.add(e.target.value);
  //     setCommersCheckedItems(commersCheckedItems);
  //     console.log(commersCheckedItems.values());
  //   };

  // 커머스 버튼 색상변경 핸들러
  const onCommersHandler = (e) => {
    if (commersCheckedItems.has(e.target.value)) {
      setButtonChecked(false);
      commersCheckedItems.delete(e.target.value);
      setCommersCheckedItems(commersCheckedItems);
      console.log(commersCheckedItems);
    } else {
      setButtonChecked(true);
      commersCheckedItems.add(e.target.value);
      setCommersCheckedItems(commersCheckedItems);
      console.log(commersCheckedItems.values());
    }
  };

  // 커머스 관련 버튼 컴포넌트 Mapping
  const commersButtonOnList = commersComponentArray.map((data) => {
    return (
      <input
        type="button"
        className={`${
          commersCheckedItems.has(data)
            ? "join_member_qna_select_btn_selected"
            : "join_member_qna_select_btn"
        }`}
        onClick={onCommersHandler}
        value={data}
      />
    );
  });

  // 전문분야 버튼 색상변경 핸들러
  const onSpecialHandler = (e) => {
    if (specialCheckedItems.has(e.target.value)) {
      setButtonChecked(false);
      specialCheckedItems.delete(e.target.value);
      setSpecialCheckedItems(specialCheckedItems);
      console.log(specialCheckedItems.values());
    } else {
      setButtonChecked(true);
      specialCheckedItems.add(e.target.value);
      setSpecialCheckedItems(specialCheckedItems);
      console.log(specialCheckedItems.values());
    }
  };

  //전문분야 관련 버튼 컴포넌트 Mapping
  const specialButtonOnList = specialComponentArray.map((data) => {
    return (
      <input
        type="button"
        className={`${
          specialCheckedItems.has(data)
            ? "join_member_qna_select_btn_selected"
            : "join_member_qna_select_btn"
        }`}
        onClick={onSpecialHandler}
        value={data}
      />
    );
  });

  return (
    <>
      <div className="join_member_qna_title_container">
        <div className="join_member_qna_Qtitle">Q.</div>
        <div className="join_member_qna_title">
          운영중인 커머스, 혹은 전문분야는 무엇인가요?
        </div>
      </div>
      <div className="join_member_qna_commers_container">
        <div className="join_member_qna_commers_title">커머스</div>
        <div className="join_member_qna_commers_select_container">
          {commersButtonOnList}
        </div>
      </div>
      <div className="join_member_qna_special_container">
        <div className="join_member_qna_special_title">전문분야</div>
        <div className="join_member_qna_special_select_container">
          {specialButtonOnList}
        </div>
      </div>
      <div className="join_member_qna_select_confirm_btn_container">
        <a
          className="join_member_qna_select_confirm_btn"
          onClick={props.onJoinSubmitQnaSecondModal}
        >
          다음으로
        </a>
      </div>
    </>
  );
};

export default JoinSubmitQnaFirstModal;
