import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { ScPastJob } from './scPages';

const experiences = [{
  companyName: 'JotForm',
  companyUrl: '',
  dates: '09/2012 - current',
  stuff: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum odio assumenda repellat officiis, nam minima minus nostrum architecto reprehenderit beatae nisi aperiam quam optio consequatur voluptate officia vero quibusdam!'
}, {
  companyName: 'Sinemalar.com - Nokta Media',
  companyUrl: '',
  dates: '06/2011 - 04/2012',
  stuff: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum odio assumenda repellat officiis, nam minima minus nostrum architecto reprehenderit beatae nisi aperiam quam optio consequatur voluptate officia vero quibusdam!'
}, {
  companyName: 'Grafikir Advertisement Agency',
  companyUrl: '',
  dates: '10/2010 - 08/2011',
  stuff: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum odio assumenda repellat officiis, nam minima minus nostrum architecto reprehenderit beatae nisi aperiam quam optio consequatur voluptate officia vero quibusdam!'
}, {
  companyName: 'Kaktüs Creative Agency',
  companyUrl: '',
  dates: '04/2009 - 08.2011',
  stuff: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum odio assumenda repellat officiis, nam minima minus nostrum architecto reprehenderit beatae nisi aperiam quam optio consequatur voluptate officia vero quibusdam!'
}];

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" />
    <h2>Employement History</h2>
    <div>
      {experiences.map(item => (
        <ScPastJob>
          <div className="header">
            <h3 className="name">{item.companyName}</h3>
            <div className="dates">{item.dates}</div>
          </div>
          <p className="body">{item.stuff}</p>
        </ScPastJob>
      ))}
    </div>
  </Layout>
)

export default ExperiencePage
