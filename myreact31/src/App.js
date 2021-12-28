import logo from "./logo.svg";
import "./App.css";
// import PageLotto from "./page/PageLotto";
import ProfileCard from "./ProfileCard";
import { useState } from "react";

function App() {
  const [pageName, setPageName] = useState("Joing");

  return (
    <>
      {pageName == "Joing" ? (
        <ProfileCard
          changePageName={setPageName}
          name="Joing"
          role="gksrmfdl Rowudy"
          facebook="aerin.facebook"
          email="rosyty2@naver.com"
          profileimage={`/profile-images/member1.jpg`}
        />
      ) : pageName == "DCODELAB" ? (
        <ProfileCard
          changePageName={setPageName}
          name="DCODELAB"
          role="gksrmfdms skdhwlf dksgspdy."
          facebook="arrrr.facebook"
          email="aaaa@naver.com"
          profileimage={`/profile-images/member2.jpg`}
        />
      ) : pageName == "DlLAB" ? (
        <ProfileCard
          changePageName={setPageName}
          name="DlLAB"
          role="gksrmfdms skdhwlf dksgspdy."
          facebook="arrrr.facebook"
          email="aaaa@naver.com"
          profileimage={`/profile-images/member3.jpg`}
        />
      ) : (
        <ProfileCard
          changePageName={setPageName}
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
