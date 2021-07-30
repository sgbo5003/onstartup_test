import React, { useState } from "react";
import defaultUserImg from "../images/default_user.png";
import editTagImg from "../images/edit_tag_cancel.png";
const MypageEdit = () => {
  const selectsInterestListArray = [
    { id: 1, interestName: "커머스 진단" },
    { id: 2, interestName: "상품기획MD" },
    { id: 3, interestName: "콘텐츠" },
    { id: 4, interestName: "브랜딩" },
    { id: 5, interestName: "디자인 (상세페이지, 홍보컨텐츠 등)" },
    { id: 6, interestName: "촬영·편집" },
    { id: 7, interestName: "커머스 UIUX·개발" },
    { id: 8, interestName: "커머스 운영·관리" },
    { id: 9, interestName: "마케팅" },
    { id: 10, interestName: "고객관리" },
    { id: 11, interestName: "물류관리" },
    { id: 12, interestName: "제조" },
    { id: 13, interestName: "글로벌 셀링" },
    { id: 14, interestName: "기타" },
  ];

  const selectsInterestList = selectsInterestListArray.map((data) => {
    return <input className="mypage_input_interest" value="브랜딩" />;
  });

  //경력사항
  const [careerItem, setCareerItem] = useState("");
  //경력사항을 담는 배열
  const [careerItemList, setCareerItemList] = useState([]);
  //학력사항
  const [educationItem, setEducationItem] = useState("");
  //학력사항을 담는 배열
  const [educationItemList, setEducationItemList] = useState([]);

  // 경력추가 input 값 감지 함수
  const careerOnChangeHandler = (e) => {
    console.log(e.target.value);
    setCareerItem(e.target.value);
  };

  // 경력추가 버튼 기능
  const onCareerSubmit = () => {
    if (careerItem === "") {
      return;
    } else {
      setCareerItemList(careerItemList.concat(careerItem));
    }
    setCareerItem("");
  };

  // 학력사항 input 변경 값 감지 함수
  const educationOnChangeHandler = (e) => {
    console.log(e.target.value);
    setEducationItem(e.target.value);
  };

  // 학력추가 버튼 기능
  const onEducationSubmit = () => {
    if (educationItem === "") {
      return;
    } else {
      setEducationItemList(educationItemList.concat(educationItem));
    }
    setEducationItem("");
  };

  // 추가한 항목 삭제버튼 기능
  const onCareerCancelClick = (item) => {
    const checkNewArray = careerItemList.filter((el) => el !== item);
    setCareerItemList(checkNewArray);
  };

  console.log(careerItemList);

  return (
    <div className="mypage_edit_wap">
      <div className="mypage_profile_component">
        <img src={defaultUserImg} />
      </div>
      <div className="mypage_edit_content">
        <form className="mypage_edit_view">
          <div className="mypage_name_container">
            <h2 className="mypage_input_title">이름</h2>
            <div>
              <input className="mypage_input" />
            </div>
          </div>
          <div className="mypage_belongTitle_container">
            <div className="mypage_belong_container">
              <h2 className="mypage_input_title">소속</h2>
              <div>
                <input className="mypage_input" />
              </div>
            </div>
            <div className="mypage_subTitle_container">
              <h2 className="mypage_input_title">직함</h2>
              <div>
                <input className="mypage_input" />
              </div>
            </div>
          </div>
          <div className="mypage_introduceWrite_container">
            <h2 className="mypage_input_title">소개글</h2>
            <div>
              <input className="mypage_input" />
            </div>
          </div>
          <div className="mypage_interest_container">
            <div className="mypage_interest_view">
              <h2 className="mypage_input_title">관심분야</h2>
              <input
                className="mypage_input_interest"
                value="브랜딩"
                disabled
              />
              <input
                className="mypage_input_interest"
                value="커머스 정보"
                disabled
              />
              <input
                className="mypage_input_interest"
                value="관심분야"
                disabled
              />
            </div>
            <div className="mypage_interest_select">
              <h2 className="mypage_input_title">관심분야 선택하기</h2>
              <input className="mypage_input" />
            </div>
          </div>
          <div className="mypage_career_container">
            <h2 className="mypage_input_title">경력사항</h2>
            <input
              type="text"
              className="mypage_input_add"
              placeholder="회사"
              value={careerItem}
              onChange={careerOnChangeHandler}
            />
            {careerItemList.map((item) => {
              return (
                <div className="mypage_input_add_button_component">
                  {item}
                  <a
                    className="mypage_edit_tag_cancel_img_box"
                    onClick={() => onCareerCancelClick(item)}
                  >
                    <img src={editTagImg} alt="edit_tag_cancel" />
                  </a>
                </div>
              );
            })}
            {/* <div className="mypage_edit_tag_cancel_img_container">
              <a
                className="mypage_edit_tag_cancel_img_box"
                onClick={onCareerCancelClick}
              >
                <img src={editTagImg} alt="edit_tag_cancel" />
              </a>
            </div> */}
            <p className="mypage_input_add_btn">
              <a className="mypage_input_add_btn_a" onClick={onCareerSubmit}>
                경력추가 +
              </a>
            </p>
          </div>
          <div className="mypage_education_container">
            <h2 className="mypage_input_title">학력</h2>

            <input
              className="mypage_input_add"
              placeholder="OO학교 OO전공"
              value={educationItem}
              onChange={onChangeEducationTextHandler}
            />
            <div className="mypage_edit_tag_cancel_img_container">
              <a className="mypage_edit_tag_cancel_img_box">
                <img src={editTagImg} alt="edit_tag_cancel" />
              </a>
            </div>
            <p className="mypage_input_add_btn">
              <a className="mypage_input_add_btn_a" onClick={onEducationSubmit}>
                학력추가 +
              </a>
            </p>
          </div>
          <div className="mypage_hompageUrl_container">
            <h2 className="mypage_input_title">대표 홈페이지 URL</h2>
            <div>
              <input className="mypage_input" />
            </div>
          </div>
          <div className="mypage_button_container">
            <input
              className="mypage_submit_button_off"
              type="button"
              value="취소"
            />
            <input
              className="mypage_submit_button_on"
              type="button"
              value="완료"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MypageEdit;
