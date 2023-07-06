import React from "react";
import Tree from "react-d3-tree";

const containerStyles = {
  width: "100%",
  height: "100vh"
};

const SanctionTreeView = ({ data }) => {
  return (
    <div style={containerStyles}>
      <Tree data={data} />
    </div>
  );
};

export default SanctionTreeView;
