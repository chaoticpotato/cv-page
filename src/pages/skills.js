import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import { ScSkillSet } from './../components/scPages';

const skillz = [{
  name: 'ui',
  stuff: ['LESS', 'SASS', '*PostCSS', '*Styled Components', 'Emotion', '*Tailwind CSS', '*CSS Methodologies']
}, {
  name: 'js',
  stuff: ['Vannilla JS', 'ES6', '*TypeScript', '*React', 'Redux', '*Node', 'Express']
}, {
  name: 'design',
  stuff: ['Adobe Photoshop', '*Figma', 'Zeplin', '*Sketch']
}, {
  name: 'data',
  stuff: ['*SQL', 'MySQL', '*PostreSQL', 'Postico']
}, {
  name: 'dev',
  stuff: ['*yarn', 'npm', '*parcel', 'github', 'vs code']
}]

const Skill = ({ sk, isLast }) => {
  const isBold = sk[0] === '*';
  const s = isBold ? sk.slice(1) : sk;

  return <><span style={{ fontWeight: isBold ? '600' : '400' }}>{s}</span>{!isLast && <span>&middot;</span>}</>
}

const SkillsPage = () => (
  <Layout>
    <Seo title="Skills" />
    <h2>Skills</h2>
    <div>
      {skillz.map((skill, i) => (
        <ScSkillSet key={i}>
          <div className={`name ${skill.name}`}>{skill.name}</div>
          <div className="item">{skill.stuff.map((s, i) => <Skill key={i} isLast={i === skill.stuff.length - 1} sk={s} />)}</div>
        </ScSkillSet>
      ))}
    </div>
  </Layout>
)

export default SkillsPage
