import React, { useState, useEffect } from "react";
import SanctionTreeView from "./SanctionTreeView";
import questionsData from "./questions.json";

function App() {
  const [sanctionsData, setSanctionsData] = useState(null);

  useEffect(() => {
    // A function to transform the questions data into a tree structure
    const transformQuestionsToTree = (data) => {
      const sections = data.map((section) => {
        const sectionNode = {
          name: `Section ${section.section}`,
          children: section.questions.map((question) => {
            const questionNode = {
              name: `Q${question.questionId}: ${question.text}`,
              children: question.dependencies.map((dependency) => {
                const dependencyNode = {
                  name: `Depends on Q${dependency.questionId}: ${dependency.answer}`
                };
                return dependencyNode;
              })
            };
            return questionNode;
          })
        };
        return sectionNode;
      });

      const parsedData = {
        name: "Sanctions Questions",
        children: sections
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
