import React, { useState } from 'react';
import TopNavBar from "../../component/main/TopNavBar";

const DataTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // Sort table data
  const sortTable = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    const sortedData = [...tableData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setTableData(sortedData);
  };

  // Filter table data
  // Add your own filter function here

  // Handle row selection
  const handleRowClick = (index) => {
    setSelectedRow(index);
    // Add your own logic to handle the selected row
  };

  // Edit table data
  // Add your own edit function here

  // Paginate table data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    
    <div>
        <TopNavBar pageActive="datatable" />
      <table>
        <thead>
          <tr>
            <th onClick={() => sortTable('name')}>Name</th>
            <th onClick={() => sortTable('age')}>Age</th>
            {/* Add more headers for other columns */}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(index)}
              style={{ background: selectedRow === index ? 'lightgray' : 'white' }}
            >
              <td>{row.name}</td>
              <td>{row.age}</td>
              {/* Add more cells for other columns */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* Pagination */}
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= tableData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
