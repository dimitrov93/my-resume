import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVT1,
    name: "Ts Dimitrov",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci amet culpa maxime nesciunt necessitatibus!",
  },

  {
    avatar: AVT2,
    name: "Ts Dimitrov",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci amet culpa maxime nesciunt necessitatibus!",
  },

  {
    avatar: AVT3,
    name: "Ts Dimitrov",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci amet culpa maxime nesciunt necessitatibus!",
  },

  {
    avatar: AVT4,
    name: "Ts Dimitrov",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci amet culpa maxime nesciunt necessitatibus!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
          {
            data.map(({avatar,name, review}, index) => {
              return (
                <article key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </article>
              )
            })
          }
      </div>

    </section>
  );
};

export default Testimonials;
