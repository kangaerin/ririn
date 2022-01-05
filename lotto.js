function makeLottoNumbers() {
  //   randomvalue = [숫자1, 숫자2, 숫자3, 숫자4, 숫자5, 숫자6, 숫자7];

  const numberN = [];
  for (i = 0; i < 7; i++) {
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

console.log(makeLottoNumbers());
