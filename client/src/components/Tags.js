import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Tags = () => {
  const [ tags, setTags ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: fetchedTags } = await axios.get('tags');
      setTags(fetchedTags);
      setIsLoading(false);
    })();
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-wrap">
        {Array(20).fill(0).map((_, i) => {
          return (
            <div key={i} className="pa2 w-20 f3">
              <div className="ba br2 card-load loading tc">
              </div>
            </div>
          );
        })}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap">
      {tags.map(tag => {
        return (
          <div key={tag} className="pa2 w-20 f3">
            <Link to={`/tags/${tag}`} style={{textDecoration: 'none'}}> 
              <div className="ba br2 card tc">
                <p> {tag} </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Tags;