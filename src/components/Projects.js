import roi from "../assets/roi.png";
import tictac from "../assets/tictac.png";
import travel from "../assets/travel.png";
import world from "../assets/world.png";
import eat from "../assets/eat.png";
import bankist from "../assets/bankist.png";
import quiz from "../assets/quiz.png";
import pop from "../assets/pop.png";

import MyNavLink from "./NavLink";
import Footer from "./Footer";

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
function Projects() {
  return (
    <>
      <MyNavLink />
      <div className="section">
        <div className="project__title__container">
          <div className="title__container">
            <h2 className="title">
              My <span>Projects</span>
            </h2>
            <p className="title__description">
              Explore Some of my best projects.
            </p>
          </div>
          <p>
            In my free time, I enjoy building applications that solve everyday
            challenges or bring ideas to life. Whether it’s a tool to streamline
            a task or a creative experiment, each project pushes me to think
            differently and improve my skills. I also believe development
            thrives on collaboration. That’s why I share my work with the web
            development community, publishing open-source projects that others
            can learn from, build on, or refine. It’s my way of giving back
            while growing alongside fellow developers.
          </p>
        </div>
        <section className="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            {/* <!-- Project 1 --> */}
            <div className="project-card">
              <a
                href="https://roisworldrealestate.netlify.app/"
                target="_blank"
              >
                <img src={roi} alt="ROI’s World Real Estate" loading="lazy" />
                <div className="project-info">
                  <h3>ROI’s World – Real Estate Website</h3>
                  <p>
                    A high-performance real estate site with dark mode,
                    interactive maps, and mobile-first design.
                  </p>
                </div>
              </a>
            </div>

            {/* <!-- Project 2 --> */}
            <div className="project-card">
              <a
                href="https://github.com/Oli-tex/Bankist-app-Jonas-course"
                target="_blank"
              >
                <img src={bankist} alt="Bankist App" loading="lazy" />
                <div className="project-info">
                  <h3>Bankist – Banking Web App</h3>
                  <p>
                    A demo banking app with login authentication, transactions,
                    and real-time balance tracking.
                  </p>
                </div>
              </a>
            </div>

            {/* <!-- Project 3 --> */}
            <div className="project-card">
              <a
                href="https://github.com/Oli-tex/Worldwise-app-jonas-course"
                target="_blank"
              >
                <img src={world} alt="Worldwise App" loading="lazy" />
                <div className="project-info">
                  <h3>Worldwise – Travel Tracking App</h3>
                  <p>
                    An SPA that allows users to log and track their travel
                    experiences in real-time.
                  </p>
                </div>
              </a>
            </div>

            {/* <!-- Project 4 --> */}
            <div className="project-card">
              <a
                href="https://github.com/Oli-tex/usepopcorn-project-Jonas-course"
                target="_blank"
              >
                <img src={pop} alt="UsePopcorn" loading="lazy" />
                <div className="project-info">
                  <h3>UsePopcorn – Movie Search & Review</h3>
                  <p>
                    A movie discovery app where users can search, rate, and save
                    their favorite films.
                  </p>
                </div>
              </a>
            </div>

            {/* <!-- Project 5 --> */}
            <div className="project-card">
              <a href="https://github.com/Oli-tex/myReactquiz" target="_blank">
                <img src={quiz} alt="React Quiz" loading="lazy" />
                <div className="project-info">
                  <h3>React Quiz – Interactive Quiz App</h3>
                  <p>
                    A quiz platform that fetches React questions from an API and
                    tracks user progress.
                  </p>
                </div>
              </a>
            </div>

            {/* <!-- Project 6 --> */}
            <div className="project-card">
              <a href="https://github.com/Oli-tex/TICTACTOE" target="_blank">
                <img src={tictac} alt="React Quiz" loading="lazy" />
                <div className="project-info">
                  <h3>Tic-Tac-Toe Game App</h3>
                  <p>
                    A web application that implements the functionalities of a
                    players turns, correct moves, game board, and winning logic.
                  </p>
                </div>
              </a>
            </div>

            {/* <!-- Project 7 --> */}
            <div className="project-card">
              <a href="https://github.com/Oli-tex/eat-n-split" target="_blank">
                <img src={eat} alt="EatNSplit" loading="lazy" />
                <div className="project-info">
                  <h3>EatNSplit – Bill Splitting App</h3>
                  <p>
                    An app that helps groups easily split bills and track
                    expenses.
                  </p>
                </div>
              </a>
            </div>

            {/* <!-- Project 8 --> */}
            <div className="project-card">
              <a href="https://github.com/Oli-tex/travel-list" target="_blank">
                <img src={travel} alt="Travel List" loading="lazy" />
                <div className="project-info">
                  <h3>Travel List – Smart Packing Checklist</h3>
                  <p>
                    A web app that helps travelers organize and manage their
                    packing lists efficiently.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
