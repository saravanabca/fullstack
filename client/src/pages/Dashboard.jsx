import React, { useState } from 'react';

const DragAndDropTwoTables = () => {
  const [table1, setTable1] = useState([
    { id: 1, value: 'Item 1', count: 0 },
    { id: 2, value: 'Item 2', count: 0 },
    { id: 3, value: 'Item 3', count: 0 },
  ]);

  const [table2, setTable2] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const handleDragStart = (e, id, sourceTable) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ id, sourceTable }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetTable) => {
    e.preventDefault();

    const draggedItemInfo = JSON.parse(e.dataTransfer.getData('text/plain'));
    const draggedItem = draggedItemInfo.sourceTable === 'table1'
      ? table1.find(item => item.id === draggedItemInfo.id)
      : table2.find(item => item.id === draggedItemInfo.id);

    // Avoid dropping on the same table
    if (draggedItem) {
      if (draggedItemInfo.sourceTable === 'table1') {
        setTable1(table1.filter(item => item.id !== draggedItem.id));
      } else {
        setTable2(table2.filter(item => item.id !== draggedItem.id));
      }

      setTotalCount(totalCount + 1);
      setTable2([...table2, { ...draggedItem, sourceTable: draggedItemInfo.sourceTable }]);
    }
  };

  return (
    <div>
      <h2>Drag and Drop Between Two Tables</h2>
      <div className="table-container">
        <div className="table" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'table1')}>
          <h3>Table 1</h3>
          <ul>
            {table1.map(item => (
              <li key={item.id} draggable onDragStart={(e) => handleDragStart(e, item.id, 'table1')}>
                {item.value} - Count: {item.count}
              </li>
            ))}
          </ul>
        </div>
        <div className="table" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'table2')}>
          <h3>Table 2</h3>
          <ul>
            {table2.map(item => (
              <li key={item.id} draggable onDragStart={(e) => handleDragStart(e, item.id, 'table2')}>
                {item.value} - Count: {item.count}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>Total Count: {totalCount}</p>
    </div>
  );
};

export default DragAndDropTwoTables;
