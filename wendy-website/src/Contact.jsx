import { useId, useState } from "react";

import './Contact.css';

function Contact({ onSubmit }) {

    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [preferredName, setPreferredName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sameAsFullName, setSameAsFullName] = useState(false);
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isConfirmValid, setIsConfirmValid] = useState(true);
    const [hasEmail, setHasEmail] = useState(true);
    const [hasConfirm, setHasConfirm] = useState(true);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [selectedSubtopic, setSelectedSubtopic] = useState('');
    const id = useId();


    function checkIfUsernameIsValid(toCheck) {
        return !!toCheck;
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleCheckboxChange = () => {
        setSameAsFullName(!sameAsFullName);

        if (!sameAsFullName) {
            setPreferredName(username);
        } else {
            setPreferredName('');
        }
    }

    const checkIfEmailIsValid = (email) => {
        if (!email) {
            setHasEmail(false);
            return true;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isValid = emailRegex.test(email);
        setHasEmail(true);
        return isValid;
    }

    const checkIfConfirmEmailIsValid = (confirmEmail) => {
        if (!!email && !!confirmEmail) {
            setHasConfirm(true);
            return confirmEmail === email;
        } else {
            setHasConfirm(!confirmEmail);
            return true;
        }
    }


    const handleEmailBlur = () => {
        setIsEmailValid(checkIfEmailIsValid(email));
    }

    const handleConfirmEmailBlur = () => {
        if (!confirmEmail.trim()) {
            setHasConfirm(false);
        } else {
            setIsConfirmValid(checkIfConfirmEmailIsValid(confirmEmail));
        }
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setHasEmail(true);
        setIsEmailValid(true);
    }

    const handleConfirmEmailChange = (e) => {
        setConfirmEmail(e.target.value);
        setHasConfirm(true);
        setIsConfirmValid(true);
    }

    const handleTopicChange = (e) => {
        setSelectedTopic(e.target.value);
        setSelectedSubtopic('');
    };

    const handleSubtopicChange = (e) => {
        setSelectedSubtopic(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formValid =
            checkIfUsernameIsValid(username) &&
            (sameAsFullName || checkIfUsernameIsValid(preferredName)) &&
            checkIfEmailIsValid(email) &&
            checkIfConfirmEmailIsValid(confirmEmail);

        setIsUsernameValid(checkIfUsernameIsValid(username));
        setIsEmailValid(checkIfEmailIsValid(email));
        setIsConfirmValid(checkIfConfirmEmailIsValid(confirmEmail));

        if (formValid) {
            onSubmit(username);
            closeModal();
        }
    }

    return (
        <>
            <h2 className="main__heading">Welcome to contact me!</h2>

            <div className="cards">
                <div className="card">
                    <div className="contact__icons-container">
                        <div className="gg-mail"></div>
                    </div>
                    <h3 className="card__heading">Email</h3>
                    <p className="card__text">
                        <a href="mailto:chen.jiamin3@northeastern.edu">chen.jiamin3@northeastern.edu</a>
                    </p>
                </div>

                <div className="card">
                    <div className="contact__icons-container">
                        <div className="gg-user-add"></div>
                    </div>
                    <h3 className="card__heading">LinkedIn</h3>
                    <p className="card__text">
                        <a href="https://www.linkedin.com/in/jiamin-chen-wendy" target="_blank" rel="noopener noreferrer">
                            www.linkedin.com/in/jiamin-chen-wendy
                        </a>
                    </p>
                </div>

                <div className="card">
                    <div className="contact__icons-container">
                        <div className="gg-comment"></div>
                    </div>
                    <h3 className="card__heading">WeChat</h3>
                    <p className="card__text">WendyCHEN_6</p>
                </div>
            </div>
{/* 
            <p className="contact__text">or, leave me a message, I will get back to you as soon as possible.</p>

            <button className="contact__button" type="button" aria-label="Contact me by leaving me a message" onClick={openModal}>CONTACT ME</button>

            {isModalOpen && <div className="modal-overlay" onClick={closeModal} />}
            <dialog className="modal__contact" open={isModalOpen}>
                <form className="contact" onSubmit={handleSubmit}>
                    <h2 className="contact__heading">Contact Me</h2>

                    <div className="name__info">
                        <label className="contact__label" htmlFor={`${id}-username`}>
                            Full Name <span className="required-indicator">*</span>
                        </label>
                        <span className="required-text"> (Required)</span>
                    </div>

                    <input className="contact__name" id={`${id}-username`} value={username} onInput={(e) => {
                        setUsername(e.target.value);
                        setIsUsernameValid(checkIfUsernameIsValid(e.target.value));
                    }} />
                    {!isUsernameValid && <p className="contact__name-error">Full name is required</p>}

                    <div className="contact__checkbox-section">
                        <label className="contact__label">
                            <input
                                type="checkbox"
                                id="same-as-full-name"
                                name="same-as-full-name"
                                className="contact__perferredname-checkbox"
                                checked={sameAsFullName}
                                onChange={handleCheckboxChange}
                            />
                            <span className="wants-spam">Preferred name same as full name above</span>
                        </label>
                    </div>

                    <label className="contact__label" for="preferredname" >Preferred Name</label>
                    <input
                        className="contact__perferredname"
                        type="text"
                        name="preferredname"
                        id="preferredname"
                        value={sameAsFullName ? username : preferredName}
                        onChange={(e) => setPreferredName(e.target.value)}
                        disabled={sameAsFullName}
                    />

                    <div className="email__info">
                        <label className="contact__label" for="email">Email<span className="required-indicator">*</span></label>
                        <span className="required-text"> (Required)</span>
                    </div>
                    <input
                        className="contact__email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                    />
                    {!hasEmail && <p className="contact__email-error">Email is required</p>}
                    {!isEmailValid && <p className="contact__email-error">Please enter a valid email address, such as youremail@domain</p>}


                    <div className="confirm__info">
                        <label className="contact__label" for="confirm">Confirm Email<span className="required-indicator">*</span></label>
                        <span className="required-text"> (Required)</span>
                    </div>
                    <input
                        className="contact__confirm"
                        type="text"
                        name="confirm"
                        id="confirm"
                        value={confirmEmail}
                        onChange={handleConfirmEmailChange}
                        onBlur={handleConfirmEmailBlur}
                    />
                    {!hasConfirm && <p className="contact__confirm-error">Confirm email is required</p>}
                    {!isConfirmValid && <p className="contact__confirm-error">Emails do not match</p>}



                    <label htmlFor="topic" className="contact__label">
                        Topic
                    </label>
                    <select
                        id="topic"
                        name="topic"
                        className="contact__select"
                        value={selectedTopic}
                        onChange={handleTopicChange}
                    >
                        <option value="" disabled>
                            Please Select
                        </option>
                        <option value="Work">Work</option>
                        <option value="Academic">Academic</option>
                        <option value="Other">Other</option>
                    </select>



                    <label htmlFor="subtopic" className="contact__label">
                        Subtopic
                    </label>
                    <select
                        id="subtopic"
                        name="subtopic"
                        className="contact__select"
                        value={selectedSubtopic}
                        onChange={handleSubtopicChange}
                    >
                        <option value="" disabled>
                            {selectedTopic ? "Please Select" : "Please Select Topic First"}
                        </option>
                        {selectedTopic === 'Work' && (
                            <>
                                <option value="Referral">About Job Referral</option>
                                <option value="Projects">Interested in My Projects</option>
                                <option value="Collaboration">Collaboration Opportunities</option>
                                <option value="Other">Other (Please Specify)</option>
                            </>
                        )}
                        {selectedTopic === 'Academic' && (
                            <>
                                <option value="Research">Research Proposal</option>
                                <option value="Coursework">Coursework Assistance</option>
                                <option value="Other">Other (Please Specify)</option>
                            </>
                        )}
                        {selectedTopic === 'Other' && (
                            <>
                                <option value="Collaboration">Collaboration Proposals</option>
                                <option value="Event">Event Invitations</option>
                                <option value="Technical-Issues">Technical Issues</option>
                                <option value="Other">Other (Please Specify)</option>
                            </>
                        )}
                    </select>

                    <label htmlFor="message" className="contact__label">
                        Message
                    </label>
                    <textarea id="message" name="message" className="contact__message"></textarea>



                    <div className="modal__buttons-container">
                        <button className="contact__submit" type="submit" aria-label="Submit contact information">Submit</button>
                        <button className="modal__cancel" type="button" aria-label="Close the form" onClick={closeModal}>Cancel</button>
                    </div>
                </form>
            </dialog> */}
        </>
    );
}

export default Contact;
