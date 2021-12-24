import Counter from 'components/Counter';

function PageCounter() {
  return (
    <>
      <h2>Counter</h2>
      <Counter initial={10} color={'red'} />
      <Counter initial={10} color={'green'} />
      <Counter initial={10} color={'blue'} />
    </>
  );
}

export default PageCounter;
