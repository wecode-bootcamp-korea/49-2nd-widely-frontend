import React from 'react';
import {
  FOOTER_DATA_INTRO,
  FOOTER_DATA_INFO,
  FOOTER_DATA_TERMS,
<<<<<<< HEAD
} from '../../Data/data';
=======
} from './Data/data';
>>>>>>> b80b600876ebcde6c10c6670d5c0a37d9c4b081d
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footerMain">
      <div className="footerContents">
        <ul className="footerArea1">
          {FOOTER_DATA_INTRO.map((info) => (
            <li key={info.id}>{info.text}</li>
          ))}
        </ul>
        <hr />
        <div className="footerArea2">
          <div className="footerArea2Left">
            {FOOTER_DATA_INFO.map((info) => (
              <p key={info.id}>{info.text}</p>
            ))}
          </div>
          <div className="footerArea2Right">
            <div className="footerKakao">
              <img
                src="https://www.wisely.store/SkinImg/img/icon_kakaotalk_fff.svg"
                className="kakaoImg"
                alt="카카오톡 아이콘"
              />
              &nbsp;
              <p>카카오톡 채널 '와이즐리'</p>
            </div>
            <div className="footerCs">
              <p className="footerCsNum">고객센터 1833-9133</p>
              <div className="footerCsHours">
                <p>[ 평일 ] 오전 9시 ~ 오후 5시 30분</p>
                <p>[ 점심시간 ] 오후 12시 ~ 1시</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footerArea3">
          <ul className="footerArea3Left">
            {FOOTER_DATA_TERMS.map((info) => (
              <li key={info.id}>{info.text}</li>
            ))}
          </ul>
          <div className="footerArea3Right">
            ©2023.
            <b> Widely Company, Co., Ltd.</b> All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
