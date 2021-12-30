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
            <div className={profile.id}>
              <ProfileCard
                name={profile.name}
                role={profile.role}
                facebook={profile.facebook}
                email={profile.email}
                profileimage={profile.profileimage}
                setPageNo={setPageNo}
              />
            </div>
          );
      })}
      )
    </>
  );

  // return <PageLotto />;
}

export default App;
