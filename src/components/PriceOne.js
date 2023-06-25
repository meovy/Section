import { useState } from "react";
import { faPowerOff, faGem, faTowerBroadcast, faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style/PriceOne.scss'

const PriceOne = () => {

    const [cardPrice, setCardPrice] = useState([
        {
            category: 'Bravo Pack',
            price: '$10',
            describe: 'Complete documentation',
            endow: 'Working materials in Sketch',
            status: 'warning'
        },
        {
            category: 'Alpha Pack',
            price: '$67',
            describe: 'Working materials in EPS',
            endow: '6 months access to the library',
            status: 'info'
        },
        {
            category: 'Charlie Pack',
            price: '$69',
            describe: 'Working materials in PSD',
            endow: '1 year access to the library',
            status: 'success'
        },
        {
            category: 'Extra Pack',
            price: '$159',
            describe: 'Complete documentation',
            endow: '2GB cloud storage',
            status: 'error'
        }
    ])
    return (
        <div id="pricing">
            <div className="container">
                <h2>Pick the best plan for you</h2>
                <h4>You have Free Unlimited Updates and Premium Support on each package.</h4>
                <div className="wrapper-card">
                    {cardPrice.map(card => {
                        return (
                            <div className={card.status} key={card.status}>
                                <h5 className="category">{card.category}</h5>
                                <div className="icon">
                                    {card.status === 'warning' && <FontAwesomeIcon icon={faPowerOff} className="icon-warning" />}
                                    {card.status === 'info' && <FontAwesomeIcon icon={faGem} className="icon-info" />}
                                    {card.status === 'success' && <FontAwesomeIcon icon={faTowerBroadcast} className="icon-success" />}
                                    {card.status === 'error' && <FontAwesomeIcon icon={faAtom} className="icon-error" />}
                                </div>
                                <h3 className="price">{card.price}</h3>
                                <p>{card.describe}</p>
                                <hr className="hr"/>
                                <p>{card.endow}</p>
                                <button className="btn">Add to Cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default PriceOne;