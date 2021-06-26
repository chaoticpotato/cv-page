import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Profile" />
    <div className="avatar">
      <Image />
    </div>
    <h2>Hello there!</h2>
    <p>
      My name is Ömer Fatih Tanrıverdi. I am 32 years old and from Turkey.<br /><br />

      I've been involved in <strong>UI &amp; Front End development</strong> for <strong>over 10 years</strong>. In such situations, I often have a hard time talking about myself and try to be funny about it. (Just joking.)<br /><br />

      I like dogs, reading, sewing, listening. (in no particular order)<br /><br />

      If you'd like to contact me, feel free to say hi to me at omer.f.tanriverdi [at] gmail [dot] com.
    </p>
  </Layout>
)

export default IndexPage
