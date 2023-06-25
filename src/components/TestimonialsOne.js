import { useState } from "react";
import james from '../img/james.2697226e.jpg';
import michael from '../img/michael.660d3e04.jpg';
import olivia from '../img/olivia.2dcd9e1f.jpg'
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style/Alpha.scss';

const Testimonials = () => {
    let [users, setUsers] = useState([
        {
            img: michael,
            describe: 'The networking at Web Summit is like no other European tech conference.',
            name: 'Michael Elijah',
            category: '@Michaelelijah'
        },
        {
            img: olivia,
            describe: 'The connections you make at Web Summit are unparalleled, we met users all over the world.',
            name: 'Olivia Harper',
            category: '@Oliviaharper'
        },
        {
            img: james,
            describe: 'Web Summit will increase your appetite, your inspiration, and your network.',
            name: 'James Logan',
            category: '@Jameslogan'
        }
    ])
    return (
        <div id="Testimonial_1">
            <div className="container">
                <div className="header">
                    <h4 className="title">What is ALPHA</h4>
                    <p className="description">
                        If you are selected for ALPHA you will also get 3 tickets,
                        opportunity to access Investor Office Hours and
                        Mentor Hours and much more all for €850.
                    </p>
                </div>
                <div className="cards">
                    {users.map(card => {
                        return (
                            <div className="wrapper-card">
                                <div className="card">
                                    <div className="card-img">
                                        <img src={card.img} />
                                    </div>
                                    <p className="card-describe">{card.describe}</p>
                                    <div className="card-icon">
                                        <FontAwesomeIcon icon={faQuoteRight} className="icon"/>
                                    </div>
                                    <h4 className="card-title">{card.name}</h4>
                                    <p className="category">{card.category}</p>
                                </div>
                            </div>

                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Testimonials;