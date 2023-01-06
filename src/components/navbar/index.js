/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './navbar.scss';

const NavBar = ({ titles }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <ul className={`topNavBar ${!toggle ? 'hidden' : ''}`}>
      {titles.map((title) => (
        <li key={title.name} className={toggle ? 'hidden' : ''}>
          <a href={title?.link || ''}>
            {title.name}
          </a>
        </li>
      ))}
      <li>
        <div onClick={() => setToggle(!toggle)} className="icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </li>
    </ul>
  );
};

NavBar.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
  })).isRequired,
};

export default NavBar;
