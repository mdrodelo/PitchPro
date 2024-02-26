import React from 'react';
import {Link} from "react-router-dom";

const MyData = () => {
  return (
      <div>
        <div>MyData Screen Content</div>
        <Link to="/heatmap" className="nav-link">Example Heatmap</Link>
      </div>
  );
};

export default MyData;