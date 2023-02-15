import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import "./portfolio.css";
import * as portfolioService from "../../services/portfolioService";

import { useAuthContext } from "../../context/AuthContext";
import PortfolioItem from "./Item/PortfolioItem";

const Portfolio = () => {
  const [portFolio, setPortFolio] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    portfolioService.getAll().then((result) => {
      setPortFolio(result);
    });
  }, []);

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
        {portFolio.map((x) => (
          <PortfolioItem key={x._id} item={x} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
