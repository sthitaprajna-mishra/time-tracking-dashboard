import React from "react";
import jsonData from "../assets/data.json";
import CardContainer from "./CardContainer";
import ellipsis from "../assets/images/icon-ellipsis.svg";
import work from "../assets/images/icon-work.svg";
import play from "../assets/images/icon-play.svg";
import study from "../assets/images/icon-study.svg";
import exercise from "../assets/images/icon-exercise.svg";
import social from "../assets/images/icon-social.svg";
import selfCare from "../assets/images/icon-self-care.svg";

const STYLE_MAP = [
  {
    bg: "workLightRed-bg",
    icon: work,
    t: 2,
    b: 8,
  },
  {
    bg: "playSoftBlue-bg",
    icon: play,
    t: 2,
    b: 8,
  },
  {
    bg: "studyLightRed-bg",
    icon: study,
    t: 2,
    b: 8,
  },
  {
    bg: "exerciseLimeGreen-bg",
    icon: exercise,
    t: 0,
    b: 4,
  },
  {
    bg: "socialViolet-bg",
    icon: social,
    t: 4,
    b: 12,
  },
  {
    bg: "selfCareSoftOrange-bg",
    icon: selfCare,
    t: 2,
    b: 4,
  },
];

const CardContainerList = ({ choice }) => {
  return (
    <>
      {jsonData.map((item, id) => {
        return (
          <CardContainer
            key={id}
            item={item}
            choice={choice}
            bg={STYLE_MAP[id].bg}
            icon={STYLE_MAP[id].icon}
            m={id}
          />
        );
      })}
    </>
  );
};

export default CardContainerList;
