import React, { useState } from 'react';
import './Experiences.css';

function Accordion({ heading, content, isOpen, onToggle }) {
    return (
        <div>
            <button className="experiences__heading" aria-expanded={isOpen} onClick={onToggle}>
                <div className={`gg-close-o ${isOpen ? '' : 'rotate'}`}></div>
                {heading}
            </button>
            <div className={isOpen ? 'experiences__content open' : 'experiences__content'}>
                {content}
            </div>
        </div>
    );
}

const experiencesData = [
    {
        title: 'Education',
        items: [
            {
                heading: 'Master of Science @ Northeastern University',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: Jan.2023 - Expected May.2025</li>
                        <li className="content__item">Major: Information Systems</li>
                        <li className="content__item">GPA: 4.0/4.0</li>
                        <li className="content__item">Award: Professional Development Award</li>
                        <li className="content__item">Activity: Software Engineer @Northeastern University Hacker Club</li>
                    </ul>
                ),
            },
            {
                heading: 'Master of Commerce @ The University of Queensland',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: Jun.2018 - Dec.2020</li>
                        <li className="content__item">Major: Applied Finance & Professional Accounting (double majors)</li>
                        <li className="content__item">GPA: 5.9/7.0 (Top 1%) </li>
                        <li className="content__item">Award: Dean's Commendations for Academic Excellence</li>
                        <li className="content__item">Activity: Student Success Program - Researcher Intern @ Power Protection Industries Ltd.</li>
                    </ul>
                ),
            },
            {
                heading: 'Bachelor of Management @ Beijing Normal University, Zhuhai',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: Sep.2013 -Jul.2017</li>
                        <li className="content__item">Major: Business Administration </li>
                        <li className="content__item">GPA: 89/100</li>
                        <li className="content__item">Award:
                            <ul className="content__sublist">
                                <li className="content__subitem">Top Grade Scholarship</li>
                                <li className="content__subitem">Second Class Scholarship</li>
                            </ul>
                        </li>
                        <li className="content__item">Activities and societies:
                            <ul className="content__sublist">
                                <li className="content__subitem">Teaching Assistant of Management Information System Course</li>
                                <li className="content__subitem">Student Representative of Macquarie University's China Meeting </li>
                                <li className="content__subitem">Minister of Liaison Dept. Student Union</li>
                                <li className="content__subitem">Student Organiser of Chinese Ageing Service Project</li>
                                <li className="content__subitem">Volleyball Team Coach</li>
                            </ul>
                        </li>
                    </ul>
                ),
            },
        ],
    },
    {
        title: 'Work Experiences',
        items: [
            {
                heading: 'Machine Learning Research Assistant @ Northeastern University',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: Oct.2022 - Now</li>
                        <li className="content__item">Perform data cleaning and preprocessing using NumPy, including denoising, standardization, filtering, etc.</li>
                        <li className="content__item">Classify fNIRS data using machine learning algorithms SVM and k-NN, extracting frequency-domain and time-domain features to capture patterns related to attention concentration, and optimizing model performance</li>
                        <li className="content__item">Utilize deep learning CNN for spatiotemporal feature extraction, identifying local patterns and structures, and passing the extracted features to DNN layers for abstract feature classification</li>
                    </ul>
                ),
            },
            {
                heading: 'Technical Product Manager @ Xiaomi Inc.',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: Apr.2021 - Dec.2022</li>
                        <li className="content__item">Designed accessibility features for users with disabilities, improving accessibility for 4.87% DAU</li>
                        <li className="content__item">Designed new VIP features for Duokan e-book app, increasing VIP revenue by 61.42%</li>
                        <li className="content__item">Established children's version of e-book platform, acquiring 160,000+ DAU</li>
                        <li className="content__item">Established user acquisition strategies for overseas short video app based on new user data using SQL, reducing CPI by 25%+ and improving new user retention rate by 5.8%</li>
                    </ul>
                ),
            },
            {
                heading: 'Technical Product Manager @ Publicis Groupe',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: Dec.2019 - Mar.2020</li>
                        <li className="content__item">Built CMS for SAIC Group's marketing, branding, and business departments, optimizing workflow and managing over millions of marketing digital materials</li>
                        <li className="content__item">Improved UX and UI design of HUAWEI Intelligent Computing front-end webpage using HTML5, increasing consulting rate by 11%</li>
                    </ul>
                ),
            },
            {
                heading: 'Teaching Assistant @ Beijing Normal University, Zhuhai',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: Mar.2016 - Jul.2016</li>
                        <li className="content__item">Collaborated with the professor in facilitating the teaching process by preparing lecture slides, grading assignments, and exams</li>
                        <li className="content__item">Guided and supported students through tutorials, addressing their questions and providing course assistance as required</li>
                    </ul>
                ),
            },
        ],
    },
    {
        title: 'Other Experiences',
        items: [
            {
                heading: 'The Learning Agency Lab LLM - Detect AI Generated Text Code Competition',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: Nov.2022 - Now</li>
                        <li className="content__item">Utilize the pre-trained large language model BERT for natural language processing on text data</li>
                        <li className="content__item">Employ CNN, RNN, and LSTM models to capture key features within the text</li>
                        <li className="content__item">Use the intermediate layer outputs of the pre-trained PyTorch model as features and conduct feature engineering, including dimensionality reduction, standardization</li>
                    </ul>
                ),
            },
            {
                heading: 'Course Project: Number Recognizer',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: Oct.2022 - Now</li>
                        <li className="content__item">Course Project of INFO5100 at Northeastern University </li>
                        <li className="content__item">Design and implemented a Graphical User Interface (GUI) using JavaFX, enabling users to draw numbers (0-9) from various international languages and Roman numerals using touch screen or mouse input</li>
                        <li className="content__item">Conduct training of the TensorFlow machine learning framework with datasets to enhance the accuracy of number recognition</li>
                    </ul>
                ),
            },
            {
                heading: 'Software Engineer & Product Manager @ NEU College of Engineering Hacker Club',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: May. 2023 - Now</li>
                        <li className="content__item">Craft PRD and design prototypes, including home page, discussion boards, and resource page</li>
                        <li className="content__item">Utilize Django to develop the backend infrastructure, covering user authentication with sign-in, account creation, and user profile editing functionalities</li>
                    </ul>
                ),
            },
            {
                heading: 'Course Project: Mobile Clinical App for the Care of Homeless-state-wide',
                content: (
                    <ul className="content__list">
                        <li className="content__item">Time: Apr. 2023 - May 2023</li>
                        <li className="content__item">Course Project of INFO5001 at Northeastern University </li>
                        <li className="content__item">Led the team to designed and populated the medical system and contagious diseases control system</li>
                        <li className="content__item">Developed the backend medical system for the mobile app using Java</li>
                        <li className="content__item">Earned full marks for the project</li>
                    </ul>
                ),
            },
        ],
    },
];

