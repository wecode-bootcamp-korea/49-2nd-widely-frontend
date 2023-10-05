import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';
// import Button from '../../../components/Button/Button';
import LoginCheck from '../LoginCheck/LoginCheck';
import './LoginWrap.scss';

const LoginWrap = () => {
  // 2. 입력되는 값을 저장할 변수와 상태 변화를 위한 useState 함수 선언
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  // 3. userInfo 변수 안에 저장될 key를 구조 분해 할당 진행
  const { email, password } = userInfo;

  // 4. name과 value를 useState의 setter 함수를 통해 userInfo에 저장
  const typingSentry = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // 5. 입력되는 값의 유효성 검증을 위한 email validation check 함수 생성
  const emailValidCheck = (email) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    // 유효한 경우에 return 반환
    return regExp.test(email);
  };

  // 6. 입력되는 값의 유효성 검증을 위한 password validation check 함수 생성
  const pwValidCheck = (password) => {
    if (password.length >= 10) {
      return true;
    }
    return false;
  };

  // 7. submit button의 활성화 조건 판단
  const isDisabled = !(emailValidCheck(email) && pwValidCheck(password))
    ? true
    : false;

  // 8. form의 onSubmit과 submit button의 이벤트 핸들러에 fetch 메서드 연결
  const submitUserInfo = (e) => {
    e.preventDefault();
    //
    navigate('/main');
    //
    fetch('http://10.58.52.151:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 9. body 안에 구조 분해 할당한 email과 password 처리
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        // 12. 약속된 message가 내려오면 local storage에 access token 저장
        if (response.headers.has('Authorization')) {
          const token = response.headers.get('Authorization'); // 'Authorization' 헤더 값을 가져옴
          console.log(token);

          // 10. 정상적으로 통신되면 응답의 결과물을 JavaScript로 변환
          if (response.status === 200) {
            return response.json();
          }
          // 11. 통신 실패 시 에러를 catch 메서드로 던져서 출력
          throw new Error('communication failure');
        }
      })
      .then((result) => {
        if (result.message === 'Login success') {
          localStorage.setItem('accessToken', result.accessToken);
          // 14. 로그인 성공 후 다음 스텝을 위해 setter 함수 발동
          setLoginComplete(true);
        } else {
          throw new Error('응답에서 "Authorization" 헤더가 누락됨');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 13. 로그인 성공 여부에 따라 다음 스텝 처리를 위한 useState 함수 선언
  const [loginComplete, setLoginComplete] = useState(false);

  // 15. 로그인 성공 시 페이지 이동을 위한 useNavigate 함수 선언
  const navigate = useNavigate();

  // 16. loginComplete를 구독한 상태에서 리렌더링하여 조건 맞을 경우에만 콜백 함수 발동
  useEffect(() => {
    if (loginComplete === true) {
      // 17. 콜백 함수 안에서 useNavigate 처리로 페이지 이동
      navigate('/main');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginComplete]);

  // console.log(userInfo);

  const handleJoin = () => {
    navigate('/join');
  };

  return (
    <form
      className="loginForm"
      onChange={typingSentry}
      onSubmit={submitUserInfo}
    >
      <fieldset className="logInfoMain">
        <legend>로그인</legend>
        <div className="loginInput">
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
          />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <LoginCheck />
        <div className="loginButton">
          <button type="submit" className="loginBtn" disabled={isDisabled}>
            로그인
          </button>
          <button type="button" className="joinBtn" onClick={handleJoin}>
            회원가입
          </button>
          <p className="kakaoLink">
            <a href="https://kauth.kakao.com/oauth/authorize?client_id=1c6e9e460200c4390eabf0875a047bed&redirect_uri=http://localhost:8000/users/kakao/login&response_type=code">
              <img src="https://wisely.store/SkinImg/img/icon_kakao.svg" />
              &nbsp; 카톡으로 쉽게 시작하기
            </a>
          </p>
        </div>
        <ul className="searchId">
          <li>
            <Link to="/find_id" className="linkText">
              이메일 찾기
            </Link>
          </li>
          <li>
            <Link to="/find_pw" className="linkText">
              비밀번호 찾기
            </Link>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

export default LoginWrap;
