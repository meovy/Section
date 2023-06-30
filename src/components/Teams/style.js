import { styled } from 'styled-components';

export const OurAwesomeTeamWrapper = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    text-align: center;
    font-weight: 700;
    padding-top: 30px;

    font-weight: 700;
    font-size: 2.5em;
  }
  .description {
    color: #9a9a9a;
    font-weight: 300;
    font-size: 1.5em;
    line-height: 1.45em;
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }
  .row {
    display: flex;
    margin: 40px 10pxpx;
  }
`;

export const WrapperItemOurAwesomeTeam1 = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 15px;
  img {
    width: 130px;
    height: 130px;
    border-radius: 65px;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
  }
  h3 {
    font-weight: 400;
    font-size: 1.825em;
    margin-bottom: 0.75rem;
    margin-top: 5px;
  }
  h6 {
    text-transform: capitalize;
    font-weight: 700;
    color: #2ca8ff !important;
    margin-bottom: 0.5rem;
    margin-top: 0;
    font-size: 0.8rem;
  }
  p {
    color: #9a9a9a;
    font-weight: 300;
    line-height: 1.61em;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2em;
    text-align: center;
  }
`;

export const OurAwesomeTeam2Wrapper = styled(OurAwesomeTeamWrapper)`
  .mtop-20 {
    margin-top: 40px;
  }
`;

export const OurAwesomeTeam2ItemWrapper = styled.div`
  margin: 50px 20px;
  img {
    width: 350px;
    height: 234px;
    border-radius: 0.1875rem;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
  }
  h4 {
    margin: 10px 0 0;
    font-size: 1.5em;
    font-weight: 400;
    text-align: center;
  }
  h6 {
    text-transform: capitalize;
    font-weight: 700;
    color: #9a9a9a;
    margin-top: 5px;
    text-align: center;
  }
`;
export const OurAwesomeTeam3Wrapper = styled.div`
  width: 100%;
  height: 932px;
  background-image: url('https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/bg21.5a9a9871.jpg');
  .blurr {
    background-color: rgb(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 1140px;
    padding-top: 30px;
    h2 {
      text-align: center;
      font-weight: 700;
      padding-top: 30px;
      color: #fff;
      font-weight: 700;
      font-size: 2.5em;
      margin-bottom: 0px;
    }
    h4 {
      color: hsla(0, 0%, 100%, 0.8);
      font-size: 1.5em;
      line-height: 1.45em;
      margin-top: 30px;
      margin-bottom: 15px;
      text-align: center;
      width: 800px;
      font-weight: 300;
    }
    .row {
      display: flex;
    }
  }
`;

export const OurAwesomeTeam3ItemWrapper = styled.div`
  width: 540px;
  height: 207px;
  background: white;
  border-radius: 0.2rem;
  margin: 40px 15px;
  display: flex;
  text-align: center;
  overflow: hidden;
  img {
    height: 100%;
  }
  .right-content {
    padding: 20px;
    h3 {
      font-weight: 400;
      font-size: 1.825em;
      margin-bottom: 0.75rem;
      margin-top: 5px;
    }
    h6 {
      text-transform: capitalize;
      font-weight: 700;
      color: #2ca8ff !important;
      margin-bottom: 0.5rem;
      margin-top: 0;
      font-size: 0.8rem;
    }
    p {
      color: #9a9a9a;
      font-weight: 300;
      line-height: 1.61em;
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.2em;
      text-align: center;
    }
  }
`;

export const OurAwesomeTeam4Wrapper = styled(OurAwesomeTeamWrapper)`
  margin-top: 6rem;
`;
export const OurAwesomeTeam4ItemWrapper = styled(OurAwesomeTeam3ItemWrapper)`
  width: 570px;
  margin-top: 4rem;
  img {
    width: 207px;
    height: 207px;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
    border-radius: 0.2rem;
  }
  .col {
    text-align: start;
    margin-left: 2rem;
    h4 {
      margin-top: 1rem;
      font-size: 1.5em;
      font-weight: 400;
      color: #2c2c2c;
      margin-bottom: 0.5rem;
    }
    h6 {
      text-transform: capitalize;
      font-weight: 700;
      color: #9a9a9a;
      margin-top: 1px;
      margin-bottom: 0rem;
    }
    p {
      color: #9a9a9a;
      font-weight: 300;
      width: 292px;
      font-size: 1.2em;
    }
  }
`;
export const OurAwesomeTeam5Wrapper = styled.div`
  width: 100%;
  height: 932px;
  margin-top: 8rem;
  background-image: url('https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/bg9.32833923.jpg');
  background-size: cover;
  .blurr {
    background-color: rgb(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      width: 1140px;
      padding-top: 30px;
      h2 {
        text-align: center;
        font-weight: 700;
        padding-top: 30px;
        color: #fff;
        font-weight: 700;
        font-size: 2.5em;
        margin-bottom: 0px;
      }
      h4 {
        color: hsla(0, 0%, 100%, 0.8);
        font-size: 1.5em;
        line-height: 1.45em;
        margin-top: 30px;
        margin-bottom: 15px;
        text-align: center;
        width: 800px;
        font-weight: 300;
      }
      .row {
        display: flex;
      }
    }
  }
`;

export const OurAwesomeTeam5ItemWrapper = styled.div`
  width: 350px;
  height: 350px;
  background-color: white;
  border-radius: 0.2rem;
  margin: 100px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-top: -85px;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
  }
  h3 {
    font-weight: 400;
    font-size: 1.825em;
    margin-bottom: 0.75rem;
    margin-top: 10px;
  }
  h6 {
    text-transform: capitalize;
    font-weight: 700;
    color: #2ca8ff !important;
    margin-bottom: 0.5rem;
    margin-top: 0;
    font-size: 0.8rem;
  }
  p {
    color: #9a9a9a;
    font-weight: 300;
    line-height: 1.61em;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2em;
    text-align: center;
  }
`;