import React from "react";
import "./menu.scss";
function Menu() {
  return (
    <div className='menu'>
      <div className='menu-wrapper'>
        <img src='/images/logo.svg' alt='logo' className='logo' />
        <ul className='options'>
          <li>
            <span className='material-icons'>list</span>
            <span className='desc'>items</span>
          </li>
          <li>
            <span className='material-icons'>replay</span>
            <span className='desc'>history</span>
          </li>
          <li>
            <span className='material-icons'>insert_chart_outlined</span>
            <span className='desc'>statistics</span>
          </li>
        </ul>
        <div className='car'>
          <img src='/images/car.png' alt='car' />
        </div>
      </div>
    </div>
  );
}

export default Menu;
