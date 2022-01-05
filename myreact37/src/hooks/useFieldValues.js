import { useState } from 'react';

function useFieldValues(initialFieldValues) {
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  const clearFieldValues = () => setFieldValues(initialFieldValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 함수 안쓰고, 값 지정
    // name: = "name": <-이라 배열이 아닌 [name]:으로 사용 계산된 속성
    // setter에 값 지정
    // setFieldValues({
    //   ...fieldValues,
    //   [name]: value,
    // });

    // setter에 함수 지정
    setFieldValues((prevFieldValues) => {
      return {
        ...prevFieldValues,
        [name]: value,
      };
    });
  };

  // TODO
  return [fieldValues, handleChange, clearFieldValues];
}

export default useFieldValues;
