import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useParams } from "react-router-dom";

import LinkRenderer from "./LinkRenderer";

const Links = () => {
  const [ selectedLink, setSelectedLink ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ links, setLinks ] = useState([]);

  const { tagId } = useParams();

  useEffect(() => {
    Modal.setAppElement('body');
    (async () => {
      const { data: fetchedLinks } = await axios.get(`tags/${tagId}`);
      setLinks(fetchedLinks);
      setIsLoading(false);
    })();
  }, [tagId]);

  return <LinkRenderer 
    links={links}
    isLoading={isLoading}
    selectedLink={selectedLink}
    setSelectedLink={setSelectedLink}
  />
};

export default Links;