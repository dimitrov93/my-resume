import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The old good Pac-man game made only with Javascript',
    github: 'https://github.com/dimitrov93/Pac-Man/tree/main/v2',
    demo: 'https://dimitrov93.github.io/Pac-Man/v2/',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Recreating the Japanese shooting game made in 1978.',
    github: 'https://github.com/dimitrov93/SpaceInvaders',
    demo: 'https://fanciful-caramel-74944d.netlify.app/',
  },

  {
    id: 3,
    image: IMG3,
    title: 'E-commerce web application made with React',
    github: 'https://github.com/dimitrov93/xoxoStore',
    demo: 'https://xoxostore-7ef9a.web.app/',
  },

  {
    id: 4,
    image: IMG4,
    title: 'OfficeBoard application made with Angular',
    github: 'https://github.com/dimitrov93/OfficeBoard',
    demo: 'https://office-board.web.app/',
  },

  {
    id: 5,
    image: IMG5,
    title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, rem!',
    github: 'https://github.com',
    demo: 'https://github.com',
  },

  {
    id: 6,
    image: IMG6,
    title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, rem!',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
