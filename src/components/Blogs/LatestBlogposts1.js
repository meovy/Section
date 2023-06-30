import React from 'react';
import { BlogWrapper } from './style';

const LatestBlogposts1 = () => {
  return (
    <BlogWrapper>
      <div className='container'>
        <div className='blogs'>
          <h2>Latest Blogposts</h2>
          <div className='card-plain'>
            <img
              src='https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog4.5d876f8c.jpg'
              alt=''
            />
            <div className='enterprise'>
              <h6>Enterprise</h6>
              <h3 className='card-title'>
                Warner Music Group buys concert discovery service Songkick
              </h3>
              <p className='card-description'>
                Warner Music Group announced today it's acquiring the selected
                assets of the music platform Songkick, including its app for
                finding concerts and the company's trademark. Songkick has been
                involved in a lawsuit against the major…
              </p>
              <span className='red-more'>Read More</span>
              <p className='author'>
                by <span>Sarah Perez</span>, 2 days ago
              </p>
            </div>
          </div>

          <div className='card-plain'>
            <div className='enterprise'>
              <h6>Enterprise</h6>
              <h3 className='card-title'>
                Insticator raises $5.2M to help publishers
              </h3>
              <p className='card-description'>
                Insticator is announcing that it has raised $5.2 million in
                Series A funding. The startup allows online publishers to add
                quizzes, polls and other interactive elements (either created by
                Insticator or by the publisher themselves) to their stories.
              </p>
              <span className='red-more'>Read More</span>
              <p className='author'>
                by <span>Anthony Ha</span>, 5 days ago
              </p>
            </div>
            <img
              src='https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-blog6.595705a6.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </BlogWrapper>
  );
};

export default LatestBlogposts1;