import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import { postLink } from "../../components/layout.module.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/posts/${node.slug}`} className={postLink}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>{node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
