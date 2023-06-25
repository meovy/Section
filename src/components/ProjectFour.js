import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/ProjectFour.scss'
import { faGlobe, faNewspaper, faCube, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';
const ProjectFour = () => {

    return (
        <div id='project-4'>
            <div className='container'>
                <div className='header'>
                    <h6 className='text-muted'>Our Work</h6>
                    <h2 className='title'>Some of Our Awesome Projects - 4</h2>
                </div>
                <div className='body'>
                    <div className='card-1 card-type-1'>
                        <h2 className='card-title'>
                            <a href="#pablo">The “crazy idea that could lead to a big future commission” project.</a>
                        </h2>
                        <div className='card-footer'>
                            <FontAwesomeIcon icon={faGlobe} className='icon' /><span> </span>
                            The "Crazy idea" project
                        </div>
                    </div>
                    <div className='card-2 card-type-2'>
                        <div className='card-fashion'>
                            <div className='card-title'>
                                <a href="#pablo"><h4>The next time you're on vacation, take advantage of all the work you can get done...</h4></a>
                            </div>
                            <div className='card-footer'>
                                <FontAwesomeIcon icon={faNewspaper} className='icon'/><span> </span>
                                The "I'm on vacation" project
                            </div>
                        </div>
                    </div>
                    <div className='card-3 card-type-2'>
                        <div className='card-fashion'>
                            <div className='card-title'>
                                <a href="#pablo"><h4>The elements of Agile Project Management have been around for decades...</h4></a>
                            </div>
                            <div className='card-footer'>
                                <FontAwesomeIcon icon={faCube} className='icon'/><span> </span>
                                The "Agile Project" project
                            </div>
                        </div>
                    </div>
                    <div className='card-4 card-type-1'>
                        <h2 className='card-title'>
                            <a href="#pablo">Performing a Project Premortem</a>
                        </h2>
                        <div className='card-footer'>
                            <FontAwesomeIcon icon={faTowerBroadcast} className='icon' /><span> </span>
                            The "Premortem" project
                        </div>
                    </div>
                </div>
                <div className='footer'></div>
            </div>
        </div>
    )
}
export default ProjectFour;