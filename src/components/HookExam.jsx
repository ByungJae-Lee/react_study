import useInput from './hooks/useInput';

useInput;
/*
3가지 hook 관련된 팁
1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
2. 조건부로 호출될 수는 없다. - 조건문이나 반복문 내부에서 호출불가
3. 나만의 훅(Custom Hook)을 직접 제작이 가능함
*/

// const state = useState(); <- 컴포넌트 밖에서는 호출 안됨!
// 커스텀 훅 만드는 법 - 원래 useState는 컴포넌트 밖에서 인식안되지만 use로 이름지으면 훅으로 인식해서 가능함
// 보통 커스텀 훅들은 hooks 라는 폴더를 따로 만들어 관리함

// function useInput() {
//   const [input, setInput] = useState('');

//   const onChange = (e) => {
//     setInput(e.target.value);
//   };
//   return [input, onChange];
// }

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
