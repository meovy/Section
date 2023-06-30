import React from "react";
import { OurAwesomeTeam2ItemWrapper, OurAwesomeTeam2Wrapper } from "./style";

const OurAwesomeTeam2Item = (props) => {
  return (
    <OurAwesomeTeam2ItemWrapper>
      <img src={props.imgLink} alt="" />
      <h4>{props.name}</h4>
      <h6>{props.owner}</h6>
    </OurAwesomeTeam2ItemWrapper>
  );
};

const OurAwesomeTeam2 = () => {
  return (
    <OurAwesomeTeam2Wrapper>
      <h2 className="title">The Executive Team 2</h2>
      <h4 className="description">
        This is the paragraph where you can write more details about your team.
        Keep you user engaged by providing meaningful information.
      </h4>

      <div className="row">
        <OurAwesomeTeam2Item
          imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-profile1.b6fdb6c1.jpg"
          name="Sofia Scarlett"
          owner="Account Manager"
        />
        <div className="mtop-20">
          <OurAwesomeTeam2Item
            imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-profile2.7d0f7b34.jpg"
            name="Lucas Jacob"
            owner="Aerospace Engineer"
          />
        </div>
        <OurAwesomeTeam2Item
          imgLink="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card-profile3.a61ac5af.jpg"
          name="Amelia Charlotte"
          owner="Photographer"
        />
      </div>
    </OurAwesomeTeam2Wrapper>
  );
};

export default OurAwesomeTeam2;