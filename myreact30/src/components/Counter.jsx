import { useState } from 'react';

function Counter({ initial, color }) {
  // 속성값을 초기값으로 참조하여 상태값 value를 생성
  const [value, setValue] = useState(initial);

  const handleClick = () => {
    setValue(value + 1);
  };

  const handleContextMeun = (e) => {
    // context menu의 기본동작을 막습니다.
    e.preventDefault();
    setValue(value - 1);
  };

  return (
    <div
      // 숫자를 누르면 드래그 블럭 체크가 되는걸 안되게 막음.
      style={{ ...style, backgroundColor: color }}
      onClick={handleClick}
      onContextMenu={handleContextMeun}
    >
      {value}
    </div>
  );
}

// 컴포넌트의 고정된 스타일을 지정할 때 사용
const style = {
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  lineHeight: '100px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: '3rem',
  margin: '1rem',
  userSelect: 'none',
};

export default Counter;
