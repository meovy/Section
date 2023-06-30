import { styled } from "styled-components";

export const BlogWrapper = styled.div`
  width: 100%;
  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
    .blogs {
      width: 83.333333%;
      margin: 0 auto;
      h2 {
        font-weight: 700;
        padding-top: 30px;
        margin-bottom: 30px;
        font-size: 2.5em;
      }
      .card-plain {
        display: flex;
        margin-bottom: 60px;
        img {
          width: 365px;
          height: 244px;
          box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
          border-radius: 0.1875rem;
          margin-right: 15px;
        }
        .enterprise {
          margin-left: 15px;
          padding-right: 15px;
          h6 {
            margin-top: 1rem;
            margin-bottom: 0;
            color: #2ca8ff;
          }
          .card-title:hover {
            text-decoration: underline !important;
          }
          .card-title {
            margin-top: 15px;
            line-height: 1.25em;
            font-size: 25px;
            font-weight: 400;
            color: #444;
            margin-bottom: 0;
            cursor: pointer;
          }
          .red-more {
            color: #9a9a9a;
            font-weight: 300;
            line-height: 1.61em;
            font-size: 1.2em;
            cursor: pointer;
          }
          .red-more:hover {
            text-decoration: underline !important;
          }
          .card-description {
            color: #9a9a9a;
            font-weight: 300;
            line-height: 1.61em;
            font-size: 1.2em;
            margin-bottom: 0;
          }
          .author {
            color: #9a9a9a;
            font-weight: 300;
            line-height: 1.61em;
            font-size: 1.2em;
            margin-bottom: 0;
            margin-top: 0.2rem;
            span {
              color: #444;
              cursor: pointer;
            }
            span:hover {
              text-decoration: underline !important;
            }
          }
        }
      }
    }
  }
`;

export const LatestBlog2Wrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 950px;
    font-weight: 700;
    padding-top: 30px;
    margin-bottom: 30px;
    font-size: 2.5em;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
`;
export const BlogItemPostWrapper = styled.div`
  margin: 10px 15px;
  width: 366px;
  img {
    width: 366px;
    height: auto;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
    border-radius: 0.1825rem;
  }
  h6 {
    color: #2ca8ff;
    margin-top: 1rem;
  }
  h5 {
    text-decoration: none;
    border-bottom: 2px solid transparent;
    color: #444;
    cursor: pointer;
    font-size: 1.3em;
    font-weight: 400;
    margin: 5px 0;
  }
  h5:hover {
    text-decoration: underline !important;
  }
  p {
    color: #9a9a9a;
    font-weight: 300;
    margin-top: 0;
    font-size: 1rem;
  }
  .red-more {
    color: #9a9a9a;
    font-weight: 300;
    line-height: 1.61em;
    font-size: 1.1em;
    cursor: pointer;
  }
  .red-more:hover {
    text-decoration: underline !important;
  }
`;

export const LatestBlogposts3ItemWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  img {
    width: 286px;
    height: 191px;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
    border-radius: 0.1875rem;
    margin-right: 20px;
  }
  h3 {
    border-bottom: 2px solid transparent;
    color: #444;
    font-weight: 400;
    font-size: 1.7rem;
    cursor: pointer;
    margin: 5px 0;
  }
  h3:hover {
    text-decoration: underline;
  }
  p {
    color: #9a9a9a;
    font-weight: 300;
    line-height: 1.61em;
    font-size: 1.2em;
    margin-top: 0;
  }
  .author {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 5px;
      box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
    }
  }
`;

export const BlogItem4PostWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 700px;
    font-weight: 700;
    padding-top: 30px;
    margin-bottom: 30px;
    font-size: 2.5em;
  }
`;
export const BlogItem4PostItemWrapper = styled.div`
  text-align: center;
  margin-bottom: 60px;
  img {
    width: 100%;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
    border-radius: 0.1875rem;
  }
  h6 {
    color: #2ca8ff;
    margin-top: 1rem;
    margin: 10px 0;
  }
  h3 {
    border-bottom: 2px solid transparent;
    color: #444;
    font-weight: 400;
    font-size: 1.7rem;
    cursor: pointer;
    margin: 5px 0;
  }
  h3:hover {
    text-decoration: underline;
  }
  p {
    color: #9a9a9a;
    font-weight: 300;
    line-height: 1.61em;
    font-size: 1.2em;
    margin-top: 0;
  }
  .btn-read-more {
    border-width: 1px;
    border-radius: 30px !important;
    padding: 11px 23px;
    background-color: #2ca8ff;
    color: #fff;
    font-weight: 400;
    font-size: 0.8571em;
    line-height: 1.35em;
    margin: 10px 1px;
    border: none;
    cursor: pointer;
    width: 130px;
    margin: 0 auto;
  }
`;

export const LatestBlogposts5Wrapper = styled.div`
  width: 100%;
  background-color: #eee;
  padding: 20px 0 50px 0;
  .container {
    max-width: 950px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      width: 950px;
      font-weight: 700;
      padding-top: 30px;
      margin-bottom: 30px;
      font-size: 2.5em;
    }
    .row {
      display: flex;
      width: 100%;
    }
  }
`;

export const LatestBlogposts5ItemWrapper = styled.div`
  width: 287px;
  background: #fff;
  margin-bottom: 30px;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
  margin-right: 30px;
  border-radius: 0.2875rem;
  overflow: hidden;
  img {
    width: 100%;
  }
  h6 {
    color: #2ca8ff;
    margin-top: 1rem;
    margin: 10px 0;
    margin-left: 10px;
    margin-right: 10px;
  }
  h5 {
    border-bottom: 2px solid transparent;
    color: #444;
    font-weight: 400;
    font-size: 1.1rem;
    cursor: pointer;
    margin: 5px 0;
    margin-right: 10px;
    margin-left: 10px;
  }
  h5:hover {
    text-decoration: underline;
  }
  p {
    color: #9a9a9a;
    font-weight: 300;
    line-height: 1.61em;
    font-size: 1.2em;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 0;
  }
  .author-wrapper {
    display: flex;
    align-items: center;
    margin-left: 10px;
    color: #9a9a9a;
    margin-bottom: 10px;
    img {
      width: 30px !important;
      height: 30px !important;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 5px;
      box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
    }
  }
`;