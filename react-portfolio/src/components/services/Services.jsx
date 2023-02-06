import React from "react";
import "./services.css";
import { BsCheckCircle } from "react-icons/bs";

const Services = () => {
  return <section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>

        <div className="service__list">
          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          {/* END OF FIRST */}
        </div>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>

        <div className="service__list">
          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          {/* END OF FIRST */}
        </div>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>

        <div className="service__list">
          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <BsCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>

          {/* END OF FIRST */}
        </div>
      </article>
    </div>
  </section>;
};

export default Services;
