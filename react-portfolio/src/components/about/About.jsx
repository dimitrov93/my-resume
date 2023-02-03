import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ months Team lead</small> <br/>
              <small>5+ year Sales/Support</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Currently working at</h5>
              <small>Montway Auto Transport</small>
            </article>

            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>2+ Complited projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            illo magni iste nemo iure exercitationem fugit ratione, veritatis
            facere quo cumque provident alias similique ex deleniti sapiente
            incidunt ea odit commodi! Quos expedita odio explicabo enim aut
            perferendis repellendus blanditiis sed repudiandae, sint illum
            veritatis veniam rerum iste reprehenderit recusandae eveniet, ad
            dolore. Nobis necessitatibus quae repellat nam fugit, nisi labore
            eum ut delectus laudantium voluptates beatae recusandae nemo rem
            dolorum. Ipsum dolores quis culpa, fugiat cum fugit possimus,
            beatae, nobis expedita nostrum nulla dignissimos reiciendis officia.
            Natus veniam et doloribus ipsum, amet quas deleniti eius quae
            numquam? Maiores, porro.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
