import React from "react";
import "./services.css";
import { BsCheckCircle } from "react-icons/bs";

const Services = () => {
  return <section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      
      {/* Sales */}
      <article className="service">
        <div className="service__head">
          <h3>Sales</h3>
        </div>

        <div className="service__list">
          <li>
            <BsCheckCircle className="service__list-icon" />
            <p className="tooltip-on-hover">Product knowledge</p>
            <div className="tooltip" >This is the tooltip</div>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Customer engagement</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Sales strategies</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Presentation skills</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Negotiation skills</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Customer service</p>
          </li>

          {/* END OF FIRST */}
        </div>
      </article>

      {/* Full-stack developer */}
      <article className="service"> 
        <div className="service__head">
          <h3>Front-end Development</h3>
        </div>

        <div className="service__list">
          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Technical proficiency</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Responsiveness</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Web accessibility</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Testing and debugging</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Cross-functional collaboration</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Database management</p>
          </li>

          {/* END OF FIRST */}
        </div>
      </article>

      {/* Team Lead */}
      <article className="service">
        <div className="service__head">
          <h3>Team Management</h3>
        </div>

        <div className="service__list">
          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Leadership</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Communication</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Motivation</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Problem-solving</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Technical expertise</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Performance management</p>
          </li>


          {/* Team Lead */}
        </div>
      </article>


    </div>
  </section>;
};

export default Services;
