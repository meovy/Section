import React from "react";
import { OurAwesomeTeamWrapper, WrapperItemOurAwesomeTeam1 } from "./style";

const Item = (props) => {
  return (
    <WrapperItemOurAwesomeTeam1>
      <img src={props.avatar} alt="" />
      <h3>{props.name}</h3>
      <h6>{props.job}</h6>
      <p>{props.des}</p>
    </WrapperItemOurAwesomeTeam1>
  );
};

const OurAwesomeTeam1 = () => {
  return (
    <OurAwesomeTeamWrapper>
      <h2 className="title">Our Awesome Team 1</h2>
      <h4 className="description">
        This is the paragraph where you can write more details about your team.
        Keep you user engaged by providing meaningful information.
      </h4>

      <div className="row">
        <Item
          avatar="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/james.2697226e.jpg"
          name="Oliver Atticus"
          job="Web Developer"
          des="If you want to know what a man's like, take a good look at how he treats
          his inferiors, not his equals."
        />
        <Item
          avatar="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/michael.660d3e04.jpg"
          name="Smith College"
          job="CEO / Co-Founder"
          des="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        />
      </div>

      <div className="row">
        <Item
          avatar="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/emily.a0d6d13a.jpg"
          name="Sophia Madison"
          job="Entrepreneur"
          des="Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
        />
        <Item
          avatar="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/olivia.2dcd9e1f.jpg"
          name="Emily Chloe"
          job="Entrepreneur"
          des="You know you're in love when you can't fall asleep because reality is finally better than your dreams."
        />
      </div>
    </OurAwesomeTeamWrapper>
  );
};

export default OurAwesomeTeam1;