import '../style/PriceThree.scss'
const PriceThree = () => {

    return (
        <div id="pricing-3">
            <div className="container">
                <h2 className="title">Pick the best plan for you</h2>
                <h4 className="description">You have Free Unlimited Updates on each package.</h4>
                <div className="wrapper-card">
                    <div className="card-1">
                        <h5 className="job">Freelance</h5>
                        <h1 className="price">
                            <small className="dollar">$</small>
                            29
                            <small className="month">/MO</small>
                        </h1>
                        <p>1GB of space</p>
                        <p>Limited Support</p>
                        <p>Support at $25/hour</p>
                        <p className="special">Limited cloud access</p>
                        <button className="btn">Get Started</button>
                    </div>
                    <div className="card-2">
                        <h5 className="job">Business</h5>
                        <h1 className="price">
                            <small className="dollar">$</small>
                            59
                            <small className="month">/MO</small>
                        </h1>
                        <p>5GB of space</p>
                        <p>Unlimited Support</p>
                        <p>Unlimited Downloads</p>
                        <p className="special">Full cloud access</p>
                        <button className="btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PriceThree;