import { useState } from "react";
import jame from '../img/james.2697226e.jpg';
import michael from '../img/michael.660d3e04.jpg';
import olivia from '../img/olivia.2dcd9e1f.jpg';
import '../style/Client.scss'

const TestimonialsTwo = () => {
    let [cards] = useState([
        {
            img: jame,
            name: 'Andrew John', job: 'Loan Counselor',
            maxim: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`
        },
        {
            img: michael,
            name: 'Zoe Gabriella',
            job: 'Interpreter OR Translator',
            maxim: `"Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend."
            `
        },
        {
            img: olivia,
            name: 'Joshiah Luke',
            job: 'HR Specialist',
            maxim: `"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails."`
        }
    ])
    return (
        <div className="wrapper-cards" id="testimonial">
            <div className="container">
                <h2 className="title">What Clients Say</h2>
                {cards.map(card => {
                    return (
                        <div className="card">
                            <div className="card-img">
                                <img src={card.img} alt="card" />
                            </div>
                            <h3 className="card-title">{card.name}</h3>
                            <h6 className="card-job">{card.job}</h6>
                            <p className="card-maxim">{card.maxim}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TestimonialsTwo;