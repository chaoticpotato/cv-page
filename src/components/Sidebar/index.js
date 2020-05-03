import React from 'react'
import { Link } from 'gatsby'
import { ScSidebar } from './scSidebar'

const Sidebar = () => (
  <ScSidebar>
    <h1 className="title">Ömer Fatih Tanrıverdi</h1>
    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum ipsum beatae et? Ipsa ipsam, dolor ut officiis dicta provident mollitia! Quaerat laborum ea expedita, pariatur corporis eius voluptates sint.</p>
    <nav className="menu">
      <ul>
        <li>
          <Link to="">Education</Link>
        </li>
        <li>
          <Link></Link>
        </li>
      </ul>
    </nav>
  </ScSidebar>
);

export default Sidebar