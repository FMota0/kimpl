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
        Array(20).fill(0).map((_, i) => {
          return (
            <div key={i} className="pa3 w-10">
              <LinkCard link={links[0]}/>
            </div>
          );
        })
      }
    </div>
  )
};

export default Links;