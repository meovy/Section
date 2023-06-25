import { useState } from "react";
import '../style/PriceFive.scss';

const PriceFive = () => {
    const [cards, setCards] = useState([
        {
            category: 'Plus',
            price: 100,
            projects: 15,
            storage: '5GB',
            users: 'Unlimited',
            tracking: 'No time',
            type: 1
        },
        {
            category: 'Maximum',
            price: 120,
            projects: 25,
            storage: '15GB',
            users: 'Unlimited',
            tracking: 'No time',
            type: 1
        },
        {
            category: 'Standard',
            price: 20,
            projects: 5,
            storage: '2GB',
            users: 'Unlimited',
            tracking: 'No time',
            type: 2
        },
        {
            category: 'Premium',
            price: 60,
            projects: 7,
            storage: '3GB',
            users: 'Unlimited',
            tracking: 'No time',
            type: 2
        }
    ])
    const [active, setActive] = useState(true);
    const handleButton = (e) => {
        e.currentTarget.classList.toggle('active-btn');
    }
    const handleClickexpensive = (e) => {
        setActive(true)
    }
    const handleClickcheaper = () => {
        setActive(false);
    }
    return (
        <div id="pricing-5">
            <div className="container">
                <div className="wrapper">
                    <div className="content">
                        <h2 className="title">Choose a plan for your next project</h2>
                        <div className="nav" onClick={handleButton}>
                            <button className='btn btn-1' onClick={handleClickexpensive}>Expensive</button>
                            <button className='btn btn-2' onClick={handleClickcheaper}>Cheaper</button>
                        </div>
                        <p className="description">You have Free Unlimited Updates and Premium Support on each package.
                            You also have 20 days to request a refund if you're not happy with your purchase.</p>
                    </div>
                    <div className="cards">
                        {active ?
                            <div className="wrapper-card">
                                {cards.map(card => {
                                    return (
                                        card.type === 1 &&
                                        <div className="card">
                                            <h5 className="category">{card.category}</h5>
                                            <h1 className="price"><small className="dollar">$</small>{card.price}</h1>
                                            <p className="project"><b>{card.projects}</b> Projects</p>
                                            <p className="storage"><b>{card.storage}</b> Storage</p>
                                            <p className="user"><b>{card.users}</b> users</p>
                                            <p className="tracking"><b>{card.tracking}</b> tracking</p>
                                            <button className="btn-buy">Buy Now!</button>
                                        </div>
                                    )
                                })}
                            </div>
                            :
                            <div className="wrapper-card">
                                {cards.map(card => {
                                    return (
                                        card.type === 2 &&
                                        <div className="card">
                                            <h5 className="category">{card.category}</h5>
                                            <h1 className="price"><small className="dollar">$</small>{card.price}</h1>
                                            <p className="project"><b>{card.projects}</b> Projects</p>
                                            <p className="storage"><b>{card.storage}</b> Storage</p>
                                            <p className="user"><b>{card.users}</b> users</p>
                                            <p className="tracking"><b>{card.tracking}</b> tracking</p>
                                            <button className="btn-buy">Buy Now!</button>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PriceFive;