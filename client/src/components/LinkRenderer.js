import React, { Fragment } from "react";
import Modal from "react-modal";

import LinkCard from "./LinkCard";
import DummyLinkCard from "./DummyLinkCard";
import Link from "./Link";

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

const LinkRenderer = ({links, isLoading, selectedLink, setSelectedLink}) => {
  if (isLoading) {
    return (
      <div className="flex flex-wrap">
        {Array(20).fill(0).map((_, i) => {
          return (
            <div key={i} className="pa3 w-10">
              <DummyLinkCard/>
            </div>
          );
        })}
      </div>
    )
  }
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
          links.map((link, i) => {
            return (
              <div key={i} className="pa3 w-10" onClick={() => setSelectedLink(link)}>
                <LinkCard link={link}/>
              </div>
            );
          })
        }
      </div>
    </Fragment>
  )
};

export default LinkRenderer;