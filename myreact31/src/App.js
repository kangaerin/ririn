import logo from "./logo.svg";
import "./App.css";
// import PageLotto from "./page/PageLotto";
import ProfileCard from "./ProfileCard";
import { useState } from "react";

function App() {
  const [pageNo, setPageNo] = useState("Joing");

  return (
    <>
      {pageNo == "Joing" ? (
        <ProfileCard
          changePageName={setPageNo}
          name="Joing"
          role="gksrmfdl Rowudy"
          facebook="aerin.facebook"
          email="rosyty2@naver.com"
          profileimage={`/profile-images/member1.jpg`}
        />
      ) : pageNo == "DCODELAB" ? (
        <ProfileCard
          changePageName={setPageNo}
          name="DCODELAB"
          role="gksrmfdms skdhwlf dksgspdy."
          facebook="arrrr.facebook"
          email="aaaa@naver.com"
          profileimage={`/profile-images/member2.jpg`}
        />
      ) : pageNo == "DlLAB" ? (
        <ProfileCard
          changePageName={setPageNo}
          name="DlLAB"
          role="gksrmfdms skdhwlf dksgspdy."
          facebook="arrrr.facebook"
          email="aaaa@naver.com"
          profileimage={`/profile-images/member3.jpg`}
        />
      ) : (
        <ProfileCard
          changePageName={setPageNo}
          name="asdgdg"
          role="gksrmfdms skdhwlf dksgspdy."
          facebook="arrrr.facebook"
          email="aaaa@naver.com"
          profileimage={`/profile-images/member4.jpg`}
        />
      )}
    </>
  );

  // return <PageLotto />;
}

export default App;
