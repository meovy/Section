import React from 'react';
import { OurAwesomeTeam4ItemWrapper, OurAwesomeTeam4Wrapper } from './style';

const OurAwesomeTeam4Item = (props) => {
  return (
    <OurAwesomeTeam4ItemWrapper>
      <img src={props.avatar} alt='' />
      <div className='col'>
        <h4>{props.name}</h4>
        <h6>{props.category}</h6>
        <p>{props.des}</p>
      </div>
    </OurAwesomeTeam4ItemWrapper>
  );
};

const OurAwesomeTeam4 = () => {
  return (
    <OurAwesomeTeam4Wrapper>
      <h2 className='title'>The Executive Team 4</h2>
      <h4 className='description'>
        This is the paragraph where you can write more details about your team.
        Keep you user engaged by providing meaningful information.
      </h4>
      <div className='row'>
        <OurAwesomeTeam4Item
          avatar='https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/olivia.2dcd9e1f.jpg'
          name='Ella Evelyn'
          category='Air Crew Member'
          des='Think in the morning. Act in the noon. Eat in the evening. Sleep in
          the night......'
        />
        <OurAwesomeTeam4Item
          avatar='https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/emily.a0d6d13a.jpg'
          name='Mila Skylar'
          category='Architect'
          des='Love cures people - both the ones who give it and the ones who receive it...'
        />
      </div>
      <div className='row'>
        <OurAwesomeTeam4Item
          avatar='https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/james.2697226e.jpg'
          name='Daniel Carter'
          category='Aviation Inspector'
          des='Keep your face always toward the sunshine - and shadows will fall behind you...'
        />
        <OurAwesomeTeam4Item
          avatar='https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/michael.660d3e04.jpg'
          name='Dylan Wyatt'
          category='Conservation Scientist'
          des={`There is only one corner of the universe you can be certain of improving, and that's your own self...`}
        />
      </div>
    </OurAwesomeTeam4Wrapper>
  );
};

export default OurAwesomeTeam4;