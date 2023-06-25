import '../style/ProjectTwo.scss'
import card2 from '../img/project-2_opt_adp_react_thumbnail.jpg'
import card1 from '../img/project-2_opt_nuk_react_thumbnail.jpg'
import card3 from '../img/project-2_opt_pkp_react_thumbnail.jpg'

const ProjectTwo = () => {

    return (
        <div id="project-2">
            <div className="container">
                <div className="header">
                    <h6 className="text-muted">OUT WORK</h6>
                    <h2 className="title">Some of Our Awesome Products - 2</h2>
                    <p className="describe">This is the paragraph where you can write more details about your projects.
                        Keep you user engaged by providing meaningful information.</p>
                </div>
                <div className="body">
                    <div className='card'>
                        <a href='https://www.creative-tim.com/product/now-ui-kit-react?ref=nuk-pro-react-sections&_ga=2.194514349.1684623809.1687505002-1164081945.1686451068'>
                            <div className='card-img'>
                                <img alt='UI' src={card1} />
                            </div>
                        </a>
                        <a href='https://www.creative-tim.com/product/now-ui-kit-react?ref=nuk-pro-react-sections&_ga=2.194514349.1684623809.1687505002-1164081945.1686451068'>
                            <h4 className='card-title'>Now UI Kit React</h4>
                        </a>
                        <h6 className='category'>Free UI Kit</h6>
                        <p className='card-describe'>Now UI Kit React is a free Bootstrap 4, React, React Hooks and Reactstrap UI Kit provided for free by Invision and Creative Tim.
                            It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates.</p>
                    </div>
                    <div className='card'>
                        <a href='https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=nuk-pro-react-sections&_ga=2.173491491.1684623809.1687505002-1164081945.1686451068'>
                            <div className='card-img'>
                                <img alt='UI' src={card2} />
                            </div>
                        </a>
                        <a href='https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=nuk-pro-react-sections&_ga=2.173491491.1684623809.1687505002-1164081945.1686451068'>
                            <h4 className='card-title'>Argon Dashboard PRO React</h4>
                        </a>
                        <h6 className='category'>Premium Template</h6>
                        <p className='card-describe'>Argon is a completely new product built on our newest re-built from scratch framework structure that is meant to make our products more intuitive,
                            more adaptive and, needless to say, so much easier to customize.</p>
                    </div>
                    <div className='card'>
                        <a href='https://www.creative-tim.com/product/paper-kit-pro-react?ref=nuk-pro-react-sections'>
                            <div className='card-img'>
                                <img alt='UI' src={card3} />
                            </div>
                        </a>
                        <a href='https://www.creative-tim.com/product/paper-kit-pro-react?ref=nuk-pro-react-sections'>
                            <h4 className='card-title'>Paper Kit PRO React</h4>
                        </a>
                        <h6 className='category'>Premium UI Kit</h6>
                        <p className='card-describe'>Paper Kit PRO React is a Premium Bootstrap 4, Reactstrap, React, React Hooks and Paper Design UI Kit with pale colors,
                            beautiful typography and thoughtful drawings.
                            We've created it having paper and drawings in mind.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTwo;