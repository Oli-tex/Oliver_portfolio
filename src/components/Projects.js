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
      <div className="myproject__section">
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
              challenges or bring ideas to life. Whether it’s a tool to
              streamline a task or a creative experiment, each project pushes me
              to think differently and improve my skills. I also believe
              development thrives on collaboration. That’s why I share my work
              with the web development community, publishing open-source
              projects that others can learn from, build on, or refine. It’s my
              way of giving back while growing alongside fellow developers.
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
                      This is a modern, high-performance real estate website to
                      make property searches seamless. It’s fully hand-coded,
                      responsive on all devices, and packed with features like
                      dark mode, an interactive map for real-time listings, and
                      fast load speeds for a smooth experience. Plus, it’s
                      optimized for SEO. Built with HTML5, CSS3, and JavaScript.
                    </p>
                    {/* <p>
                    A high-performance real estate site with dark mode,
                    interactive maps, and mobile-first design.
                  </p> */}
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
                      Bankist is a demo banking app that simulates real-world
                      banking operations, making it easy to manage finances.
                      Users can log in securely, deposit, withdraw, transfer
                      funds, and even close accounts. It also has auto-logout
                      for security and real-time balance tracking. Built with
                      HTML5, CSS3, and JavaScript.
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
                      Worldwise is a dynamic Single Page Application (SPA) that
                      helps travelers track and document their adventures in
                      real time. With an interactive map, users can pin
                      locations, add notes, and relive their trips. It features
                      secure login, seamless navigation with React Router, and a
                      smooth, app-like experience. Built with React.js, CSS
                      Modules, and React Router.
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
                      UsePopcorn is a movie discovery app that makes finding and
                      tracking films effortless. Users can search for movies,
                      save watched titles, and leave ratings or reviews. It
                      pulls real-time data from an external API and features a
                      clean, modern UI for a smooth experience. Built with
                      React.js and styled using CSS Modules.
                    </p>
                  </div>
                </a>
              </div>

              {/* <!-- Project 5 --> */}
              <div className="project-card">
                <a
                  href="https://github.com/Oli-tex/myReactquiz"
                  target="_blank"
                >
                  <img src={quiz} alt="React Quiz" loading="lazy" />
                  <div className="project-info">
                    <h3>React Quiz – Interactive Quiz App</h3>
                    <p>
                      This is an interactive quiz app to help users test and
                      sharpen their React skills. It dynamically fetches
                      questions from a custom API, tracks scores in real-time,
                      and includes a countdown timer that auto-submits when
                      time’s up. Smooth state management ensures progress isn’t
                      lost. Designed with React.js and styled using CSS Modules.
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
                      This web app simulates a complete gaming experience with
                      player turns, valid move validation, and dynamic game
                      board updates. It features built-in winning logic that
                      instantly detects victories, ensuring fair play. With
                      real-time state management, every move feels smooth and
                      interactive, making gameplay engaging.
                    </p>
                  </div>
                </a>
              </div>

              {/* <!-- Project 7 --> */}
              <div className="project-card">
                <a
                  href="https://github.com/Oli-tex/eat-n-split"
                  target="_blank"
                >
                  <img src={eat} alt="EatNSplit" loading="lazy" />
                  <div className="project-info">
                    <h3>EatNSplit – Bill Splitting App</h3>
                    <p>
                      An easy way to split expenses among friends, roommates, or
                      coworkers without the hassle. Easily manage who’s
                      contributing and who owes what, with automatic bill
                      calculation that instantly divides expenses based on user
                      input. The app is smooth, responsive, and works
                      effortlessly on any device for a seamless experience.{" "}
                      <br />
                      Tech stack: React.js, CSS Modules
                    </p>
                  </div>
                </a>
              </div>

              {/* <!-- Project 8 --> */}
              <div className="project-card">
                <a
                  href="https://github.com/Oli-tex/travel-list"
                  target="_blank"
                >
                  <img src={travel} alt="Travel List" loading="lazy" />
                  <div className="project-info">
                    <h3>Travel List – Smart Packing Checklist</h3>
                    <p>
                      A simple yet effective web app that helps travelers stay
                      organized by creating and managing packing lists with
                      ease. Users can add, remove, and edit items, sort and
                      filter essentials, and save their lists with local storage
                      to avoid losing progress. Lightweight, clutter-free, and
                      built for convenience on any device. Tech stack: React.js,
                      CSS Modules
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
