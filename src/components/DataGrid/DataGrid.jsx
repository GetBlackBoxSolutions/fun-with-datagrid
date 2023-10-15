import React, { useState } from "react";

const DataGrid = ({ data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table>
        {/* Render your table headers here */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {/* Render table rows with data */}
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              {/* Render additional columns */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        {/* Render pagination controls */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default DataGrid;
