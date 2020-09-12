import React from "react";
import { Link } from "react-router-dom";

const tags = [
  'greedy',
  'dynamic programming',
  'segtree',
  'aho corasick',
  'flow',
  'convex hull',
  'fenwick tree',
  'fft',
  'dfs',
  'bfs',
];

const Tags = () => {
  return (
    <div className="flex flex-wrap">
      {tags.map(tag => {
        return (
          <div key={tag} className="pa3 w-20">
            <Link to={`/tags/${tag}`} style={{textDecoration: 'none'}}> 
              <div className="ba br3 card tc">
                  <p>{tag}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Tags;