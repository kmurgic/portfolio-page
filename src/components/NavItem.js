import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = (props) => {
  const linkTo = props.name === 'Home' ?
    '/' : `/${props.name.toLowerCase().replace(/\s/g, '')}`;
  return (
    <li id='nav-item'>
      <NavLink
      to = {linkTo}
      exact = {props.name === 'Home'}
      className='link'
      activeClassName = 'selected'>
        {props.name.toUpperCase()}
      </NavLink>
    </li>
  )
}

export default NavItem;
