import { useState } from "react";

// { type: "PLUS", amount: 1 }
// { type: "MINUS", amount: 1 }
function dispatch(action, prevState) {
  // 순수함수로서 구현이 되어야만 합니다.
  // 같은 값의 인자가 주어지만, 항상 같은 값의 리턴을 해야만 하고
  // 인자 외에 다른 어떤 값, 어떤 통신을 해서도 안 됩니다.
  const { type, amount } = action;
  if (type === "PLUS") {
    return prevState + amount;
  } else if (type === "MINUS") {
    return prevState - amount;
  }
  // 버그 !!!
  return prevState;
}

function dispatch_color(action, prevState) {
  const { type, color } = action;
  if (type === "CHANGE_COLOR") {
    return color;
  }
}

function Counter2() {
  // TODO: color와 value
  // 지금의 초기값 : 0
  // 오후의 초기값 : { value: 0, color: "red" }
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    const action = { type: "PLUS", amount: 1 };
    setValue((prevValue) => {
      // dispatch 함수를 호출하여, 새로운 상탯값을 계산해냅니다.
      return dispatch(action, prevValue);
    });
  };

  const handleMinus = () => {
    const action = { type: "MINUS", amount: 1 };
    setValue((prevValue) => {
      return dispatch(action, prevValue);
    });
  };

  const [color, setColor] = useState("red");

  const greenbutton = () => {
    const action = { type: "CHANGE_COLOR", color: "green" };
    setColor((prevColor) => {
      return dispatch_color(action, prevColor);
    });
  };

  const bluebutton = () => {
    const action = { type: "CHANGE_COLOR", color: "blue" };
    setColor((prevColor) => {
      return dispatch_color(action, prevColor);
    });
  };

  const redbutton = () => {
    const action = { type: "CHANGE_COLOR", color: "red" };
    setColor((prevColor) => {
      return dispatch_color(action, prevColor);
    });
  };

  return (
    <div>
      <h2>Counter2</h2>
      <div style={{ backgroundColor: color, width: 50 }}>{value}</div>
      <hr />
      <button onClick={handlePlus}>증가</button>
      <button onClick={handleMinus}>감소</button>

      <hr />
      <button onClick={greenbutton}>색상변경:green</button>
      <button onClick={bluebutton}>색상변경:blue</button>
      <button onClick={redbutton}>색상변경:red</button>
    </div>
  );
}

export default Counter2;
