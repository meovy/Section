import React from "react";
import { BlogItem4PostItemWrapper, BlogItem4PostWrapper } from "./style";

const BlogItem4PostItem = (props) => {
  return (
    <BlogItem4PostItemWrapper>
      <img src={props.imgLink} alt="" />
      <h6>{props.work}</h6>
      <h3>{props.title}</h3>
      <p>{props.des}</p>
      <div className="btn-read-more">Read More</div>
    </BlogItem4PostItemWrapper>
  );
};
const LatestBlogposts4 = () => {
  return (
    <BlogItem4PostWrapper>
      <h2 className="title">Latest Blogposts 4</h2>
      <BlogItem4PostItem
        imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog13.322a00b5.jpg"
        work="Fashion"
        title="Groupon Moves Into Flash Fashion"
        des=" More acquisitions for Groupon to widen the net of consumers using its
        platform for more than daily deals. Today it is announcing the
        acquisition of ideeli, a flash fashion retailer, for $43 million in..."
      />
      <BlogItem4PostItem
        imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog14.f0896a48.jpg"
        work="Entertainment"
        title="When music and technology collide"
        des=" Some might say that technology is killing the music industry. But if you look around, there’s a beautiful marriage there — the music industry is evolving every day, and artists are embracing technology in new and innovative ways..."
      />
    </BlogItem4PostWrapper>
  );
};

export default LatestBlogposts4;