function Experiences() {
    const [accordionStates, setAccordionStates] = useState({});

    const toggleAccordion = (sectionIndex, itemIndex) => {
        setAccordionStates((prevStates) => {
            const key = `${sectionIndex}-${itemIndex}`;
            return {
                ...prevStates,
                [key]: !prevStates[key],
            };
        });
    };

    const toggleAll = () => {
        setAccordionStates((prevStates) => {
            const allClosed = Object.values(prevStates).every((state) => !state);
            const newState = {};

            experiencesData.forEach((section, sectionIndex) => {
                section.items.forEach((_, itemIndex) => {
                    newState[`${sectionIndex}-${itemIndex}`] = allClosed;
                });
            });

            return newState;
        });
    };

    return (
        <>
            <h2 className="main__heading">My Experiences</h2>
            <div className="experiences__button-container">
                <button className="experiences__button" onClick={toggleAll}>
                    {Object.values(accordionStates).some((state) => state) ? 'Close All' : 'Show All'}
                </button>
            </div>

            <div className="experiences__sections">
                {experiencesData.map((section, sectionIndex) => (
                    <div className="experiences__section" key={sectionIndex}>
                        <h3 className="experiences__subtitle">{section.title}</h3>
                        {section.items.map((item, itemIndex) => (
                            <Accordion
                                key={itemIndex}
                                heading={item.heading}
                                content={item.content}
                                isOpen={accordionStates[`${sectionIndex}-${itemIndex}`] || false}
                                onToggle={() => toggleAccordion(sectionIndex, itemIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Experiences;