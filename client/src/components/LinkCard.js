import React from "react";
import { Link } from "react-router-dom";

const LinkCard = ({ link: { id, owner, judge, difficulty, likes } }) => {
  return (
    <Link to={`/links/${id}`} style={{ textDecoration: 'none' }}>
      <div className="ba br3 card pl2 pr2 pb2 pt2 fl">
        <div className="f4">{owner} / {judge}</div>
        <div className="f7 mt1">Dificuldade: {difficulty}</div>
        <div className="f7 mt1">Likes: {likes}</div>
      </div>
    </Link>
  )
};

export default LinkCard;