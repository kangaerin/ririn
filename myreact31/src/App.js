import logo from "./logo.svg";
import "./App.css";
// import PageLotto from "./page/PageLotto";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import profileList from "./profile_2.json";

function App() {
  const [pageNo, setPageNo] = useState("Joing");

  return (
    <>
      {profileList.map((profile) => {
        if (pageNo === profile.name)
          return (
            <ProfileCard
              name={profile.name}
              role={profile.role}
              facebook={profile.facebook}
              email={profile.email}
              profileimage={profile.profileimage}
              setPageNo={setPageNo}
            />
          );
      })}
      )
    </>
  );

  // return <PageLotto />;
}

export default App;
