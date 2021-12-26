import React, { useEffect, useState } from 'react';
import PageAbout from 'pages/PageAbout';
import PageCounter from 'pages/PageCounter';
import Pagelotto from 'pages/Pagelotto';
import Pageplaylist from 'pages/Pageplaylist';
import TopNav from 'components/TopNav';

function App() {
  const [lotto, setLotto] = useState([]);

  function makeLotto() {
    let i = 0;
    let lnumber = [];
    let rnumber = 0;

    for (i = 0; i < 6; i++) {
      rnumber = Math.floor(Math.random() * 45 + 1);
      lnumber.push(rnumber);
    }
    setLotto(lnumber);
  }

  useEffect(() => {
    makeLotto();
  }, []);

  const [pageName, setPageName] = useState('about');

  return (
    <>
      <h1>rr의 리액트</h1>
      <TopNav changePageName={setPageName} />
      {pageName === 'about' && <PageAbout />}
      {pageName === 'counter' && <PageCounter />}
      {pageName === 'lotto' && <Pagelotto />}
      {pageName === 'playlist' && <Pageplaylist />}
    </>
  );
}

export default App;
