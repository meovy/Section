import React from "react";
import { LatestBlogposts5ItemWrapper, LatestBlogposts5Wrapper } from "./style";
const LatestBlogposts5Item = (props) => {
  return (
    <LatestBlogposts5ItemWrapper>
      <img src={props.imgLink} alt="" />
      <h6>{props.categoty}</h6>
      <h5>{props.title}</h5>
      <p>{props.des}</p>
      <div className="author-wrapper">
        <img
          src="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/julie.c03ce88e.jpg"
          alt=""
        />
        <span>Mike John</span>
      </div>
    </LatestBlogposts5ItemWrapper>
  );
};
const LatestBlogposts5 = () => {
  return (
    <LatestBlogposts5Wrapper>
      <div className="container">
        <h2 className="title">Latest Blogposts 5</h2>
        <div className="row">
          <LatestBlogposts5Item
            imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog2.02d0bdeb.jpg"
            categoty="Features"
            title="That's One Way To Ditch Your Passenger"
            des="As near as we can tell, this guy must have thought he was going over
            backwards and tapped the rear..."
          />
          <LatestBlogposts5Item
            imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog18.2e72d78e.jpg"
            categoty="Animals"
            title="Shark Week: How to Watch It Like a Scientist"
            des="Just when you thought it was safe to turn on your television, the Discovery Channel's 'Shark Week'..."
          />
          <LatestBlogposts5Item
            imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog17.91ba834d.jpg"
            categoty="Cars"
            title="Who's Afraid of the Self-Driving Car?"
            des="It's been 60 years since the cover of Popular Mechanics magazine gave us the promise of flying cars..."
          />
        </div>
      </div>
    </LatestBlogposts5Wrapper>
  );
};

export default LatestBlogposts5;