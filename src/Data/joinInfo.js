export const MANDATORY_ICON_DATA = {
  src: 'https://wisely.store/custom/img/icon_require.png?1696239194034',
  className: 'mandatory',
  alt: '필수입력사항',
};

export const FIELD_DATA = [
  {
    label: '이메일',
    type: 'email',
    name: 'email',
    placeholder: '이메일을 입력해주세요',
    description: '로그인 아이디로 사용할 이메일을 입력해 주세요',
    value: '',
  },
  {
    label: '비밀번호',
    type: 'password',
    name: 'password',
    placeholder: '비밀번호를 입력해주세요',
    description: '(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)',
    value: '',
  },
  {
    label: '비밀번호 확인',
    type: 'password',
    name: 'passwordCheck',
    placeholder: '비밀번호를 한번 더 입력해주세요',
    value: '',
  },
  {
    label: '이름',
    type: 'text',
    name: 'name',
    placeholder: '실명으로 기입해주세요',
    value: '',
  },
];

export const isRequired = true; // 필수 입력 여부
