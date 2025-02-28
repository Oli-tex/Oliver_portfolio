import globe from "../assets/globe.png";
import pen from "../assets/pen-tool.png";
import code from "../assets/code.png";
import useIntersectionObserver from "./useIntersection";

function WhatIDo() {
  const { ref, isVisible } = useIntersectionObserver("projects", {
    root: null,
    rootMargin: "100px",
    threshold: 0.2,
  });

  const refVal = ref.current;
  console.log(refVal, isVisible);

  return (
    <div
      className={`whatIDo__container reveal ${isVisible ? "visible" : ""}`}
      ref={ref}
      id="services"
    >
      <div className="section what__i__do">
        <div className="title__container whatIDo__services__container">
          <h2 className="title">What I Do</h2>
          <p className="title__description">Here are the services I offer.</p>
          <p className="title__content">
            From understanding your needs to designing a clear blueprint and
            delivering a functional, user-friendly website, I handle every step
            of the process. My focus is on turning ideas into clean, responsive,
            and visually appealing digital products that meet your goals.
          </p>
        </div>
        <div className="card__container">
          <div className="card">
            <img src={code} alt="icon" loading="lazy" />
            <h4>Web Development</h4>
            <p>
              Turning designs into fully functional websites is where the real
              magic happens. I build clean, efficient code using modern
              technologies to deliver fast, responsive, and user-friendly web
              experiences.
            </p>
          </div>
          <div className="card">
            <img src={globe} alt="icon" loading="lazy" />
            <h4>Web Design</h4>
            <p>
              Great web design is more than aesthetics. It's about creating a
              layout that guides users effortlessly. I design responsive,
              visually appealing websites that balance form and function,
              ensuring a smooth user journey.
            </p>
          </div>
          <div className="card">
            <img src={pen} alt="icon" loading="lazy" />
            <h4>Graphics Design</h4>
            <p>
              Good design isn’t just about looks but about how easily users can
              navigate and interact with a product. I focus on creating simple,
              intuitive interfaces that make the user experience smooth while
              keeping your message clear and impactful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
