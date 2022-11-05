import React from 'react';
import ReactDOM from 'react-dom/client';

// export default function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button className='btn' onClick={shoot}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);

function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
      itemContent = (
        <del>
          {name + " ✔"}
        </del>
      );
    }
    return (
      <li className="item">
        {itemContent}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h2>Sally Ride's Packing List</h2>
        <p>
          <Item 
            isPacked={true} 
            name="Space suit" 
          /> <br></br>
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          /><br></br>
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          /><br></br>
        </p>
      </section>
    );
  }
  