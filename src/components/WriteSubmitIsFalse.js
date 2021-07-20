import React from "react";
const WriteSubmitIsFalse = (props) => {
  return (
    <div class="write_comment_popup_cove_on">
      <div class="write_comment_checking_fail_popup">
        <h3 class="write_comment_checking_fail_title">
          코멘트 등록에 실패했습니다.
        </h3>
        <div>
          <p>
            <a class="comment_checking__fail_btn">확인</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WriteSubmitIsFalse;
