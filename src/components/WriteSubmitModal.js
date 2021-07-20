import React from "react";

const WriteSubmitModal = (props) => {
  return (
    <div class={props.class}>
      <div class="write_comment_checking_popup">
        <h3 class="write_comment_checking_title">코멘트를 등록했습니다.</h3>
        <div>
          <p>
            <div class="comment_checking_btn">확인</div>
          </p>
        </div>
      </div>
    </div>
    //   <div class="write_comment_checking_fail_popup">
    //     <h3 class="write_comment_checking_fail_title">코멘트 등록에 실패했습니다.</h3>
    //     <div>
    //       <p><a class="comment_checking__fail_btn">확인</a></p>
    //     </div>
    //   </div>
  );
};

export default WriteSubmitModal;
