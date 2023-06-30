import React from "react";
import { OurAwesomeTeam3ItemWrapper, OurAwesomeTeam3Wrapper } from "./style";

const OurAwesomeTeam3Item = (props) => {
  return (
    <OurAwesomeTeam3ItemWrapper>
      <img src={props.imgLink} alt="" />
      <div className="right-content">
        <h3>{props.name}</h3>
        <h6>{props.category}</h6>
        <p>{props.des}</p>
      </div>
    </OurAwesomeTeam3ItemWrapper>
  );
};

const OurAwesomeTeam3 = () => {
  return (
    <OurAwesomeTeam3Wrapper>
      <div className="blurr">
        <div className="container">
          <h2>The Executive Team 3</h2>
          <h4>
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </h4>
          <div className="row">
            <OurAwesomeTeam3Item
              imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/olivia.2dcd9e1f.jpg"
              name="Ariana Hazel"
              category="Fashion Designer"
              des="Happiness resides not in possessions, and not in gold, happiness
              dwells in the soul..."
            />
            <OurAwesomeTeam3Item
              imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/james.2697226e.jpg"
              name="Ryan Samuel"
              category="Financial Examiner"
              des="Today you are you! That is truer than true! There is no one alive who is you-er than you!.."
            />
          </div>
          <div className="row">
            <OurAwesomeTeam3Item
              imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/michael.660d3e04.jpg"
              name="Joshua Jackson"
              category="Landscape Architect"
              des="Success is not final, failure is not fatal: it is the courage to continue that counts..."
            />
            <OurAwesomeTeam3Item
              imgLink="	https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/emily.a0d6d13a.jpg"
              name="Nora Hazel"
              category="Legal Secretary"
              des="Do not dwell in the past, do not dream of the future, concentrate the mind..."
            />
          </div>
        </div>
      </div>
    </OurAwesomeTeam3Wrapper>
  );
};

export default OurAwesomeTeam3;