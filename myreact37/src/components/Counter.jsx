import './Counter.css';
const { useState, useReducer } = require('react');

//   const handlePlus1 = () => {
//     setValue((prevalue) => prevalue + 1);
//   };

// reducer
const ACTION_TYPES = {
  INCREASE: 'INCREASE',
};

function reducer(preState, action) {
  const { type, amount } = action;
  if (type === 'COUNT') {
    return preState + amount;
  }
  return preState;
}

function Reducer(preState, action) {
  const [value, dispatch] = useReducer(reducer, 0);
  const handleClick = () => {
    dispatch({ type: ACTION_TYPES.INCREASE });
  };
}

function Counter() {
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);
  };

  const handleMinus = () => {
    setValue(value - 1);
  };

  return (
    <div className="counter" style={{ backgroundColor: 'skyblue' }}>
      {value}
      <ul>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </ul>
    </div>
  );
}

export default Counter;
