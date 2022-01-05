import { useState } from 'react/cjs/react.development';

function Counter3() {
  const [state, setState] = useState({ value: 0, color: 'red' });
  //   const { value, color } = state;

  //   const [value, setValue] = useState(0);
  //   const [color, setColor] = useState('red');

  // 4번
  //   const handleBlue = () => {
  //     return setColor('blue');
  //   };

  // 6-1
  //   const handlePlus = () => {
  //     const Plus = {
  //       ...state,
  //       value: state.value + 1,
  //     };
  //     return setState(Plus);
  //   };

  // const handleMinus = () => {
  //     const Minus = {
  //       ...state,
  //       value: state.value - 1,
  //     };
  //     return setState(Minus);
  //   };

  //   // [] 배열 {} 객체 ()튜플
  //   // setState에 ()가 들어가고 const ss = {}에서 const ss를 제외하고가 가능?>가능
  //6번 + -
  //  const handlePlus = () => {
  //     setState((prevState) => ({
  //       ...prevState,
  //       value: prevState.value + 1,
  //     }));
  //   };

  //   const handleMinus = () => {
  //     setState((prevState) => ({
  //       ...prevState,
  //       value: prevState.value - 1,
  //     }));
  //   };

  const handlePlus = () => {};

  const handleMinus = () => {};

  // 5번
  //   const handlegreen = () => {
  //     setState((preColor) => 'green');
  //   };

  //   const handleblue = () => {
  //     setState((preColor) => 'blue');
  //   };

  //   const handskyblue = () => {
  //     setState((preColor) => 'skyblue');
  //   };

  //   const handlegreen = () => {
  //     const Green = {
  //       ...state,
  //       color: (state.color = 'green'),
  //     };
  //     return setState(Green);
  //   };

  //   const handlegreen = () => {
  //     setState({
  //       ...state,
  //       color: (state.color = 'green'),
  //     });
  //   };

  const handlegreen = () => {
    setState((prevState) => ({
      ...prevState,
      color: 'green',
    }));
  };

  const handleblue = () => {
    setState((prevState) => ({
      ...prevState,
      color: 'blue',
    }));
  };

  const handskyblue = () => {
    setState((prevState) => ({
      ...prevState,
      color: 'skyblue',
    }));
  };

  return (
    <div>
      <h2>Counter</h2>
      <div style={{ ...defalutStyle, background: state.color }}>
        {state.value}
      </div>
      <hr />
      {/* <button onClick={() => setValue(value + 1)}>증가</button> */}
      {/* <button onClick={() => setValue(value - 1)}>감소</button> */}
      <button onClick={handlePlus}>증가</button>
      <button onClick={handleMinus}>감소</button>
      {/* <button onClick={handleBlue}>파랑파랑</button> */}

      <button onClick={handlegreen}>녹색</button>
      <button onClick={handleblue}>파랑</button>
      <button onClick={handskyblue}>하늘</button>
    </div>
  );
}
const defalutStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  lineHeight: '100px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: '3rem',
  userSelect: 'none',
};

export default Counter3;
