import React from "react";

import LinkCard from "./LinkCard";

const links = [
  {
    id: 'f1f2f3',
    owner: 'fmota',
    difficulty: 5,
    likes: 2,
    judge: 'Codeforces',
  },
];

const Links = () => {
  return (
    <div className="flex flex-wrap">
      {
        links.map(link => {
          return (
            <div key={link.id} className="pa3 w-20">
              <LinkCard link={link}/>
            </div>
          );
        })
      }
    </div>
  )
};

export default Links;