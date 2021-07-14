import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Image from "../components/image"
import { ScFun } from "../components/scPages"

const IndexPage = () => (
  <Layout>
    <SEO title="Profile" />
    <div className="avatar">
      <Image />
    </div>
    <h2>Hello there!</h2>
    <p>
      My name is Ömer Fatih Tanrıverdi. I am 32 years old and from Turkey.<br /><br />

      I've been involved in <strong>UI &amp; Front End development</strong> for <strong>over 10 years. </strong>
      <br /><br />
      My previous experience involves intersection with product owner roles to enhance user engagement, analyzing customer needs in products usage and collecting customers' feedback. Also, since I am the point of contact between the design and development teams, I am able to ensure cross-team collaboration in order to meet the deadlines and prioritize the features.<br /><br />

      <ScFun>
        <span className="title">My<span />unrelated<span />traits</span>

        <span className="content">
          - I like dogs, reading, sewing, listening. (in no particular order)
          <br /><br />
          - In such situations, I often have a hard time talking about myself and try to be funny about it. (Just joking.)
        </span>
      </ScFun>

      <br />
      Currently, I am doing consulting work, and I am more than happy to take on your digital/mobile needs, implement or coordinate new features.

      If you'd like to contact me, feel free to say hi to me at omer.f.tanriverdi [at] gmail [dot] com.
    </p>
  </Layout>
)

export default IndexPage
