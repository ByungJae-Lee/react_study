import './Main.css';
// JSX의 주의사항
// 1. 중괄호{} 내부엔 JS 표현식만 넣을 수 있음 if문, for문 같은거 안됨
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. 객체자체를 렌더링 할 수 없음
// 3. 모든 태그는 닫혀있어야만 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다. 최상위 div하나로 감싸야 함

const Main = () => {
  const user = {
    name: '이정환',
    isLogin: false,
  };
  return (
    <div className="logout">
      {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    </div>
  );
};

export default Main;
