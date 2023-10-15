import React from "react";
import DataGrid from "./components/DataGrid/DataGrid";
import createData from "./data/mock-data";

const App = () => {
  const data = createData();

  return (
    <div>
      <h1>Data Grid Example</h1>
      <DataGrid data={data} pageSize={5} />
    </div>
  );
};

export default App;
