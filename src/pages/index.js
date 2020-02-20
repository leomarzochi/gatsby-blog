import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>home page</h1>
    <StaticQuery
      query={indexQuery}
      render={data => (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div>oi</div>
          ))}
        </div>
      )}
    ></StaticQuery>
  </Layout>
)

const indexQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date
            title
            path
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
