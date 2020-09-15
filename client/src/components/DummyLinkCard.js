import React from "react";

const LinkCard = () => {
  return (
    <div className="ba br2 card-link pl2 pr2 pb2 pt2 fl">
      <div className="f3 tc dummy loading"> </div>
      <div className="flex f5 mt1"> Owner: <div className="dummy loading"></div></div>
      <div className="flex f6 mt1"> Judge: <div className="dummy loading"></div> </div>
      <div className="flex f6 mt1"> Dificuldade: <div className="dummy loading"></div> </div>
      <div className="flex f6 mt1"> Likes: <div className="dummy loading"></div> </div>
    </div>
  )
};

export default LinkCard;