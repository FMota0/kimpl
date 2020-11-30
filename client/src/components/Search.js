import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useLocation } from "react-router-dom";

import LinkRenderer from "./LinkRenderer";

const Links = () => {
  const [ selectedLink, setSelectedLink ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ links, setLinks ] = useState([]);

  const query = new URLSearchParams(useLocation().search);

  const search = query.get("i");

  useEffect(() => {
    Modal.setAppElement('body');
    (async () => {
      const { data: fetchedLinks } = await axios.get(`search?i=${search}`);
      setLinks(fetchedLinks);
      setIsLoading(false);
    })();
  }, [search]);

  return <LinkRenderer 
    links={links}
    isLoading={isLoading}
    selectedLink={selectedLink}
    setSelectedLink={setSelectedLink}
  />
};

export default Links;