import React from "react";

const link = {
  id: "id",
  owner: "fmota",
  link: "link",
  desc: "Nya Nya",
  judge: 'Codeforces',
  likes: 2,
  difficulty: 5,
}

const Link = () => {
  return (
    <p> {link.id} </p>
  );
};

export default Link;