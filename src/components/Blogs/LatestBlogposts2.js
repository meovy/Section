import React from "react";
import { BlogItemPostWrapper, LatestBlog2Wrapper } from "./style";

const BlogItemPost = (props) => {
  return (
    <BlogItemPostWrapper>
      <img src={props.imgLink} alt="" />
      <h6 className="text-info">{props.textInfo}</h6>
      <h5 className="card-title">{props.cardTitle}</h5>
      <p className="card-description">
        {props.descriotion} <span className="red-more">Read More</span>
      </p>
    </BlogItemPostWrapper>
  );
};

const LatestBlogposts2 = () => {
  return (
    <LatestBlog2Wrapper>
      <h2 className="title">Latest Blogposts 2</h2>
      <div className="row">
        <BlogItemPost
          imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog7.637fb50e.jpg"
          textInfo="Enterprise"
          cardTitle="Alexa brings hands-free TV to more devices"
          descriotion="Alexa's latest trick is offering a hands-free TV viewing experience,
          that will allow consumers to turn on or off their television, change
          inputs, fast forward, rewind and more, without having to first invoke a
          specific skill, or even press a button on their remote."
        />
        <BlogItemPost
          imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog9.ddefd427.jpg"
          textInfo="M&A"
          cardTitle="Uber, Yandex combine ridesharing and UberEATS in $3.72B. JV"
          descriotion="As Uber works through a huge amount of internal management turmoil, the company is also consolidating and rationalizing more of its international business. Today, the company announced it will be combining its rides-on-demand business and UberEATS. "
        />
      </div>
      <div className="row">
        <BlogItemPost
          imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog16.858a2d56.jpg"
          textInfo="Music"
          cardTitle="The Affect Music Has On Different Teens"
          descriotion="...
          Music
          The Affect Music Has On Different Teens
          Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music have many ways of leaving an impact on someone."
        />
        <BlogItemPost
          imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog15.4561d7e3.jpg"
          textInfo="Broadcasting"
          cardTitle="Radio networks to broadcast a common radio format"
          descriotion="Radio broadcasting is a unidirectional wireless transmission over radio waves intended to reach a wide audience. Stations can be linked in radio networks to broadcast a common radio format. "
        />
      </div>
    </LatestBlog2Wrapper>
  );
};

export default LatestBlogposts2;