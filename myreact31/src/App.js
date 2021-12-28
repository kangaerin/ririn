import logo from "./logo.svg";
import "./App.css";
// import PageLotto from "./page/PageLotto";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <ProfileCard
      name={"Joing"}
      role={"gksrmfdl Rowudy"}
      facebook={"aerin.facebook"}
      email={"rosyty2@naver.com"}
      profileimage={`/profile-images/member1.jpg`}
    />
  );

  // return <PageLotto />;
}

export default App;
