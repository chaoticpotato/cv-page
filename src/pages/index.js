import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Test Page</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum odio assumenda repellat officiis, nam minima minus nostrum architecto reprehenderit beatae nisi aperiam quam optio consequatur voluptate officia vero quibusdam!</p>
    <Link to="/page-2/" activeClassName="hede">Go to page 2</Link>
  </Layout>
)

export default IndexPage
