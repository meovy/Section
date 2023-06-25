import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faLocationDot, faUser, faT, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../style/Contact.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Contact = () => {
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    let [checkBox, setCheckBox] = useState(false);
    let [firstNameError, setFirstNameError] = useState(null)
    let [lastNameError, setLastNameError] = useState(null)
    let [emailError, setEmailError] = useState(false)
    let [messageError, setMessageError] = useState('')
    let [checkBoxError, setCheckBoxError] = useState(null)

    const handleChangefirstName = (e) => {
        const value = e.target.value;
        setFirstName(value)

        if (value.length < 3) {
            setFirstNameError("First name must be at least 3 characters");
        } else {
            setFirstNameError(null);
        }
    }
    const handleChangelastName = (e) => {
        const value = e.target.value;
        setLastName(value)

        if (value.length < 3) {
            setLastNameError("Last name must be at least 3 characters");
        } else {
            setLastNameError(null);
        }
    }
    const handleEmail = (e) => {
        const value = e.target.value;
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        setEmail(value)

        if (email.match(pattern)) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }
    const handleMessage = (e) => {
        const value = e.target.value
        setMessage(value)

        if (!value) {
            setMessageError("You should write a little about yourself")
        } else {
            setMessageError('')
        }
    }
    const handleCheck = (e) => {
        setCheckBox(e.target.checked)
    }
    const handleSend = () => {
        setFirstName('')
        setLastName('');
        setEmail('')
        setMessage('')
        setCheckBox(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <div id='contact'>
                <div className='container'>
                    <div className='wrapper-content'>
                        <h2>Get in Touch</h2>
                        <h4 className="description">You need more information? Check what other persons are saying about our product.
                            They are very happy with their purchase.</h4>
                        <div className="info">
                            <div className="info-icon">
                                <FontAwesomeIcon icon={faLocationDot} className='icon' />
                            </div>
                            <div className="info-description">
                                <h4 className="info-title">Find us at the office</h4>
                                <p className="info-detail">Bld Mihail Kogalniceanu, nr. 8, <br />
                                    7652 Bucharest, <br />
                                    Romania
                                </p>
                            </div>
                        </div>
                        <div className="info">
                            <div className="info-icon">
                                <FontAwesomeIcon icon={faMobile} className='icon' />
                            </div>
                            <div className='info-description'>
                                <h4 className='info-title'>Give us a ring</h4>
                                <p className='info-detail'>Michael Jordan <br />
                                    +40 762 321 762 <br />
                                    Mon - Fri, 8:00-22:00</p>
                            </div>
                        </div>
                    </div>

                    <div className='wrapper-form'>
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <h4 className='form-title'>Contact Us</h4>
                            <div className='form-body'>
                                <div className='form-group'>
                                    <label>First name</label><br />
                                    <div className='form-input'>
                                        <span><FontAwesomeIcon icon={faUser} className='input-icon' /></span>
                                        <input
                                            type='text'
                                            placeholder='First Name...'
                                            className='input-control'
                                            value={firstName}
                                            onChange={handleChangefirstName}
                                        />
                                    </div>
                                    {firstNameError && <span className='input-error'>{firstNameError}</span>}
                                </div>
                                <div className='form-group'>
                                    <label>Last name</label><br />
                                    <div className='form-input'>
                                        <span><FontAwesomeIcon icon={faT} className='input-icon' /></span>
                                        <input
                                            type='text'
                                            placeholder='Last Name...'
                                            className='input-control'
                                            value={lastName}
                                            onChange={handleChangelastName}
                                        />
                                    </div>
                                    {lastNameError && <span className='input-error'>{lastNameError}</span>}
                                </div>
                                <div className='form-group'>
                                    <label>Email address</label><br />
                                    <div className='form-input'>
                                        <span><FontAwesomeIcon icon={faEnvelope} className='input-icon' /></span>
                                        <input
                                            type='email'
                                            placeholder='Email Here...'
                                            className='input-control'
                                            value={email}
                                            onChange={handleEmail}
                                        />
                                    </div>
                                    {emailError && <span className='input-error'>It should be a valid email address</span>}
                                </div>
                                <div className='form-group'>
                                    <label>Your message</label><br />
                                    <input
                                        type='textarea'
                                        className='input-textarea'
                                        value={message}
                                        onChange={handleMessage}
                                    />
                                    {messageError && <span className='input-error'>{messageError}</span>}
                                </div>
                                <div className='input-check'>
                                    <label>
                                        <input
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkBox}
                                            onChange={handleCheck}
                                        />
                                        I'm not a robot
                                    </label>
                                </div>
                                <div className='input-submit'>
                                    <button className='btn' onClick={handleSend}>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <footer className='footer'>
                        <ul>
                            <li>CREATIVE TIM</li>
                            <li>ABOUT US</li>
                            <li>BLOG</li>
                        </ul>
                        <div className='copyright'>
                            © 2023, Designed by <span>My Team</span>. Coded by <span>Vu Hoan</span>.
                        </div>
                    </footer>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <ToastContainer />
            </div>
        </>
    )
}

export default Contact;