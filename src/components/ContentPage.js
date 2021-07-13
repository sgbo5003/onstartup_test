import React, { useEffect, useState } from "react";
import "../css/content.css";
import axios from "axios";
import Content from "./Content";
import Slider from "react-slick";
// import "../css/_slick.css";
import "../css/_slick-theme.css";
import "../css/slick.css";
import ScrollButton from "./ScrollButton";
import viewIcon1 from "../images/view_icon1.png";
import viewIcon2 from "../images/view_icon2.png";

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
    content_view_num: [],
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button type="button" className="slick-prev">
        Previous
      </button>
    ), // 이전 화살표 모양 설정
    nextArrow: (
      <button type="button" className="slick-next">
        Next
      </button>
    ), // 다음 화살표 모양 설정
  };

  // const getAllData = () => {
  //   axios.all([getMainData(), getPopularData()]).then(
  //     axios.spread((res1, res2) => {
  //       console.log(res1);
  //       console.log(res2);
  //       setMainData(res1.data);
  //       setPopularData(res2.data);
  //     })
  //   );
  // };

  const getData = async () => {
    const response = await axios.get("/get_info.php?comment=4");
    console.log(response.data.user_name);
    setData(response.data);
  };

  useEffect(() => {
    getData();
    // getAllData();
  }, []);

  const arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ];

  return (
    <div className="wap home_wap">
      <div className="home_content">
        <div className="home_view">
          <h2>
            이 글 어때요?
            <img src={viewIcon1} alt="icon1.png" />
          </h2>
          <Slider {...settings}>
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
          </Slider>
        </div>
        <div className="home_view">
          <h2>
            많은 사람들이 보고 있어요
            <img src={viewIcon2} alt="icon2.png" />
          </h2>
          <Slider {...settings}>
            {arr
              .slice(0)
              .reverse()
              .map((idx) => {
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
          </Slider>
        </div>
        <div className="home_view">
          <h2>오늘의 NEW TOPIC</h2>
          <Slider {...settings}>
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
          </Slider>
        </div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default ContentPage;
