import React from "react"
import { Card, CardBody, CardTitle, Form, FormGroup, Input } from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          {" "}
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input
              type="input"
              name="email"
              placeholder="Your email address..."
            />
          </FormGroup>
          <button className="btn btn-outline-success text-upercase">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase"></CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="advert"
          style={{ width: "100%" }}
        ></img>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          {" "}
          Recent Posts
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    ></Img>
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        ></StaticQuery>
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title

            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
