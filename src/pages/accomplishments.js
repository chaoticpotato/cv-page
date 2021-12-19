import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import { ScAcc } from './../components/scPages';

const accs = [{
  name: 'Amber Calendar (2021)',
  title: 'an application against gender-based violence that has a health mode and a security mode for women.',
  defn: 'Amber is an application developed by UNFPA Turkey for women for a healthy and safe life. Amber enables the monitoring of menstrual and ovulation cycles, helps planned pregnancies, and shares information about reproductive health. Amber also includes features that promote women\'s safety.',
  keywords: 'Product ownership, time management, scheduling, organizing, reporting, presenting',
  url: 'https://apps.apple.com/tr/app/amber-takvim/id1578710533'
}, {
  name: 'JotForm Mobile Forms (2019)',
  title: 'a very capable mobile app created by using react native',
  defn: 'Creating forms, reading submissions, filling forms and using devices as a kiosk, offline data collection... and more. This app shares components with JotForm web apps. CSS-in-JS solutions provide us a clean environment for that.',
  keywords: 'React, React Native, Styled Components, SASS',
  url: 'https://www.jotform.com/products/mobile-forms/'
}, {
  name: 'JotForm UI Kit',
  title: 'a common component library for JotForm ecosystem',
  defn: 'Components in this project aim to be style-agnostic. We make necessary abstractions for functionality, and every other developer styles it like what their designers wants to.',
  keywords: 'Styled components, React, style-agnostic common components',
}, {
  name: 'JotForm Cards (2018)',
  title: 're-inventing the whole form filling experience with interactive & focused way',
  defn: 'A new form layout heavily depends on CSS transitions & animations. Projects like this could be a very challenging because of the performance and layouting concerns. However, it could be also very fun, especially when you see it works like a charm on every possible device!',
  keywords: 'SASS, React, CSS Animations',
  url: 'https://www.jotform.com/cards/'
}, {
  name: 'JotForm Form Builder v4 (2017)',
  title: 're-inventing JotForm Form Builder using React',
  defn: 'The form builder and all connected modules and wizards have been rewritten using React and LESS. Our CSS framework Moodular worked very well too.',
  keywords: 'React, LESS, Moodular',
  url: 'https://www.jotform.com/build/',
}, {
  name: 'Moodular (2016)',
  title: 'a CSS Framework for internal use',
  defn: 'Moodular was developed using mostly OOCSS and SmacCSS methodologies. After its introduction, it significantly reduced file sizes and provided a common development language for developers. Although it is not currently developing, it is still stable and widely used in landing pages.',
  keywords: 'LESS, OOCSS, SmacCSS, modular'
}]

const AccomplishmentsPage = () => (
  <Layout>
    <Seo title="Accomplishments" />
    <h2>Accomplishments</h2>
    {accs.map((acc, i) => (
      <ScAcc key={i}>
        <h3>
          {acc.url
            ? <a href={acc.url} target="_blank" rel="noopener noreferrer">{acc.name}</a>
            : acc.name
          }
        </h3>
        <div className="t">{acc.title}</div>
        <p>{acc.defn}</p>
        <div><strong>Keywords:</strong> {acc.keywords}</div>
      </ScAcc>
    ))}
  </Layout>
)

export default AccomplishmentsPage
