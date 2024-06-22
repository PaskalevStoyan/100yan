import React from "react";
import "./showcase.css";

import { cardsInfo } from "../../utils";

const RightArrow = () => {
  return <span className="arrow-right"></span>;
};
export const Showcase = (props: any) => {
  const [cards, setCards] = React.useState(cardsInfo);

  const onCardClick = (event: any) => {
    console.log(event);
  };
  return (
    <div className="showcase">
      <div className="showcase-introduction">
        <h2 className="showcase-mid-headings">Hello Wanderer!</h2>
        <h1 className=" typewriter typing-demo showcase-big-heading">
          My name is{" "}
          <span className="name-text">
            <span className="name text-highlight">Stoyan</span>
            <span className=" name text-highlight surname">Paskalev.</span>
          </span>
        </h1>
        <p className="showcase-paragraph paragraph">
          Welcome to my adventures in the Website building World!
        </p>
      </div>

      <div className="showcase-about-me">
        <div className="cards-container">
          <div className="cards-wrapper">
            {cards.map((card) => (
              <div
                key={card.title}
                onClick={onCardClick}
                className={`card-item ${card.selected ? "selected-card" : ""}`}
              >
                <div className="card-heading">
                  <h2>{card.title}  {card.selected ? null : <RightArrow />}</h2>
                 
                </div>
                <div className="card-paragraph">
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 *  I am a Full Stack Developer with a passion for building
                beautiful and functional websites. I am a lifelong learner and
                enjoy working with new technologies.
 */
