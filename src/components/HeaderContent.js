import { Link } from "react-router-dom";
import about from "../assets/about.png";

function HeaderContent() {
  return (
    <div class="header-content" id="home">
      <div class="text-content">
        <p className="greetings">Hi, I am</p>
        <h1>Bassey Oliver</h1>
        <h2>Front-End Developer</h2>
        <p class="description">
          I am passionate about building responsive, user-friendly websites. I
          specialize in turning ideas into functional, visually appealing
          digital products using HTML, CSS, JavaScript, and React. My focus is
          on clean code, seamless user experience, and performance-driven
          design.
        </p>
        <Link to="/projects" class="cta-button home__btn">
          Explore My Work
        </Link>
      </div>

      <div class="image-content">
        <img src={about} alt="Bassey Oliver" loading="lazy" />
      </div>
    </div>
  );
}

export default HeaderContent;
