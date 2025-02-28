import myImage from "../assets/project.jpg";
import MyNavLink from "./NavLink";
import Footer from "./Footer";

function AboutMe() {
  return (
    <>
      <MyNavLink />
      <div className="header">
        <div className="about__container">
          <div className="section something__about__me">
            <div className="about__contents">
              <div className="title__container">
                <h2 className="title">
                  Bassey <span>Oliver</span>
                </h2>
                <p className="title__description">
                  Web Designer | Web Developer
                </p>
              </div>
              <p className="about__paragraph">
                Hi, I’m Bassey Oliver, a front-end developer passionate about
                creating user-friendly web applications. My love for technology
                led me to explore the IT world, where I can combine creativity
                with problem-solving. I enjoy developing applications, exploring
                new ideas, and writing articles that help others navigate
                programming challenges.
              </p>
            </div>

            <div className="aboutme__image">
              <img src={myImage} alt="pics" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <div className="my__story">
        <div className="how_I_got">
          <div className="title__container">
            <h2 className="title">
              My <span>Story</span>
            </h2>
            <p className="title__description">How I Got Into Programming</p>
          </div>
          <p>
            My journey into web development didn’t start with a grand plan. It
            started with curiosity, wondering how websites worked and what made
            them look so polished and interactive. That curiosity turned into
            action when I wrote my first lines of code in school. It was nothing
            fancy, just a basic webpage. But seeing something I built actually
            come to life on the screen felt like magic. I realized programming
            wasn’t just about code; it was about creating, problem-solving, and
            bringing ideas to life. The moment that truly sealed my passion was
            when I teamed up with a few friends to build a real estate website.
            It wasn’t just about design or functionality. It was about working
            together, brainstorming ideas, solving bugs late into the night, and
            seeing the project slowly take shape. That experience taught me how
            much collaboration matters and how every small effort contributes to
            a bigger picture. Since then, web development has been more than a
            skill for me. It’s become a way to turn ideas into reality and
            connect with others through technology.
          </p>
        </div>
        <div className=" how_I_Approach">
          <div className="title__container">
            <h2 className="title">
              My <span>Methodology</span>
            </h2>
            <p className="title__description">How I Approach Tasks.</p>
          </div>
          <p>
            For me, smart work always outweighs hard work. The best solutions
            aren’t the ones buried under complexity but the ones that simplify
            the problem and get results. Every project starts with understanding
            the "why" behind it. I take time to explore potential challenges,
            break down requirements, and map out a clear path forward. When I
            write code, I focus on flexibility and reusability, ensuring it’s
            easy to maintain and scale as needs evolve. I believe good
            development isn’t just about delivering a product—it's about
            creating something that works seamlessly, stands the test of time,
            and truly serves its purpose.
          </p>
        </div>
        <div className=" my__lessons">
          <div className="title__container">
            <h2 className="title">
              My <span>Lessons</span>
            </h2>
            <p className="title__description">Key Lessons I Have Learned</p>
          </div>
          <p>
            Over time, I’ve picked up a few principles that have shaped the way
            I approach web development. These lessons haven’t just made me a
            better developer—they’ve made problem-solving more rewarding.
          </p>

          <div className="lesson__cards">
            <div className="card">
              <h4>Less is Better</h4>
              <p>
                In coding, more doesn’t mean better. Clean, efficient code
                always wins over complicated solutions. Whenever I build
                something, I aim to write as little code as possible while
                keeping it effective. Sometimes, taking a step back to think
                saves hours of unnecessary work.
              </p>
            </div>
            <div className="card">
              <h4> Keep Learning</h4>
              <p>
                It’s easy to get comfortable and stick to what you know. But the
                tech world moves fast, and staying curious is the only way to
                grow. I make time to explore new frameworks, read articles, and
                challenge myself with projects that push my limits.
              </p>
            </div>
            <div className="card">
              <h4>Share What You Know</h4>
              <p>
                Knowledge becomes more valuable when it's shared. I’ve found
                that writing articles, contributing to open-source projects, and
                helping others solve problems not only strengthens my skills but
                also connects me with a community that’s always learning
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;

/*
 Quotes Code is the brush, the browser is
                the canvas, and front-end development is the art of the modern
                web. "Behind every smooth, responsive website is a front-end
                developer balancing logic and creativity.

*/
/*
.about__container, .whatIDo__container, .project__container .header

*/
