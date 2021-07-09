import React from "react";

const Content = (props) => {
  return (
    <div class="home_view_cove">
      <div class="home_view_content_cove">
        <div class="home_tag_cove">
          <section class="home_title">
            <h2 class="hidden">view title</h2>
            <p>
              <a href="user_board.php">
                <img src="src/images/default_user.png" alt="default_user.png" />
              </a>
            </p>
            <div>
              <ul class="home_ti">
                <li>
                  <a href="#">{props.title}</a>
                </li>
                <li>
                  <a href="#">{props.belong}</a>
                </li>
              </ul>
              <ul class="home_it">
                <li>{props.commentTime}</li>
              </ul>
            </div>
          </section>
          <section class="home_title_info">
            <h2 class="hidden">view info</h2>
            <div class="home_notice_info_top">
              <p>
                <a href="#">
                  <img src="src/images/default_user.png" alt="gallery.png" />
                </a>
              </p>
            </div>
            <div class="home_notice_info_middle">
              <h2>Title Text</h2>
              <p>{props.commentText}</p>
            </div>
          </section>
          <section class="home_notice_info_lower">
            <h2 class="hidden">view lower</h2>
            <div>
              <ul class="icon_left">
                <li class="ic_click">
                  <a href="#">
                    <img
                      src="src/images/icon_like.png"
                      alt="icon_like"
                      class="nor_img"
                    />
                    <img
                      src="src/images/icon_like_on.png"
                      alt="icon_like"
                      class="active_img"
                    />
                    <span>{props.commentLikeNum}</span>
                  </a>
                </li>
                <li class="ic_click">
                  <a href="#">
                    <img src="src/images/icon_comment.png" alt="icon_comment" />
                    <span>{props.commentReplyNum}</span>
                  </a>
                </li>
              </ul>
              <ul class="icon_right">
                <li class="ic_click">
                  <a class="share_btn" href="#">
                    <img
                      src="src/images/icon_share.png"
                      alt="icon_share"
                      class="nor_img"
                    />
                    <img
                      src="src/images/message_back.png"
                      alt="message_back"
                      class="active_img"
                    />
                  </a>
                  <a href="#">
                    공유<span>{props.commentShareNum}</span>
                  </a>
                </li>
                <li class="ic_click">
                  <a href="#">
                    <img
                      src="src/images/icon_sav.png"
                      alt="icon_sav"
                      class="nor_img"
                    />
                    <img
                      src="src/images/icon_sav_on.png"
                      alt="icon_sav"
                      class="active_img"
                    />
                  </a>
                  <a href="#">
                    저장<span>{props.commentSaveNum}</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <div class="share_cove">
            <ul class="share_box">
              <li class="copylink">링크 복사</li>
              <li class="kakaotalk_share">카카오톡 공유</li>
              <li class="facebook_share">페이스북 공유</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
