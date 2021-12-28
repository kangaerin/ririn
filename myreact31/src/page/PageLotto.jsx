import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

function makeLottoNumbers() {
  //   randomvalue = [숫자1, 숫자2, 숫자3, 숫자4, 숫자5, 숫자6, 숫자7];

  const numberN = [];
  for (let i = 0; i < 7; i++) {
    let num = Math.floor(Math.random() * 44) + 1;

    for (const j in numberN) {
      if (num == numberN[j]) {
        num = Math.floor(Math.random() * 44) + 1;
      }
    }
    numberN.push(num);
  }
  numberN.sort(function (a, b) {
    return a - b;
  });

  return numberN;
}

function PageLotto() {
  const [numbers, SetNumbers] = useState([10, 11, 12, 13, 14, 15, 16, 17]);
  const handleClick = () => {
    SetNumbers(makeLottoNumbers());
    console.log("chlicked");
  };
  return (
    <>
      <h2>Lotto</h2>

      <button onClick={handleClick}>예지</button>
      <div>
        <>
          {numbers.map((number) => (
            <div
              style={{
                display: "inline-block",
                width: "100px",
                height: "100px",
                margin: "20px",
                backgroundColor: "skyblue",
                textAlign: "center",
                borderRadius: "50%",
                lineHeight: "100px",
              }}
            >
              {number}
            </div>
          ))}
        </>
      </div>
    </>
  );
}

export default PageLotto;
