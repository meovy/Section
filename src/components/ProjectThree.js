import '../style/ProjectThree.scss'
import imgOneRight from '../img/project3.020d3e2b.jpg'
import imgTwoRight from '../img/project3.ce34f1f1.jpg'
import imgOneLeft from '../img/project3.e2c5e920.jpg'
import imgTwoLeft from '../img/project3.9447fc56.jpg'

const ProjectThree = () => {

    return (
        <div id='project-3'>
            <div className='container'>
                <div className='header'>
                    <h6 className='text-muted'>OUR WORK</h6>
                    <h2 className='title'>Some of Our Awesome Projects - 3</h2>
                </div>
                <div className='body'>
                    <div className='card-left'>
                        <img alt='img-left' src={imgOneLeft} />
                        <p className='blockquote'>"Amber Interiors is available to assist in all aspects of a project
                            from start to finish including consulting with Architects and Builders"</p>
                    </div>
                    <div className='card-right'>
                        <img alt='img-right' src={imgOneRight} />
                        <h6 className='category'>Design</h6>
                        <h4 className='card-title'>Coco Kelley</h4>
                        <p className='describe'>Amber Lewis is interior design blog takes you inside the creative workings of her Los Angeles-based studio.
                            Keep an eye on this website for an industry insider is point of view.</p>
                    </div>
                    <div className='card-left'>
                        <img alt='img-left' src={imgTwoLeft} />
                        <p className='blockquote'>"We provide a simple, approachable way to decorate your desired space with ease.
                            Each e-décor is completely individualized"</p>
                    </div>
                    <div className='card-right'>
                        <img alt='img-right' src={imgTwoRight} />
                        <h6 className='category'>E-Decor</h6>
                        <h4 className='card-title'>Red Trad</h4>
                        <p className='describe'>We designed this new build family home located in Santa Monica with a mission to make the large size of the property,
                            feel cozy, collected, and unique.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectThree;