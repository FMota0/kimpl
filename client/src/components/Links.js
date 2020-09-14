import React, { useState, Fragment, useEffect } from "react";
import Modal from "react-modal";

import LinkCard from "./LinkCard";
import Link from "./Link";

const links = [
  {
    id: 'f1f2f3',
    owner: 'fmota',
    difficulty: 5,
    likes: 2,
    judge: 'Codeforces',
    link: 'google.com',
    desc: 'Nya Nya',
  },
];

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '600px',
    minHeight: '400px',
    backgroundColor: 'var(--charcoal)'
  }
};

const Links = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);
  return (
    <Fragment>
      <Modal 
        isOpen={!!selectedLink}
        onRequestClose={() => setSelectedLink(null)}
        style={customStyles}
      >
        { selectedLink && <Link link={selectedLink}/>}
      </Modal>
      <div className="flex flex-wrap">
        {
          Array(20).fill(0).map((_, i) => {
            return (
              <div key={i} className="pa3 w-10" onClick={() => setSelectedLink(links[0])}>
                <LinkCard link={links[0]}/>
              </div>
            );
          })
        }
      </div>
    </Fragment>
  )
};

export default Links;