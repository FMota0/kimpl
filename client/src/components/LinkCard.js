import React from "react";

const LinkCard = ({ link: { id, owner, judge, difficulty, likes } }) => {
  return (
    <div className="ba br2 card pl2 pr2 pb2 pt2 fl">
      <div className="f3 tc"> {id} </div>
      <div className="f5 mt1"> Owner: {owner} </div>
      <div className="f6 mt1"> Judge: {judge} </div>
      <div className="f6 mt1"> Dificuldade: {difficulty}</div>
      <div className="f6 mt1"> Likes: {likes}</div>
    </div>
  )
};

export default LinkCard;