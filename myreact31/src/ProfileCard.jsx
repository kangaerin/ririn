import "./ProfileCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStickyNote,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function ProfileCard({ name, facebook, role, email }) {
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
          <img src={`/profile-images/member1.jpg`} alter="프로필이미지" />
          <h1>{name}</h1>
          <h2>{role}</h2>
          <a href="#" class="btnView">
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
          <a href="member1.html" class="on"></a>
        </nav>
      </section>
    </>
  );
}

export default ProfileCard;
