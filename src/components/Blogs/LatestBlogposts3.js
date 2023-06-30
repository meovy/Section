import React from "react";
import { LatestBlog2Wrapper, LatestBlogposts3ItemWrapper } from "./style";

const LatestBlogposts3Item = (props) => {
  return (
    <LatestBlogposts3ItemWrapper>
      <img src={props.imgLink} alt="" />
      <div>
        <h3>{props.title}</h3>
        <p>{props.des}</p>
        <div className="author">
          <img src={props.avatar} alt="" />
          <span>{props.nameAuthor}</span>
        </div>
      </div>
    </LatestBlogposts3ItemWrapper>
  );
};

const LatestBlogposts3 = () => {
  return (
    <LatestBlog2Wrapper>
      <h2 className="title">Latest Blogposts 3</h2>
      <LatestBlogposts3Item
        imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog10.217f99db.jpg"
        title="Rover raised $65 million for pet sitting"
        des=" Finding temporary housing for your dog should be as easy as renting an
        Airbnb. That's the idea behind Rover, which raised $65 million to
        expand its pet sitting and dog-walking businesses.. Read More"
        avatar="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/olivia.2dcd9e1f.jpg"
        nameAuthor="Katie Roof"
      />
      <LatestBlogposts3Item
        imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog11.9b289981.jpg"
        title="MateLabs mixes machine learning with IFTTT"
        des="If you've ever wanted to train a machine learning model and integrate it with IFTTT, you now can with a new offering from MateLabs. MateVerse, a platform where novices can spin out machine..."
        avatar="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/james.2697226e.jpg"
        nameAuthor="John Mannes"
      />
      <LatestBlogposts3Item
        imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog12.512d38d6.jpg"
        title="US venture investment ticks up in Q2 2021"
        des="Venture investment in U.S. startups rose sequentially in the second quarter of 2021, boosted by large, late-stage financings and a few outsized early-stage rounds in tech and healthcare.."
        avatar="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/michael.660d3e04.jpg"
        nameAuthor="Devin Coldewey"
      />
    </LatestBlog2Wrapper>
  );
};

export default LatestBlogposts3;