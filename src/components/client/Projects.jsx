import React, { useState } from "react";
import CardProject from "./CardProject";
import CardInformation from "./CardInformation";
import gta from "/assets/gta.png";
import petshouse from "/assets/petshouse.png";
import MobileApp from "/assets/MobileApp.png";
import Styles from "../../styles/projects.module.css";

const Projects = () => {
  const cardData = [
    {
      imageSrc: MobileApp,
      title: "Mobile App for Shopify",
      subtitle: "Technologies used",
      paragraph:
        "Shopify Mobile App using React Native for seamless store management on-the-go. Monitor sales, fulfill orders, update products and manage customers from anywhere, anytime.",
      listItems: ["React Native", "Redux"],
    },
    {
      imageSrc: petshouse,
      title: "Pet's house Web app",
      subtitle: "Technologies used",
      paragraph:
        "Welcome to the Pet House, your one-stop destination for dog refuge and adoption. Our mission is to provide a loving and safe environment for dogs in need, while connecting them with their forever families. On our website, you will find a variety of dogs available for adoption, each with their unique personality and backstory. Our adoption process is simple and straightforward, designed to match the right dog with the right family.",
      listItems: ["React Native", "Redux"],
    },
    {
      imageSrc: gta,
      title: "Monique GTA",
      subtitle: "Technologies used",
      paragraph:
        "a thrilling game where you play as Monique, a tech-savvy hero, fighting against the evil Java programming language. Engage in intense battles, use your coding skills to outsmart Java, and emerge victorious. Join the fight and experience the ultimate showdown between good and evil in the world of coding",
      listItems: ["React Native", "Redux"],
    },
  ];
  const [selectedCard, setSelectedCard] = useState(cardData[0]);
  const handleCardClick = (index) => {
    setSelectedCard(index);
    {
      console.log(index);
    }
  };

  return (
    <div className={Styles.content}>
      <div className={Styles.rectangle}>
        <div className={Styles.projects}>Building experience</div>
        <div className={Styles.build}>& Building projects.</div>
        <div className={Styles.cards}>
          {cardData.map((card) => (
            <CardProject
              key={card.title}
              onClick={() => handleCardClick(card)}
              className={selectedCard === card ? "selected" : ""}
            >
              {card.title}
            </CardProject>
          ))}
        </div>
      </div>
      <div className={Styles.rectangleright}>
        <CardInformation {...selectedCard} />
      </div>
    </div>
  );
};

export default Projects;
