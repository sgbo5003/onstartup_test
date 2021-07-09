import React, { useEffect, useState } from "react";
import "../css/content.css";
import axios from "axios";
import Content from "./Content";

const ContentPage = () => {
  const [mainData, setMainData] = useState({
    user_idx: [],
    user_name: [],
    user_belong: [],
    comment_time: [],
    comment_text: [],
    comment_like_num: [],
    comment_reply_num: [],
    comment_share_num: [],
    comment_save_num: [],
  });

  const [popularData, setPopularData] = useState({
    user_idx: [],
    user_name: [],
    user_belong: [],
    comment_time: [],
    comment_text: [],
    comment_like_num: [],
    comment_reply_num: [],
    comment_share_num: [],
    comment_save_num: [],
  });

  function getMainData() {
    return axios.get("/get_info.php?comment=1");
  }

  function getPopularData() {
    return axios.get("/get_info.php?comment=2");
  }

  const getAllData = () => {
    axios.all([getMainData(), getPopularData()]).then(
      axios.spread((res1, res2) => {
        console.log(res1);
        console.log(res2);
        setMainData(res1.data);
        setPopularData(res2.data);
      })
    );
  };
  // const getData = async () => {
  //   const response = await axios.get("/web/src/php/get_info.php?comment=1");
  //   console.log(response.data.user_name);
  //   setData(response.data);
  // };

  useEffect(() => {
    // getData();
    getAllData();
  }, []);

  const arr = [0, 1, 2, 3];

  return (
    <div class="wap home_wap">
      <div class="home_content">
        <div class="home_view">
          <h2>
            이 글 어때요?
            <img src="src/images/view_icon1.png" alt="icon1.png" />
          </h2>
          {arr.map((idx) => {
            return (
              <Content
                key={mainData.user_idx[idx]}
                title={mainData.user_name[idx]}
                belong={mainData.user_belong[idx]}
                commentTime={mainData.comment_time[idx]}
                commentText={mainData.comment_text[idx]}
                commentLikeNum={mainData.comment_like_num[idx]}
                commentReplyNum={mainData.comment_reply_num[idx]}
                commentShareNum={mainData.comment_share_num[idx]}
                commentSaveNum={mainData.comment_save_num[idx]}
              />
            );
          })}
        </div>
        <div class="home_view">
          <h2>
            많은 사람들이 보고 있어요
            <img src="src/images/view_icon2.png" alt="icon2.png" />
          </h2>
          {arr.map((idx) => {
            return (
              <Content
                key={popularData.user_idx[idx]}
                title={popularData.user_name[idx]}
                belong={popularData.user_belong[idx]}
                commentTime={popularData.comment_time[idx]}
                commentText={popularData.comment_text[idx]}
                commentLikeNum={popularData.comment_like_num[idx]}
                commentReplyNum={popularData.comment_reply_num[idx]}
                commentShareNum={popularData.comment_share_num[idx]}
                commentSaveNum={popularData.comment_save_num[idx]}
              />
            );
          })}
        </div>
        <div class="home_view">
          <h2>오늘의 NEW TOPIC</h2>
          {arr.map((idx) => {
            return (
              <Content
                key={mainData.user_idx[idx]}
                title={mainData.user_name[idx]}
                belong={mainData.user_belong[idx]}
                commentTime={mainData.comment_time[idx]}
                commentText={mainData.comment_text[idx]}
                commentLikeNum={mainData.comment_like_num[idx]}
                commentReplyNum={mainData.comment_reply_num[idx]}
                commentShareNum={mainData.comment_share_num[idx]}
                commentSaveNum={mainData.comment_save_num[idx]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
