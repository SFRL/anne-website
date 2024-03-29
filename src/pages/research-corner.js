import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";
import ResearchArticle from "../components/researchArticle.js";

const ResearchCorner = () => {
        const data = useStaticQuery(graphql`
          {
            description: markdownRemark(
              fields: { category: { eq: "research-corner" } }
              fileAbsolutePath: { regex: "/research.md/" }
            ) {
              id
              html
              frontmatter {
                title
                image {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                  }
                }
              }
            }
            articles: allMarkdownRemark(
              filter: {
                fields: { category: { eq: "research-corner" } }
                fileAbsolutePath: { regex: "/^(?!.*research.md)/" }
              }
              sort: { frontmatter: { year: DESC } }
            ) {
              nodes {
                html
                frontmatter {
                  title
                  author
                  date
                  in
                  year
                  link
                }
              }
            }
          }
        `);
  return (
    <Layout name="Research Corner">
      <section className="section">
        <div className="columns">
          <div className="column is-two-thirds">
            <h1 className="title">{data.description.frontmatter.title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: data.description.html }}
            ></div>
          </div>
          <div className="column is-one-third">
            <span style={{ fontSize: "300px" }}>
              <i class="fas fa-book "></i>
            </span>
          </div>
        </div>
      </section>
      <section className="section">
        {data.articles.nodes.map((article) => (
          <ResearchArticle article={article} />
        ))}
      </section>
    </Layout>
  );
};

export default ResearchCorner;

