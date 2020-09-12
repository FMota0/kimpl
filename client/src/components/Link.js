import React from "react";

const Link = ({link}) => {
  return (
    <div>
      <p className="f2 black tc mt2"> {link.id} </p>
      <div className="flex flex-wrap">
        <div className="w-60">
          <p> Link e descricao </p>
        </div>
        <div className="w-40">
          <p> Meta </p>
        </div>
      </div>
    </div>
  );
};

export default Link;