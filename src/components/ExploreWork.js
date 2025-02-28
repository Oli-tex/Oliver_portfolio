import { Link } from "react-router-dom";
import project from "../assets/project.jpg";
import useIntersectionObserver from "./useIntersection";

function ExploreWork() {
  const { ref, isVisible } = useIntersectionObserver("explore", {
    root: null,
    rootMargin: "100px",
    threshold: 0.2,
  });

  const refVal = ref.current;
  console.log(refVal, isVisible);

  return (
    <div
      className={`project__container reveal ${isVisible ? "visible" : ""}`}
      ref={ref}
      id="project"
    >
      <div className="section project__section">
        <div className="project__content__container">
          <h3 className="title">My Projects</h3>
          <p className="title__description">Explore my works</p>
          <p className="title__content">
            I enjoy building open-source projects, creating web applications,
            and experimenting with ideas that solve real problems. It’s my way
            of contributing to the web development community while sharpening my
            skills. I work with modern technologies like HTML, CSS, JavaScript,
            and React, ensuring each project is responsive, accessible, and
            user-friendly. Whether it’s a simple experiment or a full-scale
            application, I focus on clean code and seamless functionality.
          </p>
          <Link to="/projects" class="cta-button home__btn">
            Explore Projects
          </Link>
        </div>
        <div className="myproject__image">
          <img src={project} alt="developer" />
        </div>
      </div>
    </div>
  );
}

export default ExploreWork;
