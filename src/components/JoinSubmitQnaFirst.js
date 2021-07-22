import React from "react";

const JoinSubmitQnaFirst = (props) => {
  // join_member_qna.php => qna 페이지
  return (
    <div className="join_member_checked_cove_on">
      <section class="login_qna_title">
        <h2>Q.</h2>
        <p>운영중인 커머스, 혹은 전문분야는 무엇인가요?</p>
        <div class="qng_tag_select_group">
          <p>커머스</p>
          <div class="qng_tag_cove">
            <span class="qng_tag">플랫폼운영</span>
            <span class="qng_tag">스마트스토어</span>
            <span class="qng_tag">쿠팡</span>
            <span class="qng_tag">글로벌판매</span>
            <span class="qng_tag">자사몰 (카페24, 메이크샵 등)</span>
            <span class="qng_tag">창업 준비</span>
            <span class="qng_tag">오픈마켓 (11번가, 지마켓 등)</span>
            <span class="qng_tag">도매</span>
            <span class="qng_tag">기타</span>
          </div>
        </div>
        <div class="qng_tag_select_group">
          <p>전문분야</p>
          <div class="qng_tag_cove">
            <span class="qng_tag">상품기획MD</span>
            <span class="qng_tag">브랜딩</span>
            <span class="qng_tag">촬영·편집</span>
            <span class="qng_tag">
              콘텐츠 디자인 (상세페이지, 홍보콘텐츠 등)
            </span>
            <span class="qng_tag">커머스 UIUX·개발</span>
            <span class="qng_tag">커머스 운영·관리</span>
            <span class="qng_tag">마케팅</span>
            <span class="qng_tag">고객관리</span>
            <span class="qng_tag">물류관리</span>
            <span class="qng_tag">제조</span>
            <span class="qng_tag">글로벌 셀링</span>
            <span class="qng_tag">기타</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinSubmitQnaFirst;
