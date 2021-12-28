function ProfileCard({
  changePageName,
  profileImage,
  name,
  role,
  facebookUrl,
  email,
}) {
  return (
    <div>
      <section>
        <nav className="menu">
          <a href="#">
            <FontAwesomeIcon icon={faBars} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faStickyNote} />
          </a>
        </nav>
        <article className="profile">
          <img src={profileImage} alt="프로필 이미지" />
          <h1>{name}</h1>
          <h2>{role}</h2>
          <a href="#" className="btnView">
            VIEW MORE
          </a>
        </article>
        <ul className="contact">
          <li>
            {/* <i className="fab fa-facebook-f"></i> */}
            <FontAwesomeIcon icon={faFacebook} />
            <span style={{ margin: "10px" }}>{facebookUrl}</span>
          </li>
          <li>
            {/* <i className="fas fa-envelope"></i> */}
            <FontAwesomeIcon icon={faEnvelope} />
            <span style={{ margin: "10px" }}>{email}</span>
          </li>
        </ul>
        <nav className="others">
          {/* <a href="member1.html" className="on"></a>
            <a href="member2.html"></a>
            <a href="member3.html"></a>
            <a href="member4.html"></a> */}
          <a onClick={() => changePageName("member1")}></a>
          <a onClick={() => changePageName("member2")}></a>
          <a onClick={() => changePageName("member3")}></a>
          <a onClick={() => changePageName("member4")}></a>
        </nav>
      </section>
    </div>
  );
}
export default ProfileCard;
