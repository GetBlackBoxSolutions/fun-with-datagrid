import React, { useState } from "react";
import "./DataGrid.css";

const DataGrid = ({ data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);

  //const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  const headers = Object.keys(data[0] || {});

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageDisplay = pagination(currentPage, data.length, pageSize);

  return (
    <div>
      <table className="data-grid-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {pageDisplay.map((item, index) => {
          if (item === "...") {
            return <span key={index}>...</span>;
          }
          return (
            <button
              key={index}
              onClick={() => handlePageChange(item)}
              className={item === currentPage ? "active" : ""}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DataGrid;

function pagination(currentPage, items, numberPerPage) {
  const pageDisplay = ["1"];
  const pageCount = Math.ceil(items / numberPerPage);
  const tempCurrentPage = Number(currentPage);

  if (tempCurrentPage > pageCount)
    throw new Error("Page number is greater than the total number of pages");

  // If there is only one page, return an empty array
  if (numberPerPage > items) return [];

  // If there is only enough items for 10 pages or less, display all pages
  if (pageCount <= 10) {
    for (let i = 2; i <= pageCount; i++) {
      pageDisplay.push(i.toString());
    }
    return pageDisplay;
  }

  // Current page is less than 4 display [1, 2, 3, 4, 5, ..., X] where X is the last page
  if (tempCurrentPage <= 4) {
    for (let i = 2; i <= 5; i++) {
      pageDisplay.push(i.toString());
    }

    pageDisplay.push("...");
    pageDisplay.push(pageCount.toString());

    return pageDisplay;
  }

  pageDisplay.push("...");

  // Current page is greater than the last page - 3 display [1, ..., X-4, X-3, X-2, X-1, X] where X is the last page
  if (tempCurrentPage > pageCount - 3) {
    for (let i = pageCount - 5; i <= pageCount; i++) {
      pageDisplay.push(i.toString());
    }

    return pageDisplay;
  }

  // Display [1, ..., C-2, C-1, C, C+1, ..., X] where X is the last page and C is the current page
  for (let i = tempCurrentPage - 2; i < tempCurrentPage + 2; i++) {
    pageDisplay.push(i.toString());
  }

  pageDisplay.push("...");
  pageDisplay.push(pageCount.toString());
  return pageDisplay;
}
