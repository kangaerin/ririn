import lotto_number from 'components/lotto_number';
import makeLotto from 'App';

function Pagelotto() {
  return (
    <div>
      <h2>Lotto</h2>
      <button onClick={makeLotto}>예지</button>
    </div>
  );
}

export default Pagelotto;
