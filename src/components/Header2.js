import React from 'react'
import '../CSS/Second_header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header1() {
  return (
    <div className="header1">
      <div className="all_1">
        <FontAwesomeIcon icon={faBars} />
          <span>All</span>
      </div>
      <div className="all">
        <span>Today's Deals</span>
      </div>
      <div className="all">
        <span>Customer Service</span>
      </div>
      <div className="all">
        <span>Registery</span>
      </div>
      <div className="all">
        <span>Gift Card</span>
      </div>
      <div className="all">
        <span>Cell</span>
      </div>
    </div>
  )
}

export default Header1;