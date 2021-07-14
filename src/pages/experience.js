import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { ScPastJob } from './../components/scPages';

const experiences = [{
  companyName: 'JotForm - UI Consultant',
  companyUrl: 'https://www.jotform.com/',
  dates: '07 / 2020 - present',
  stuff: 'As a UI consultant, I ensure all products within the same domain are aligned.'
}, {
  companyName: 'JotForm',
  companyUrl: 'https://www.jotform.com/',
  dates: '09 / 2012 - 07 / 2020',
  stuff: `My responsibilities included overseeing UI Engineering and leading 20 UI developers for 8 years. In the JotForm ecosystem, I was involved in large-scale projects such as
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
  stuff: 'A large portion of the design and UI work has been done for the biggest Turkish movie portal, sinemalar.com website, and mobile apps for TV.'
}, {
  companyName: 'Grafikir Advertisement Agency',
  companyUrl: 'https://grafikir.com.tr/',
  dates: '10 / 2010 - 08 / 2011',
  stuff: 'I worked as a full-stack developer for one of the most prestigious design studios.'
}, {
  companyName: 'Kaktüs Creative Agency',
  companyUrl: 'https://grafikir.com.tr/',
  dates: '04 / 2009 - 08 / 2011',
  stuff: 'This portfolio includes a wide range of website design and UI work for local businesses.'
}];

const createMarkup = (i) => {
  return { __html: `${i}` };
}

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" />
    <h2>Employement History</h2>
    <div>
      {experiences.map((item, i) => (
        <ScPastJob key={i}>
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
