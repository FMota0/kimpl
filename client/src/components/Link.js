import React from "react";

const Link = ({link}) => {
  return (
    <div className="cultured">
      <p className="f2 tc mt2"> {link.id} </p>
      <div className="flex flex-wrap">
        <div className="w-60">
          <p> Link: <a href={link.link} style={{textDecoration: 'none'}} className="cerulean-crayola"> {link.link}</a>  </p>
          <p> Descrição: {link.desc} </p>
        </div>
        <div className="w-40">
          <p> Owner: {link.owner} </p>
          <p> Likes: {link.likes} </p>
          <p> Difficulty: {link.difficulty}</p>
        </div>
      </div>
    </div>
  );
};

export default Link;