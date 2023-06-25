import { useState } from "react";
import '../style/ProjectOne.scss'
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectOne = () => {
    const nav = ['All', 'History', 'Satire', 'Fiction']
    const [type, setType] = useState('All')
    const data = [
        {
            class: 'card-1',
            category: 'History',
            title: 'The City Lost & Found',
            describe: 'Developed on the occasion of an exhibition of the same name, The City Lost & Found: Capturing New York...'
        },
        {
            class: 'card-2',
            category: 'Satire',
            title: 'A Confederacy of Dunces',
            describe: 'Satires, in the most basic definition, are works making fun of some sort of person or institution...'
        },
        {
            class: 'card-3',
            category: 'Fiction',
            title: 'The Sun Also Rises',
            describe: 'The most commonly read works are works of fiction. Fiction books are ones that have been made up...'
        },
        {
            class: 'card-4',
            category: 'Basic Civitas',
            title: 'The Right Mistake',
            describe: 'Living in South Central L.A., Socrates Fortlow is a sixty-year-old ex-convict, still strong enough to kill men with...'
        }
    ]
    return (
        <div id="project-1">
            <div className="container">
                <div className="header">
                    <h2 className="title">Some of Our Awesome Products - 1</h2>
                    <ul className="nav">
                        {nav.map((item, index) => (
                            <li
                                key={index}
                                className={type === item && 'nav-style'}
                                onClick={() => setType(item)}
                            >{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="body">
                    {data.map((card, index) => (
                        <div key={index} className={card.class}>
                            <h5 className="category">{card.category}</h5>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="describe">{card.describe}</p>
                            {card.class === 'card-1' && (
                                <button className="btn">
                                    <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                                    <span> </span>View Book</button>
                            )}
                            {card.class === 'card-2' && (
                                <button className="btn-2">
                                    <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                                    <span> </span>View More</button>
                            )}
                            {card.class === 'card-3' && (
                                <button className="btn-3">
                                    <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                                    <span> </span>Read Now</button>
                            )}
                            {card.class === 'card-4' && (
                                <button className="btn">
                                    <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                                    <span> </span>Read Now</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectOne