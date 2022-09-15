import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import { ScPastJob } from './../components/scPages';

const experiences = [{
  companyName: 'UNFPA Turkey - Product Owner',
  companyUrl: 'https://turkey.unfpa.org/',
  dates: '10 / 2021 - 04 / 2022',
  stuff: 'I am currently participating in <strong>The Amber Project</strong> as a product owner (PO). <br /><br />AMBER is an application developed by UNFPA Turkey for women for a healthy and safe life. AMBER enables the monitoring of menstrual and ovulation cycles, helps planned pregnancies, and shares information about reproductive health. AMBER also includes features that promote women\'s safety.'
}, {
  companyName: 'JotForm - UI Consultant',
  companyUrl: 'https://www.jotform.com/',
  dates: '07 / 2020 - present',
  stuff: '<strong>As a UI engineering consultant</strong>, I ensure all products within the same domain are aligned.'
}, {
  companyName: 'JotForm',
  companyUrl: 'https://www.jotform.com/',
  dates: '09 / 2012 - 07 / 2020',
  stuff: `My responsibilities included overseeing UI Engineering and <strong>leading 20 UI developers for 8 years.</strong> In the JotForm ecosystem, I was involved in large-scale projects such as
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
  stuff: '<strong>A large portion of the design and UI work</strong> has been done for <strong>the biggest Turkish movie portal</strong>, sinemalar.com website, and mobile apps for TV.'
}, {
  companyName: 'Grafikir Advertisement Agency',
  companyUrl: 'https://grafikir.com.tr/',
  dates: '10 / 2010 - 08 / 2011',
  stuff: 'I worked as a <strong>full-stack developer</strong> for one of <strong>the most prestigious design studios.</strong>'
}, {
  companyName: 'Kaktüs Creative Agency',
  companyUrl: 'https://grafikir.com.tr/',
  dates: '04 / 2009 - 08 / 2011',
  stuff: 'This portfolio includes <strong>a wide range of website design and UI work</strong> for local businesses.'
}];

const createMarkup = (i) => {
  return { __html: `${i}` };
}

const ExperiencePage = () => (
  <Layout>
    <Seo title="Experience" />
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
