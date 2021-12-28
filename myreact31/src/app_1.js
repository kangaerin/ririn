function App() {
  const [pageName, setPageName] = useState("member1");
  const changePageName = (pageName) => {
    setPageName(pageName);
  };
  return (
    <>
      {/* <PageLotto /> */}
      {pageName === "member1" && (
        <ProfileCard
          changePageName={changePageName}
          profileImage={member1}
          name={"DCODELAB"}
          role={"UI/UX INTERACTIVE DEVELOPER"}
          facebookUrl={"Visit My Facebook page."}
          email={"hadaboni80@naver.com"}
        />
      )}
      {pageName === "member2" && (
        <ProfileCard
          changePageName={changePageName}
          profileImage={member2}
          name={"DCODELAB"}
          role={"UI/UX INTERACTIVE DEVELOPER"}
          facebookUrl={"Visit My Facebook page."}
          email={"hadaboni80@naver.com"}
        />
      )}
      {pageName === "member3" && (
        <ProfileCard
          changePageName={changePageName}
          profileImage={member3}
          name={"DCODELAB"}
          role={"UI/UX INTERACTIVE DEVELOPER"}
          facebookUrl={"Visit My Facebook page."}
          email={"hadaboni80@naver.com"}
        />
      )}
      {pageName === "member4" && (
        <ProfileCard
          changePageName={changePageName}
          profileImage={member4}
          name={"DCODELAB"}
          role={"UI/UX INTERACTIVE DEVELOPER"}
          facebookUrl={"Visit My Facebook page."}
          email={"hadaboni80@naver.com"}
        />
      )}
    </>
  );
}
export default App;
