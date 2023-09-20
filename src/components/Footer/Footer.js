import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div>
        <header className="header" />
        <div className="main" />
      </div>
      <footer className="footer-main">
        <div className="footer-contents">
          <ul className="footer-area1">
            <li>로그인</li>
            <li>고객센터</li>
            <li>공지사항</li>
            <li>브랜드 스토리</li>
            <li>블로그</li>
            <li>인재채용</li>
          </ul>
          <hr />
          <div className="footer-area2">
            <div className="footer-area2-left">
              <p>(주)와이즐리컴퍼니 사업자정보</p>
              <p>
                서울특별시 서초구 서초대로 396, 18층 1804호(서초동, 강남빌딩)
                대표자: 김동욱
              </p>
              <p>
                사업자 등록번호: 344-88-00965, 통신판매업신고번호:
                2023-서울서초-0263
              </p>
              <p>
                개인정보보호책임자: 김윤호 yhkim@wiselycompany.com, 고객센터:
                1833-9133
              </p>
              <p>E-mail: help@wiselycompany.com</p>
              <p>제휴문의: gckim@wiselycompany.com</p>
            </div>
            <div className="footer-area2-right">
              <div className="footer-kakao">
                <img
                  src="/SkinImg/img/icon_kakaotalk_fff.svg"
                  className="kakao-img"
                />
                &nbsp;
                <p>카카오톡 채널 '와이즐리'</p>
              </div>
              <div className="footer-cs">
                <p className="footer-cs-num">고객센터 1833-9133</p>
                <div className="footer-cs-hours">
                  <p>[ 평일 ] 오전 9시 ~ 오후 5시 30분</p>
                  <p>[ 점심시간 ] 오후 12시 ~ 1시</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area3">
            <ul className="footer-area3-left">
              <li>개인정보처리방침</li>
              <li>이용안내</li>
              <li>사업자정보확인</li>
              <li>이용약관</li>
              <li>이메일무단수집거부</li>
            </ul>
            <div className="footer-area3-right">
              ©2023.
              <b> Widely Company, Co., Ltd.</b> All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
