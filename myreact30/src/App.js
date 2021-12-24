import { useState } from 'react';
import PageAbout from 'pages/PageAbout';
import PageCounter from 'pages/PageCounter';
import TopNav from 'components/TopNav';

function App() {
  const [pageName, setPageName] = useState('about');

  // const changePageName = (pageNmae) => {
  //   setPageName(pageName);
  // };

  return (
    // opacity : 기본값 1. 0으로 하면 안보임.
    // desplay: 'none'으로 해도 안보임.
    <div style={{ opacity: 1 }}>
      <h1>애린의 리액트</h1>
      {/* <button onClick={() => setPageName()}>페이지 토글</button> */}
      <TopNav changePageName={setPageName} />
      {pageName === 'about' && <PageAbout />}
      {pageName === 'counter' && <PageCounter />}
    </div>
  );
}

export default App;
