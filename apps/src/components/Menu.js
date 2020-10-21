import ReactDOM from 'react-dom';
import React from 'react';

function Menu() {
  return (
    <ul className="menu">
      <li className="menu__item"><a href='./index.html'>Home</a></li>
      <li className="menu__item"><a href='./form/form.html'>Form</a></li>
    </ul>
  );
}

export default Menu;

const wrapper = document.getElementById('menu');
wrapper ? ReactDOM.render(<Menu />, wrapper) : false;
