import React, { useState } from "react";
import defaultUserImg from "../images/default_user.png";
import editTagImg from "../images/edit_tag_cancel.png";
const MypageEdit = () => {
  const oncareerInputClick = () => {
    console.log("clicked");
  };

  //경력사항
  const [careerItem, setCareerItem] = useState("");
  //경력사항을 담는 배열
  const [careerItemList, setCareerItemList] = useState([]);
  //학력사항
  const [educationItem, setEducationItem] = useState("");
  //학력사항을 담는 배열
  const [educationItemList, setEducationItemList] = useState([]);
  // 버튼 감지
  const [button, setButtonClicked] = useState(false);
  // 경력사항 input 변경 값 감지 함수
  const onChangeCareerTextHandler = (e) => {
    setCareerItem(e.target.value);
  };
  // 학력사항 input 변경 값 감지 함수
  const onChangeEducationTextHandler = (e) => {
    setEducationItem(e.target.value);
  };
  // 경력추가 버튼 기능
  const onCareerSubmit = (e) => {
    if (careerItem === "") {
      return;
    } else {
      careerItemList.push(careerItem);
      setCareerItemList(careerItemList);
      console.log(careerItemList);
      setButtonClicked(true);
      setCareerItem("");
    }
  };
  // 학력추가 버튼 기능
  const onEducationSubmit = () => {
    if (educationItem === "") {
      return;
    } else {
      educationItemList.push(educationItem);
      setEducationItemList(educationItemList);
      console.log(educationItemList);
      setButtonClicked(true);
      setEducationItem("");
    }
  };

  // 추가한 항목 삭제버튼 기능
  const onCareerCancelClick = () => {
    educationItemList.pop(educationItem);
    console.log("clicked");
  };

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
            {button
              ? careerItemList.map((data) => {
                  return <input className="mypage_input_add" value={data} />;
                })
              : ""}
            <input
              className="mypage_input_add"
              placeholder="회사"
              value={careerItem}
              onChange={onChangeCareerTextHandler}
            />

            <div className="mypage_edit_tag_cancel_img_container">
              <a
                className="mypage_edit_tag_cancel_img_box"
                onClick={onCareerCancelClick}
              >
                <img src={editTagImg} alt="edit_tag_cancel" />
              </a>
            </div>
            <p className="mypage_input_add_btn">
              <a className="mypage_input_add_btn_a" onClick={onCareerSubmit}>
                경력추가 +
              </a>
            </p>
          </div>
          <div className="mypage_education_container">
            <h2 className="mypage_input_title">학력</h2>
            {button
              ? educationItemList.map((data) => {
                  return <input className="mypage_input_add" value={data} />;
                })
              : ""}
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
