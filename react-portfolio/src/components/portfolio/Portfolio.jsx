import React, { useEffect, useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";


import * as portfolioService from "../../services/portfolioService";

import { AiOutlineFileAdd } from "react-icons/ai";
import { useAuthContext } from "../../context/AuthContext";
import {useNavigate, Link } from "react-router-dom";
import PortfolioItem from "./Item/PortfolioItem";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "The old good Pac-man game made only with Javascript",
    github: "https://github.com/dimitrov93/Pac-Man/tree/main/v2",
    demo: "https://dimitrov93.github.io/Pac-Man/v2/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Recreating the Japanese shooting game made in 1978.",
    github: "https://github.com/dimitrov93/SpaceInvaders",
    demo: "https://fanciful-caramel-74944d.netlify.app/",
  },

  {
    id: 3,
    image: IMG3,
    title: "E-commerce web application made with React",
    github: "https://github.com/dimitrov93/xoxoStore",
    demo: "https://xoxostore-7ef9a.web.app/",
  },

  {
    id: 4,
    image: IMG4,
    title: "OfficeBoard application made with Angular",
    github: "https://github.com/dimitrov93/OfficeBoard",
    demo: "https://office-board.web.app/",
  },
];

const Portfolio = () => {
  const [portFolio, setPortFolio] = useState([])
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useAuthContext();

  const [values, setValues] = useState({
    id: "",
    name: "",
    description: "",
    title: "",
  });

  useEffect(() => {
    portfolioService.getAll()
      .then(result => {
        setPortFolio(result)
      })
  
  }, [])
  
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="editBtn">
        {user.email ? (
          <>
            <Link to={"portfolio/add"}>
              <button type="button" className="headerEditBtn">
                <AiOutlineFileAdd />
              </button>
            </Link>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="container portfolio__container">
          
        {portFolio.map(x => <PortfolioItem key={x._id} item={x} />)}  

      </div>
    </section>
  );
};

export default Portfolio;
