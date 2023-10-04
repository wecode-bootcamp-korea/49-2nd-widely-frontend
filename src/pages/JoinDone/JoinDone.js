import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinDone.scss';

const JoinDone = () => {
  const navigate = useNavigate();

  // 2.5초 후에 /login 페이지로 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="doneMain">
      <div className="doneBox">
        <img
          src="https://r2.jjalbot.com/2023/03/MDuedUPhwj.png"
          className="signupSuccess"
        />
      </div>
    </div>
  );
};

export default JoinDone;
