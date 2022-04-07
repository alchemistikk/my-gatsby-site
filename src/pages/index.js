import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { postLink } from '../components/layout.module.css'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  return (
      <Layout pageTitle="Home">
        {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/posts/${node.slug}`} className={postLink}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
      </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
        body
      }
    }
  }
`

export default IndexPage
