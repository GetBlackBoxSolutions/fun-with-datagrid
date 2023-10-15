import React from "react";
import DataGrid from "./components/DataGrid";

const App = () => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // Add more data items as needed
  ];

  return (
    <div>
      <h1>Data Grid Example</h1>
      <DataGrid data={data} pageSize={5} />
    </div>
  );
};

export default App;
