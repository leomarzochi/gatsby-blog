import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import Sidebar from "../components/sidebar"

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
                  key={node.id}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  tags={node.frontmatter.tags}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              ))}
            </div>
          )}
        ></StaticQuery>
      </Col>
      <Col md="4">
        <Sidebar></Sidebar>
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
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
