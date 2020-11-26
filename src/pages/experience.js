import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { ScPastJob } from './../components/scPages';

const experiences = [{
  companyName: 'JotForm',
  companyUrl: 'https://www.jotform.com/',
  dates: '09 / 2012 - now',
  stuff: `I am currently responsible for UI Engineering & leading 20 UI developers  for 8 years. I took part in big projects in JotForm ecosystem such as 
  <a href="https://www.jotform.com/apps/" target="_blank" rel="noopener noreferrer">JotForm Apps</a>, 
    <a href="https://www.jotform.com/meet-jotform-4" target="_blank" rel="noopener noreferrer">JotForm v4</a>, 
    <a href="https://www.jotform.com/products/mobile-forms/" target="_blank" rel="noopener noreferrer">JotForm Mobile</a>, 
    <a href="https://www.jotform.com/cards/" target="_blank" rel="noopener noreferrer">JotForm Cards</a>,
    <a href="https://www.jotform.com/products/pdf-editor/" target="_blank" rel="noopener noreferrer">JotForm PDF Editor</a>, 
    <a href="https://www.jotform.com/features/assign-forms/" target="_blank" rel="noopener noreferrer">Assign Forms</a> 
    and so on.`
}, {
  companyName: 'Sinemalar.com',
  companyUrl: 'https://www.sinemalar.com/',
  dates: '06 / 2011 - 04 / 2012',
  stuff: 'Most of the design & UI responsibility of the biggest movie portal of Turkey, sinemalar.com website, mobile apps and smart tv apps.'
}, {
  companyName: 'Grafikir Advertisement Agency',
  companyUrl: 'https://grafikir.com.tr/',
  dates: '10 / 2010 - 08 / 2011',
  stuff: 'Coded all the various client websites for the one of the most time award-winning design studio.'
}, {
  companyName: 'Kaktüs Creative Agency',
  companyUrl: 'https://grafikir.com.tr/',
  dates: '04 / 2009 - 08.2011',
  stuff: 'Many website design and UI work for local businesses.'
}];

const createMarkup = (i) => {
  return { __html: `${i}` };
}

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
          <p className="body" dangerouslySetInnerHTML={createMarkup(item.stuff)} />
        </ScPastJob>
      ))}
    </div>
  </Layout>
)

export default ExperiencePage
