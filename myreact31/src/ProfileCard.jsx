import "./ProfileCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStickyNote,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function ProfileCard({ name, facebook, role, email, profileimage, setPageNo }) {
  return (
    <>
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
          <img src={profileimage} alter="프로필이미지" />
          <h1>{name}</h1>
          <h2>{role}</h2>
          <a href="#" className="btnView">
            VIEW MORE
          </a>
        </article>
        <ul>
          <FontAwesomeIcon icon={faFacebook} />
          <span style={{ margin: "10px" }}>{facebook}</span>
          <ul></ul>
          <FontAwesomeIcon icon={faEnvelope} />
          <span style={{ margin: "10px" }}>{email}</span>
        </ul>
        <nav className="others">
          // 
          <a onClick={() => setPageNo("Joing")}></a>
          <a onClick={() => setPageNo("DCODELAB")}></a>
          <a onClick={() => setPageNo("DlLAB")}></a>
          <a onClick={() => setPageNo("asdgdg")}></a>
        </nav>
      </section>
    </>
  );
}

export default ProfileCard;
