import React from 'react'
import { Link } from 'gatsby'
import { ScSidebar } from './scSidebar'

const links = [{
  to: '/',
  text: 'Profile'
}, {
  to: '/experience',
  text: 'Employement History'
}, {
  to: '/skills',
  text: 'Skills'
}, {
  to: '/accomplishments',
  text: 'Accomplishments'
}];

const Sidebar = () => (
  <ScSidebar>
    <h1 className="title">
      <Link
        activeClassName="isActive"
        to="/"
      >
        Ömer Fatih Tanrıverdi
      </Link>
    </h1>
    <p className="desc">UI / Front End Developer</p>
    <nav className="menu">
      <ul>
        {links.map((item, i) => (
          <li key={i}>
            <Link
              activeClassName="isActive"
              to={item.to}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </ScSidebar>
);

export default Sidebar