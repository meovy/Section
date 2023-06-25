import { useState } from "react";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style/PriceFour.scss'
const PriceFour = () => {
    const [cards, setData] = useState([
        {
            category: 'Starter',
            price: 10,
            storage: '1000 MB',
            email: '3 email',
            dataBase: '5 Databases',
            status: 'error'
        },
        {
            category: 'Professional',
            price: '40',
            storage: 'Unlimited MB',
            email: 'Unlimited emails',
            dataBase: 'Full Support',
            status: 'info'
        }, {
            category: 'Basic',
            price: '20',
            storage: '1000 MB',
            email: '3 email',
            dataBase: 'No Support',
            status: 'warn'
        }
    ])
    return (
        <div id='pricing-4'>
            <div className='container'>
                <div className='header'>
                    <h2 className='title'>Pick the best plan for you</h2>
                    <p className='description'>You have Free Unlimited Updates and Premium Support on each package.</p>
                </div>
                <div className='wrapper-card'>
                    {cards.map(card => {
                        return (
                            <>
                                {card.status === 'error' &&
                                    <div className={card.status}>
                                        <h5 className='category'>{card.category}</h5>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon={faHeadphonesSimple} className='icon-error' />
                                        </div>
                                        <h3 className='price'>${card.price}</h3>
                                        <p className='storage'>{card.storage}</p>
                                        <p className='email'>{card.email}</p>
                                        <p className='dataBase'>{card.dataBase}</p>
                                        <button className='btn'>Get it Now</button>
                                    </div>}
                                {card.status === 'info' &&
                                    <div className={card.status}>
                                        <h5 className='category'>{card.category}</h5>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon={faHeadphonesSimple} className='icon-info' />
                                        </div>
                                        <h3 className='price'>${card.price}</h3>
                                        <p className='storage'>{card.storage}</p>
                                        <p className='email'>{card.email}</p>
                                        <p className='dataBase'>{card.dataBase}</p>
                                        <button className='btn'>Current Plan</button>
                                    </div>
                                }
                                {card.status === 'warn' &&
                                    <div className={card.status}>
                                        <h5 className='category'>{card.category}</h5>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon={faHeadphonesSimple} className='icon-warn' />
                                        </div>
                                        <h3 className='price'>${card.price}</h3>
                                        <p className='storage'>{card.storage}</p>
                                        <p className='email'>{card.email}</p>
                                        <p className='dataBase'>{card.dataBase}</p>
                                        <button className='btn'>Upgrade Plan</button>
                                    </div>
                                }
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default PriceFour;