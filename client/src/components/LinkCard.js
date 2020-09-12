import React from "react";

const LinkCard = ({ link: { id, owner, judge, difficulty, likes } }) => {
  return (
    <div className="ba br3 card pl2 pr2 pb2 pt2 fl">
      <div className="f4"> {owner} </div>
      <div className="f6 mt1"> Judge: {judge} </div>
      <div className="f7 mt1">Dificuldade: {difficulty}</div>
      <div className="f7 mt1">Likes: {likes}</div>
      <div className="f7 mt1"> Id: {id} </div>
    </div>
  )
};

export default LinkCard;