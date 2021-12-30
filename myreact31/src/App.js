import "./App.css";
// import PageLotto from "./page/PageLotto";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import profileList from "./profile_2.json";

function App() {
  const [pageNo, setPageNo] = useState("Joing");

  return (
    <>
      {profileList.map((profile, index) => {
        if (pageNo === profile.name)
          return (
            <div className={`member${(index % 4) + 1}`}>
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
