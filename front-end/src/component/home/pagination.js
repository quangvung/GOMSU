<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Items from './item.js';
// Example items, to simulate fetching from another resources.
const items =     [  
    {"name":"Ram", "email":"ram@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"}  
] ;


function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
ReactDOM.render(
  <PaginatedItems itemsPerPage={1} />,
  document.getElementById('container')
);

export default PaginatedItems;

=======
>>>>>>> Stashed changes
import React from "react";

// Getting local JSON file
import Newspapers from "./newspapers.json";

function pagination() {
  return (
    <div>
        <table border="2">
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Department</th>
                </tr>
                {Newspapers.newspapers.map((item, i) => (
                    <tr key={i}>
                        <td>{item.title}</td>
                        <td>{item.submitdate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

<<<<<<< Updated upstream
export default pagination
=======
export default pagination
>>>>>>> 22eeffc4643a4a71bdc7aeb03f28badf4a06ea01
>>>>>>> Stashed changes
