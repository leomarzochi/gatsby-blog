import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>home page</h1>
    <Row>
      <Col md="8">
        <StaticQuery
          query={indexQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  path={node.frontmatter.path}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              ))}
            </div>
          )}
        ></StaticQuery>
      </Col>
      <Col md="4">
        <div
          style={{ width: "100%", height: "100%", background: "#ccc" }}
        ></div>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "DD/MM/YYYY")
            title
            path
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
