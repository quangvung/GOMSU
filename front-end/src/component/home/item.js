import React from 'react'

const Items =     [  
    {"name":"Ram", "email":"ram@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"}  
] ;

function items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }

export default Items;
