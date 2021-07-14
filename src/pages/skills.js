import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { ScSkillSet } from './../components/scPages';

const skillz = [{
  name: 'ui',
  stuff: ['LESS', 'SASS', 'PostCSS', 'Styled Components', 'Emotion', 'Tailwind CSS', 'CSS Methodologies']
}, {
  name: 'js',
  stuff: ['Vannilla JS', 'ES6', 'TypeScript', 'React', 'Redux']
}, {
  name: 'design',
  stuff: ['Adobe Photoshop', 'Figma', 'Zeplin', 'Sketch']
}, {
  name: 'dev',
  stuff: ['yarn', 'npm', 'gulp', 'grunt', 'github', 'vs code']
}]

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <h2>Skills</h2>
    <div>
      {skillz.map((skill, i) => (
        <ScSkillSet key={i}>
          <div className={`name ${skill.name}`}>{skill.name}</div>
          <div className="item">{skill.stuff.join(', ')}</div>
        </ScSkillSet>
      ))}
    </div>
  </Layout>
)

export default SkillsPage
