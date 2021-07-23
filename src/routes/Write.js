import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import detailClickImg from "../images/detaile_click.png";
import selectBackImg from "../images/select_back.png";
import BackImg from "../images/back.png";
import axios from "axios";
import WriteSelectModal from "../components/WriteSelectModal";
import WriteConfirmModal from "../components/WriteConfirmModal";
import WriteSubmitIsTrueModal from "../components/WriteSubmitIsTrueModal";
import WriteSubmitIsFalseModal from "../components/WriteSubmitIsFalseModal";

const Write = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState();
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState([]);
  const [selectModalOn, setSelectModalOn] = useState(false); // 분야 선택을 띄우기 위해 체크할 수 있는 state
  const [confirmModalOn, setConfirmModalOn] = useState(false); // confirmModal을 띄우기 위해 체크할 수 있는 state
  const [submitIsTrueModal, setSubmitIsTrueModalOn] = useState(false); // 등록하기 => true 체크
  const [submitIsFalseModal, setSubmitIsFalseModalOn] = useState(false); // 등록하기 => false 체크
  const [buttonOn, setButtonOn] = useState(false); // 버튼 disable & enable 변경을 위해 필요한 state

  const onChangeContent = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const onChangeUrl = (e) => {
    setUrl(e.target.value);
    console.log(e.target.value);
  };

  const onChangeImg = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0].name);
    console.log(image);
  };

  const onOpenModal = () => {
    setSelectModalOn(!selectModalOn);
  };

  const onConfirmModal = () => {
    setConfirmModalOn(!confirmModalOn);
  };

  const onSubmitFalseModal = () => {
    setSubmitIsFalseModalOn(false);
    setConfirmModalOn(false);
    setContent("");
    setImage("");
    setUrl("");
    setCategory("");
  };

  //등록하기
  const onSubmitModal = () => {
    // setConfirmModalOn(!confirmModalOn);
    pushData();
    console.log("글쓰기 완료");
  };

  function btnDeactivate() {
    return (
      <input
        onClick={onConfirmModal}
        // type="submit"
        type="button"
        name="write_submit_off"
        className="write_submit_off"
        value="글쓰기"
        disabled
      />
    );
  }

  function btnActivate() {
    return (
      <input
        // type="submit"
        type="button"
        onClick={onConfirmModal}
        name="write_submit_on"
        className="write_submit_on"
        value="글쓰기"
      />
    );
  }

  function checkBtnOn() {
    if (content == "" || category == "") {
      setButtonOn(false);
    } else {
      setButtonOn(true);
    }
  }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   pushData();
  //   console.log("글쓰기 완료");
  // };

  const pushData = () => {
    const params = new FormData();
    params.append("comment_text", content);
    params.append("comment_file", image);
    params.append("comment_url", url);
    params.append("comment_select", category);
    axios({
      method: "post",
      url: "/write_text_in_db.php",
      data: params,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
        if (response.data.complete === 0) {
          console.log("성공");
          setSubmitIsTrueModalOn(true);
        } else {
          console.log("실패");
          setSubmitIsFalseModalOn(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 버튼 변경 & state 변경 실시간 감지
  useEffect(() => {
    checkBtnOn();
  });

  return (
    <div className="wap write_wap">
      <div className="write_content">
        <form
          className="write_view"
          // onSubmit={onSubmit}
          enctype="multipart/form-data"
        >
          <h2 className="write_view_title">글쓰기</h2>
          <section className="write_comment">
            <h2>코멘트 / 포트폴리오 입력</h2>
            <div name="write_text_form">
              <textarea
                type="text"
                name="comment1"
                placeholder="내용"
                className="coment_write comment_write_text write_text_box"
                value={content}
                onChange={onChangeContent}
                required
              ></textarea>
            </div>
          </section>
          <section className="write_comment">
            <h2>
              이미지 추가<span>(선택)</span>
              <a className="detail" href="#">
                <img
                  className="detail_img"
                  src={detailClickImg}
                  alt="detaile_click.png"
                />
              </a>
            </h2>
            <section className="detail_box">
              <h2 className="hidden">툴팁</h2>
              <p className="detail_info">
                참고 할 URL과
                <br />
                이미지가 있다면 입력해 주세요! URL과 이미지를 입력하면 썸네일과
                함께 표시됩니다.
              </p>
              <span>
                <a className="detail_img_cove" href="#">
                  <img
                    className="detail_img_back"
                    src={selectBackImg}
                    alt="back.png"
                  />
                </a>
              </span>
            </section>
            <div className="filebox">
              <div name="write_file_form">
                <input
                  type="file"
                  name="comment_file"
                  onChange={onChangeImg}
                  id="file"
                  accept="image/gif, image/jpeg, image/png"
                />
                <input
                  className="comment_group upload-name comment_file_text write_text_box"
                  placeholder="파일선택"
                  value={image}
                  disabled
                />
                <label for="file" href="#">
                  이미지 찾기
                </label>
              </div>
            </div>
          </section>
          <section className="write_comment">
            <h2>
              URL<span>(선택)</span>
              <a className="detail2" href="#">
                <img
                  className="detail_img"
                  src={detailClickImg}
                  alt="detaile_click.png"
                />
              </a>
            </h2>
            <section className="detail_box2">
              <h2 className="hidden">툴팁</h2>
              <p className="detail_info">
                참고 할 URL과
                <br />
                이미지가 있다면 입력해 주세요! URL과 이미지를 입력하면 썸네일과
                함께 표시됩니다.
              </p>
              <span>
                <a className="detail_img_cove" href="#">
                  <img
                    className="detail_img_back2"
                    src={selectBackImg}
                    alt="back.png"
                  />
                </a>
              </span>
            </section>
            <div name="write_url_form">
              <input
                type="text"
                name="comment2"
                placeholder="URL 입력"
                className="comment_group comment_url comment_url_text write_text_box"
                onChange={onChangeUrl}
                value={url}
              />
            </div>
          </section>
          <section className="write_comment">
            <h2>분야</h2>
            <div className="comment_select_cove">
              <div name="write_select_form">
                <input
                  type="text"
                  name="comment_select"
                  placeholder="분야 선택"
                  disabled
                  className="coment_write comment_group comment_select comment_select_text write_text_box"
                  value={category}
                  required
                />
                <div className="comment_select_img_cove" onClick={onOpenModal}>
                  <img
                    className="comment_select_img"
                    src={selectBackImg}
                    alt="select_back.png"
                  />
                </div>
                {selectModalOn ? (
                  <WriteSelectModal
                    class="write_select_popup_cove_on"
                    onOpenModal={onOpenModal}
                    category={category}
                    setCategory={setCategory}
                    selectModalOn={selectModalOn}
                  />
                ) : (
                  <WriteSelectModal
                    class="write_select_popup_cove_off"
                    onOpenModal={onOpenModal}
                    category={category}
                    setCategory={setCategory}
                  />
                )}
              </div>
            </div>
          </section>
          {buttonOn ? btnActivate() : btnDeactivate()}
          {confirmModalOn ? (
            <WriteConfirmModal
              class="write_comment_popup_cove_on"
              onConfirmModal={onConfirmModal}
              onSubmitModal={onSubmitModal}
            />
          ) : (
            <WriteConfirmModal class="write_comment_popup_cove_off" />
          )}
          {submitIsTrueModal ? (
            <WriteSubmitIsTrueModal class="write_comment_popup_cove_on" />
          ) : (
            <WriteSubmitIsTrueModal class="write_comment_popup_cove_off" />
          )}
          {submitIsFalseModal ? (
            <WriteSubmitIsFalseModal
              class="write_comment_popup_cove_on"
              onSubmitFalseModal={onSubmitFalseModal}
              setSubmitIsFalseModalOn={setSubmitIsFalseModalOn}
            />
          ) : (
            <WriteSubmitIsFalseModal class="write_comment_popup_cove_off" />
          )}
        </form>
      </div>
    </div>
  );
};

export default Write;
