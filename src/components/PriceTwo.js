import { useState } from "react";
import '../style/PriceTwo.scss'

const PriceTwo = () => {

    const [Cards, setData] = useState([
        {
            category: 'Enterprise',
            price: '$59',
            diskSpace: '10GB',
            monthlyBandWidth: '100GB',
            accounts: '20',
            subdomains: 'Unlimited ',
            status: 'info'
        },
        {
            category: 'Professional',
            price: '$29',
            diskSpace: '5GB',
            monthlyBandWidth: '50GB',
            accounts: '10',
            subdomains: 'Unlimited ',
            status: 'success'
        }, {
            category: 'Standard',
            price: '$17',
            diskSpace: '2GB',
            monthlyBandWidth: '25GB',
            accounts: '5',
            subdomains: 'Unlimited ',
            status: 'info'
        }
    ])

    return (
        <div id="pricing_2">
            <div className="container">
                <h2 className="title">Pick the best plan for you</h2>
                <div className="nav">
                    <button className="item-1">Legal Entity</button>
                    <button className="item-2">Individual</button>
                </div>
                <div className="wrapper-card">
                    {Cards.map(card => {
                        return (
                            <div className={card.status} key={card.status}>
                                <h5 className="category">{card.category}</h5>
                                <h1 className="price">{card.price}</h1>
                                <h5 className="offer">{card.diskSpace} <span>Disk Space</span></h5>
                                <hr />
                                <h5 className="offer">{card.monthlyBandWidth} <span>Monthly Bandwidth</span></h5>
                                <hr />
                                <h5 className="offer">{card.accounts} <span>Email Accounts</span></h5>
                                <hr />
                                <h5 className="offer">{card.subdomains} <span>subdomains</span></h5>
                                <button className="btn">Sign up</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PriceTwo;