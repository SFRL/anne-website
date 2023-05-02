import React, {useState} from "react";

const ResearchArticle = ({ article }) => {
    const [showSummary, setShowSummary] = useState(false);
    return (
      <div className="box">
        <h2 className="title is-4">{article.frontmatter.title}</h2>
        <h3 className="subtitle is-6">
          {article.frontmatter.author} ({article.frontmatter.year}) in{" "}
          {article.frontmatter.in}
        </h3>
        <div className="buttons">
          <button
            className="button is-primary"
            onClick={() => setShowSummary(!showSummary)}
          >
            {showSummary ? "Hide Summary" : "Show Summary"}
          </button>
          <a
            href={article.frontmatter.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button is-primary">Link</button>
          </a>
          {showSummary ? (
            <div dangerouslySetInnerHTML={{ __html: article.html }}></div>
          ) : undefined}
        </div>
      </div>
    );
    }

export default ResearchArticle;