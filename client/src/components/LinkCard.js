import React from "react";

const LinkCard = ({ link: { owner, judge, difficulty, likes } }) => {
  return (
    <div className="ba br3 card pl2 pr2 pb2 pt2 fl">
      <div className="f4">{owner} / {judge}</div>
      <div className="f7 mt1">Dificuldade: {difficulty}</div>
      <div className="f7 mt1">Likes: {likes}</div>
    </div>
  )
};

export default LinkCard;