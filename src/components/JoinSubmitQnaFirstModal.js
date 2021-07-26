import React, { useState } from "react";

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
  const [buttonChecked, setButtonChecked] = useState(false); // 버튼이 체크 되었는지 확인하는 state
  const [checkedItems, setCheckedItems] = useState(new Set()); // 체크된 버튼들을 담는 state

  // 체크된 버튼들을 관리하는 function
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  const checkHandler = (e) => {
      setButtonChecked(!buttonChecked);
      checkedItemHandler(issue.id, e.target.)
  }
  // const setcommersItemsHandler = (e) => {
  //   commersItems.add(e.target.value);
  //   console.log(e.target.value);
  // };

  const onChangeButtonColor = () => {
    setButton(!buttonChecked);
  };

  const commersButtonOnList = commersComponentArray.map((data) => {
    return (
      <input
        type="button"
        className={
          commersItems.has()
            ? "join_member_qna_select_btn_selected"
            : "join_member_qna_select_btn"
        }
        // className="join_member_qna_select_btn_selected"
        onClick={setcommersItemsHandler}
        value={data}
      />
    );
  });

  // const commersButtonOffList = commersComponentArray.map((data) => {
  //   return (
  //     <button
  //       className="join_member_qna_select_btn"
  //       onClick={onChangeButtonColor}
  //     >
  //       {data}
  //     </button>
  //   );
  // });

  const specialButtonOnList = specialComponentArray.map((data) => {
    return (
      <input
        type="button"
        className="join_member_qna_select_btn_selected"
        onClick={onChangeButtonColor}
        value={data}
      />
    );
  });

  // const specialButtonOffList = specialComponentArray.map((data) => {
  //   return (
  //     <button
  //       className="join_member_qna_select_btn"
  //       onClick={onChangeButtonColor}
  //     >
  //       {data}
  //     </button>
  //   );
  // });

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
              {commersButtonOnList}
            </div>
          </div>
          <div className="join_member_qna_special_container">
            <div className="join_member_qna_special_title">전문분야</div>
            <div className="join_member_qna_special_select_container">
              {specialButtonOnList}
            </div>
          </div>
        </section>
        <div className="join_member_qna_select_confirm_btn_container">
          <a
            className="join_member_qna_select_confirm_btn"
            onClick={props.onJoinSubmitQnaSecondModal}
          >
            다음으로
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinSubmitQnaFirstModal;
