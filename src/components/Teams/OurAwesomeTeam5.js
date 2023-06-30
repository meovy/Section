import React from 'react';
import { OurAwesomeTeam5ItemWrapper, OurAwesomeTeam5Wrapper } from './style';

const OurAwesomeTeam5Item = (props) => {
  return (
    <OurAwesomeTeam5ItemWrapper>
      <img src={props.avatar} alt='' />
      <h3>{props.name}</h3>
      <h6>{props.category}</h6>
      <p>{props.des}</p>
    </OurAwesomeTeam5ItemWrapper>
  );
};
const OurAwesomeTeam5 = () => {
  return (
    <OurAwesomeTeam5Wrapper>
      <div className='blurr'>
        <div className='container'>
          <h2>The Executive Team 5</h2>
          <h4>
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </h4>
          <div className='row'>
            <OurAwesomeTeam5Item
              avatar='https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/olivia.2dcd9e1f.jpg'
              name='Natalie Paisley'
              category='Credit Analyst'
              des='Very little is needed to make a happy life; it is all within yourself,
              in your way of thinking...'
            />
            <OurAwesomeTeam5Item
              avatar='https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/james.2697226e.jpg'
              name='Anthony Jackson'
              category='Desktop Publisher'
              des='Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom...'
            />
            <OurAwesomeTeam5Item
              avatar='https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/emily.a0d6d13a.jpg'
              name='Bella Audrey'
              category='Economist'
              des='For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul...'
            />
          </div>
        </div>
      </div>
    </OurAwesomeTeam5Wrapper>
  );
};

export default OurAwesomeTeam5;