import React, { useEffect, useState } from "react";
import "../css/content.css";
import axios from "axios";
import Content from "./Content";

const ContentPage = () => {
  const [data, setData] = useState({
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

  const getData = async () => {
    const response = await axios.get("");
    console.log(response.data.user_name);
    setData(response.data);
  };

  useEffect(() => {
    getData();
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
                key={data.user_idx[idx]}
                title={data.user_name[idx]}
                belong={data.user_belong[idx]}
                commentTime={data.comment_time[idx]}
                commentText={data.comment_text[idx]}
                commentLikeNum={data.comment_like_num[idx]}
                commentReplyNum={data.comment_reply_num[idx]}
                commentShareNum={data.comment_share_num[idx]}
                commentSaveNum={data.comment_save_num[idx]}
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
                key={data.user_idx[idx]}
                title={data.user_name[idx]}
                belong={data.user_belong[idx]}
                commentTime={data.comment_time[idx]}
                commentText={data.comment_text[idx]}
                commentLikeNum={data.comment_like_num[idx]}
                commentReplyNum={data.comment_reply_num[idx]}
                commentShareNum={data.comment_share_num[idx]}
                commentSaveNum={data.comment_save_num[idx]}
              />
            );
          })}
        </div>
        <div class="home_view">
          <h2>오늘의 NEW TOPIC</h2>
          {arr.map((idx) => {
            return (
              <Content
                key={data.user_idx[idx]}
                title={data.user_name[idx]}
                belong={data.user_belong[idx]}
                commentTime={data.comment_time[idx]}
                commentText={data.comment_text[idx]}
                commentLikeNum={data.comment_like_num[idx]}
                commentReplyNum={data.comment_reply_num[idx]}
                commentShareNum={data.comment_share_num[idx]}
                commentSaveNum={data.comment_save_num[idx]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
