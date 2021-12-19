import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import Image from "../components/image"
import { ScFun } from "../components/scPages"

const IndexPage = () => (
  <Layout>
    <Seo title="Profile" />

    <div className="bioBox">
      <div className="bio">
        <h2>Hello there!</h2>
        <p>My name is Ömer Fatih Tanrıverdi.<br />I am a <strong>UI / Frontend developer</strong> from Turkey.</p>
      </div>
      <div className="avatar">
        <Image />
      </div>
    </div>

    <div className="summary">
      <h2>Summary</h2>
      <p>Over 12 years of experience developing frontend and backend applications. Strong background with user interface (UI) applications and layout architectures. Focused on front-end development for the last 9 years with various technologies and frameworks. Very experienced with React ecosystem.</p>
    </div>

    <div>
      <p>My previous experience involves intersection with product owner roles to enhance user engagement, analyzing customer needs in products usage and collecting customers' feedback. Also, since I am the point of contact between the design and development teams, I am able to ensure cross-team collaboration in order to meet the deadlines and prioritize the features.</p>

      <ScFun>
        <div className="box title">
          My<span />non-technical<span />side
        </div>

        <div>
          <div className="box">
            I like dogs, reading, sewing, listening. (in no particular order)
          </div>
          <div className="box">
            In such situations, I often have a hard time talking about myself and try to be funny about it. (Just joking.)
          </div>
        </div>
      </ScFun>

      <p>
        Currently, I am doing consulting work, and I am more than happy to take on your digital/mobile needs, implement or coordinate new features.
      </p>

      <p>If you'd like to contact me, feel free to say hi to me at omer.f.tanriverdi [at] gmail [dot] com.</p>
    </div>
  </Layout>
)

export default IndexPage
