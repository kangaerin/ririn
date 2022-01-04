import { useState } from 'react';
import Circle from './Circle';
import { zip, get_random_lotto_numbers, shuffle_array } from './utils';

const INITIAL_STATE = {
  numbers: [0, 0, 0, 0, 0, 0, 0],
  colors: [
    '#1B62BF',
    '#1755A6',
    '#37A647',
    '#F29F05',
    '#F23838',
    'purple',
    'pink',
  ],
};

function SevenNumbers1({ title }) {
  const [state, setState] = useState(INITIAL_STATE);

  const generateNumbers = () => {
    setState((prevState) => ({
      ...prevState,
      numbers: get_random_lotto_numbers(),
    }));
  };
  const shuffleNumbers = () => {
    setState((prevState) => ({
      ...prevState,
      numbers: shuffle_array(prevState.numbers),
    }));
  };
  const shuffleColors = () => {
    setState((prevState) => ({
      ...prevState,
      colors: shuffle_array(prevState.colors),
    }));
  };

  const changeCircleColor = (circleIndex) => {
    setState((prevState) => ({
      ...prevState,
      colors: prevState.colors.map((color, index) => {
        if (index === circleIndex) {
          return `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
        } else return color;
      }),
    }));
  };

  const removeCircle = (circleIndex) => {
    setState((prevState) => ({
      ...prevState,
      colors: prevState.colors.filter((color, index) => index !== circleIndex),
      numbers: prevState.numbers.filter(
        (number, index) => index !== circleIndex,
      ),
    }));
  };

  return (
    <div>
      {title && <h2>{title}</h2>}
      {zip(state.numbers, state.colors).map(([number, color], index) => (
        <Circle
          number={number}
          backgroundColor={color}
          onClick={() => changeCircleColor(index)}
          onContextMenu={(e) => e.preventDefault() & removeCircle(index)}
        />
      ))}
      <hr />
      <button onClick={generateNumbers}>GENERATE_NUMBERS</button>
      <button onClick={shuffleNumbers}>SHUFFLE_NUMBERS</button>
      <button onClick={shuffleColors}>SHUFFLE_COLORS</button>
    </div>
  );
}

export default SevenNumbers1;
