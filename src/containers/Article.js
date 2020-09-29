import React from "react";

import { useParams } from "react-router";

import Data from "../components/data";

import { processDate } from "../components/dataValues";

function Article() {
  let { id } = useParams();

  const articleData = Data.find((article) => article.id === id);

  if (!articleData) return null; // include 404 page...

  return (
    <section className="Article">
      <header
        className="ArticleHeaderWrapper"
        style={{ backgroundImage: `url('${articleData.image.url}')` }}
      >
        <div className="ArticleHeader">
          <h1> {articleData.title} </h1>
          <p>{processDate(articleData.publishedDate)}</p>
          <p className="ArticleHeaderBlurb">{articleData.blurb}</p>
        </div>
      </header>

      <article className="ArticleBody">
        {articleData.articleText.map((article, i) => {
          switch (article.type) {
            case "p":
              return <p key={i}> {article.data} </p>;
            case "h2":
              return <h2 key={i}> {article.data} </h2>;
            case "h3":
              return <h3 key={i}> {article.data} </h3>;
          }
          return <p key={i}>{article.data}</p>;
        })}
      </article>
    </section>
  );
}

export default Article;

//const articleData = Data.find((article) => article.id === id);
// is equal to
/*
let articleData = {};
for(let i = 0; i < Data.length; i++){
  if(Data[i].id === id ){
    articleData = Data[i];
  }
}
*/
