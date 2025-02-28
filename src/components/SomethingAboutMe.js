import { Link } from "react-router-dom";
import AboutImg from "../assets/about.png";

import useIntersectionObserver from "./useIntersection";

function SomethingAboutMe() {
  const { ref, isVisible } = useIntersectionObserver("about", {
    root: null,
    rootMargin: "100px",
    threshold: 0.2,
  });

  const refVal = ref.current;
  console.log(refVal, isVisible);

  return (
    <div
      className={`about__container reveal ${isVisible ? "visible" : ""}`}
      ref={ref}
      id="about"
    >
      <div className="section something__about__me ">
        <div className="aboutme__image">
          <img src={AboutImg} alt="pics" loading="lazy" />
        </div>
        <div className="about__contents">
          <div className="title__container">
            <h2 className="title">
              About <span>Me</span>
            </h2>
            <p className="title__description">
              Here is a little thing to know about me.
            </p>
          </div>
          <p className="about__paragraph">
            I've always been fascinated by how technology can solve real-world
            problems and turn ideas into functional, visually appealing
            products. That passion led me to expand my skill set beyond civil
            engineering and dive into front-end development. Now, I combine
            problem-solving with design to build responsive, user-friendly
            websites. For me, coding is more than just writing lines of logic.
            it's about creating seamless experiences that make life and work
            easier. The only real limit? Your imagination.
          </p>
          <Link to="/about" class="cta-button home__btn">
            Read My Story
          </Link>
          {/* <button class="cta-button">Read My Story</button> */}
        </div>
      </div>
    </div>
  );
}

export default SomethingAboutMe;
