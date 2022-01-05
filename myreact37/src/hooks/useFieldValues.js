import { useState } from 'react';

function useFieldValues() {
  const [fieldValues, setfieldValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 함수 안쓰고, 값 지정
    // name: = "name": <-이라 배열이 아닌 [name]:으로 사용 계산된 속성
    setfieldValues({
      ...fieldValues,
      [name]: value,
    });
  };

  // TODO
  return [fieldValues, handleChange];
}

export default useFieldValues;
