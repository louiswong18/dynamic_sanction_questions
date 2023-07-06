import React, { useState, useEffect } from "react";
import SanctionTreeView from "./SanctionTreeView";
import questionsData from "./questions.json";

function App() {
  const [sanctionsData, setSanctionsData] = useState(null);

  useEffect(() => {
    // A function to transform the questions data into a tree structure
    const transformQuestionsToTree = (questions) => {
      const parsedData = {
        name: "Sanctions Questions",
        children: questions.map((question) => ({
          name: question.number,
          children: [{ name: question.text }]
        }))
      };
      return parsedData;
    };

    const treeData = transformQuestionsToTree(questionsData);
    setSanctionsData(treeData);
  }, []);

  return (
    <div>
      {sanctionsData ? (
        <SanctionTreeView data={sanctionsData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
