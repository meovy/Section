import '../style/ProjectFive.scss'
import { faComment, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChartPie, faPenRuler, faChartColumn, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ProjectFive = () => {

    return (
        <div id='project-5'>
            <div className='container'>
                <div className='header'>
                    <h2 className='title'>Some of Our Awesome Projects - 5</h2>
                    <p className='description'>This is the paragraph where you can write more details about your projects.
                        Keep you user engaged by providing meaningful information.</p>
                </div>
                <div className='body'>
                    <div className='card card-img-1'>
                        <h2 className='card-title'>Social Analytics</h2>
                        <p className='card-describe'>Insight to help you create, connect, and convert.
                            Understand Your Audience's Interests, Influence, Interactions, and Intent.
                            Discover emerging topics and influencers to reach new audiences.</p>
                        <button className='btn'>ANALYTICS</button>
                    </div>
                    <div className='info'>
                        <div className='info-item'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faComment} className='icon-error'/>
                            </div>
                            <div className='content'>
                                <h4 className='info-title'>Listen to Social Conversations</h4>
                                <p className='info-describe'>Gain access to the demographics, psychographics, and
                                    location of unique people who talk about your brand.</p>
                            </div>
                        </div>
                        <div className='info-item'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faChartPie} className='icon-error'/>
                            </div>
                            <div className='content'>
                                <h4 className='info-title'>Performance Analyze</h4>
                                <p className='info-describe'>Unify data from Facebook, Instagram, Twitter, LinkedIn, and
                                    Youtube to gain rich insights from easy-to-use reports.</p>
                            </div>
                        </div>
                        <div className='info-item'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faPenRuler} className='icon-error'/>
                            </div>
                            <div className='content'>
                                <h4 className='info-title'>Social Conversions</h4>
                                <p className='info-describe'>Track actions taken on your website that originated from social,
                                    and understand the impact on your bottom line.</p>
                            </div>
                        </div>
                    </div>
                    <div className='hr'></div>
                    <div className='info'>  
                        <div className='info-item'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faUser} className='icon-warn'/>
                            </div>
                            <div className='content'>
                                <h4 className='info-title'>Work With Any Team</h4>
                                <p className='info-describe'>Whether it's for work or even the next family vacation, Trello helps your team.</p>
                            </div>
                        </div>
                        <div className='info-item'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faChartColumn} className='icon-warn'/>
                            </div>
                            <div className='content'>
                                <h4 className='info-title'>A Productivity Platform</h4>
                                <p className='info-describe'>Integrate the apps your team already uses directly into your workflow.</p>
                            </div>
                        </div>
                        <div className='info-item'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faArrowsRotate} className='icon-warn'/>
                            </div>
                            <div className='content'>
                                <h4 className='info-title'>Always In Sync</h4>
                                <p className='info-describe'>No matter where you are, Trello stays in sync across all of your devices.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card card-img-2'>
                        <h2 className='card-title'>Trello lets you work.</h2>
                        <p className='card-describe'>Trello's boards, lists, and cards enable you to organize and
                            prioritize your projects in a fun, flexible and rewarding way.</p>
                        <button className='btn'>TRELLO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectFive;