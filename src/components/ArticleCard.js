import React from "react";

import { Link } from "react-router-dom";

import { days, months } from "./dataValues";

function ArticleCard({ articleData }) {
  const date = new Date(articleData.publishedDate);
  //console.log("date: ", date);
  const dayOfWeek = date.getDay(); //gives number
  const calendarDate = date.getDate();
  const month = date.getMonth(); //also gives number
  const year = date.getFullYear();

  return (
    <div className="ArticleCard">
      <div className="ArticleCardImage">
        <img src={articleData.image.url} alt={articleData.image.alt} />
      </div>
      <div className="ArticleCardText">
        <h2> {articleData.title} </h2>
        <p>{`${days[dayOfWeek]}, ${months[month]} ${calendarDate}, ${year}`}</p>
        <p> {articleData.blurb} </p>
        <Link to={`/article/${articleData.id}`} style={{ fontWeight: `bold` }}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
