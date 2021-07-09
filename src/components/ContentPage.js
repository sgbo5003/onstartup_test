import React, { useEffect, useState } from "react";
import "../css/content.css";
import axios from "axios";

const ContentPage = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await axios.get("");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="wap home_wap">
      <div class="home_content">
        <div class="home_view">
          <h2>
            이 글 어때요?
            <img src="src/images/view_icon1.png" alt="icon1.png" />
          </h2>
          <div class="home_view_cove">
            <div class="home_view_content_cove">
              <div class="home_tag_cove">
                <section class="home_title">
                  <h2 class="hidden">view title</h2>
                  <p>
                    <a href="user_board.php">
                      <img
                        src="src/images/default_user.png"
                        alt="default_user.png"
                      />
                    </a>
                  </p>
                  <div>
                    <ul class="home_ti">
                      <li>
                        <a href="#">{data.user_name}</a>
                      </li>
                      <li>
                        <a href="#">belong</a>
                      </li>
                    </ul>
                    <ul class="home_it">
                      <li></li>
                    </ul>
                  </div>
                </section>
                <section class="home_title_info">
                  <h2 class="hidden">view info</h2>
                  <div class="home_notice_info_top">
                    <p>
                      <a href="#">
                        <img
                          src="<?= $res[9] . $res[10]; ?>"
                          alt="gallery.png"
                        />
                      </a>
                    </p>
                  </div>
                  <div class="home_notice_info_middle">
                    <h2>Title Text</h2>
                    <p></p>
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
                          <span></span>
                        </a>
                      </li>
                      <li class="ic_click">
                        <a href="#">
                          <img
                            src="src/images/icon_comment.png"
                            alt="icon_comment"
                          />
                          <span></span>
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
                          공유<span></span>
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
                          저장<span></span>
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
        </div>
        <div class="home_view">
          <h2>
            많은 사람들이 보고 있어요
            <img src="src/images/view_icon2.png" alt="icon2.png" />
          </h2>
          <div class="home_view_cove">
            <div class="home_view_content_cove">
              <div class="home_tag_cove">
                <section class="home_title">
                  <h2 class="hidden">view title</h2>
                  <p>
                    <a href="user_board.php">
                      <img
                        src="src/images/default_user.png"
                        alt="default_user.png"
                      />
                    </a>
                  </p>
                  <div>
                    <ul class="home_ti">
                      <li>
                        <a href="#"></a>
                      </li>
                      <li>
                        <a href="#"></a>
                      </li>
                    </ul>
                    <ul class="home_it">
                      <li></li>
                    </ul>
                  </div>
                </section>
                <section class="home_title_info">
                  <h2 class="hidden">view info</h2>
                  <div class="home_notice_info_top">
                    <p>
                      <a href="#">
                        <img
                          src="<?= $res[9] . $res[10]; ?>"
                          alt="gallery.png"
                        />
                      </a>
                    </p>
                  </div>
                  <div class="home_notice_info_middle">
                    <h2>Title Text</h2>
                    <p></p>
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
                          <span></span>
                        </a>
                      </li>
                      <li class="ic_click">
                        <a href="#">
                          <img
                            src="src/images/icon_comment.png"
                            alt="icon_comment"
                          />
                          <span></span>
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
                          공유<span></span>
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
                          저장<span></span>
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
        </div>
        <div class="home_view">
          <h2>오늘의 NEW TOPIC</h2>
          <div class="home_view_cove home_view_next_arrow_hidden home_view_margin">
            <div class="home_view_content_cove">
              <div class="home_tag_cove">
                <section class="home_title">
                  <h2 class="hidden">view title</h2>
                  <p>
                    <a href="user_board.php">
                      <img
                        src="src/images/default_user.png"
                        alt="default_user.png"
                      />
                    </a>
                  </p>
                  <div>
                    <ul class="home_ti">
                      <li>
                        <a href="#">닉네임</a>
                      </li>
                      <li>
                        <a href="#">소속</a>
                      </li>
                    </ul>
                    <ul class="home_it">
                      <li>00:00</li>
                    </ul>
                  </div>
                </section>
                <section class="home_title_info">
                  <h2 class="hidden">view info</h2>
                  <div class="home_notice_info_top">
                    <p>
                      <a href="#">
                        <img src="src/images/gallery1.png" alt="gallery.png" />
                      </a>
                    </p>
                  </div>
                  <div class="home_notice_info_middle">
                    <h2>Title Text</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor...
                    </p>
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
                          <span>0</span>
                        </a>
                      </li>
                      <li class="ic_click">
                        <a href="#">
                          <img
                            src="src/images/icon_comment.png"
                            alt="icon_comment"
                          />
                          <span>0</span>
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
                          공유<span>0</span>
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
                          저장<span>0</span>
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
          <div class="home_view_cove home_view_next_arrow_hidden">
            <div class="home_view_content_cove">
              <div class="home_tag_cove">
                <section class="home_title">
                  <h2 class="hidden">view title</h2>
                  <p>
                    <a href="user_board.php">
                      <img
                        src="src/images/default_user.png"
                        alt="default_user.png"
                      />
                    </a>
                  </p>
                  <div>
                    <ul class="home_ti">
                      <li>
                        <a href="#">닉네임</a>
                      </li>
                      <li>
                        <a href="#">소속</a>
                      </li>
                    </ul>
                    <ul class="home_it">
                      <li>00:00</li>
                    </ul>
                  </div>
                </section>
                <section class="home_title_info">
                  <h2 class="hidden">view info</h2>
                  <div class="home_notice_info_top">
                    <p>
                      <a href="#">
                        <img src="src/images/gallery1.png" alt="gallery.png" />
                      </a>
                    </p>
                  </div>
                  <div class="home_notice_info_middle">
                    <h2>Title Text</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor...
                    </p>
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
                          <span>0</span>
                        </a>
                      </li>
                      <li class="ic_click">
                        <a href="#">
                          <img
                            src="src/images/icon_comment.png"
                            alt="icon_comment"
                          />
                          <span>0</span>
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
                          공유<span>0</span>
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
                          저장<span>0</span>
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
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
