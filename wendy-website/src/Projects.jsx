import React, { useState, useEffect } from 'react';
import './Projects.css';


function Projects({ setPage }) {
    const [sortOption, setSortOption] = useState('nowToPast');

    useEffect(() => {
        setPage(document.location.pathname);

        function onPopState() {
            setPage(document.location.pathname);
        }

        window.addEventListener('popstate', onPopState);
        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, [setPage]);

    const projectsData = [
        {
            title: "Overseas short video app user acquisition",
            image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A laptop showing digital marketing data related to user acquisition",
            time: "2021/4",
            description: "Developed advertising strategy at Google Ads and Facebook platform, including creative innovation, detailed target, and Aha moment explore etc.",
            destination: "Experiences"
        },
        {
            title: "Huawei website UI & UX improvement",
            image: "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "An UI design draft is shown in a laptop",
            time: "2020/3",
            description: "Improved UX & UI of HUAWEI Intelligent Computing website using HTML5, increasing consulting rate by 11%",
            destination: "https://e.huawei.com/cn/solutions/computing"
        },
        {
            title: "SAIC group CMS establishment",
            image: "https://images.unsplash.com/photo-1654246372263-8c61fd51b5e5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "One brand of SAIC group: ROEWE car",
            time: "2019/12",
            description: "Built a CMS for SAIC Group that optimized workflow and managed over millions of marketing digital materials",
            destination: "https://www.saicmotor.com/english/index.shtml"
        },
        {
            title: "Duokan APP VIP feature update",
            image: "/images/vip.png",
            alt: "Duokan App VIP screenshot",
            time: "2022/10",
            description: "Designed new VIP features for Duokan e-book app, increasing VIP revenue by 61.42%",
            destination: "https://www.duokan.com/pc/"
        },
        {
            title: "Duokan e-book CMS optimization",
            image: "https://images.unsplash.com/photo-1532961130800-58bc2c157ce4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A e-book reader",
            time: "2022/5",
            description: "Restructured e-book content management system and censor process, saving operation team 4 hours/day",
            destination: "https://www.duokan.com/pc/"
        },
        {
            title: "Duokan APP children version establishment",
            image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A child is reading a book and laughing",
            time: "2022/9",
            description: "Established children's version of e-book platform, acquiring 160,000+ DAU",
            destination: "https://www.duokan.com/pc/"
        },
        {
            title: "Duokan novel rating system reconstruction",
            image: "https://images.unsplash.com/photo-1560472355-a3b4bcfe790c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "An e-book rating is shown in a laptop",
            time: "2022/4",
            description: "Reconstructed the novel rating matrix for recommendation system, covering over 350k novel books and improving the CTR(PV) by 0.25%",
            destination: "https://www.duokan.com/pc/"
        },
        {
            title: "HONOR products digital campaign",
            image: "https://images.unsplash.com/photo-1626194062394-022cc80f6d2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "a HONOR watch and a HONOR smartphone",
            time: "2020/1",
            description: "Developed digital marketing strategy and innovative creative materials for MagicWatch 2, MagicBook, 9X, 9X pro, Germany E-Commerce, MWC, and Walrus etc.",
            destination: "https://www.hihonor.com/cn/"
        },
        {
            title: "Duokan homepage layout optimization",
            image: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A person is working on an APP's layout by a laptop",
            time: "2022/8",
            description: "Optimized the homepage layout UI&UX for Duokan App, improving the retention rate by 1.48% and effective reading rate by 0.47%",
            destination: "https://www.duokan.com/pc/"
        },
        {
            title: "fNIRS machine learning for attention detection",
            image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A human brain rendering",
            time: "2023/10",
            description: "Classify fNIRS data using machine learning algorithms, extracting features to capture patterns related to attention concentration",
            destination: "https://openfnirs.org/data/"
        },
        {
            title: "Detect AI Generated Text Code Competition",
            image: "https://images.unsplash.com/photo-1686191128892-3d6424c6cee1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Human's hand and AI's hand rendering",
            time: "2023/11",
            description: "Utilize the large language model BERT and develop a machine learning model that can accurately detect whether text was written by human or AI",
            destination: "https://www.kaggle.com/competitions/llm-detect-ai-generated-text/overview"
        },
        {
            title: "Number Recognizer by TensorFlow Machine Learning ",
            image: "https://images.unsplash.com/photo-1601283220664-300f46e9e85a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Pixel digitals are shown in a screen",
            time: "2023/11",
            description: "Conduct training of the TensorFlow machine learning framework with datasets to enhance the accuracy of number recognition",
            destination: "Experiences"
        },
        {
            title: "NEU COE Hacker Club website development",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Some code are shown in a screen",
            time: "2023/5",
            description: "Utilize Django to develop the backend infrastructure, covering user authentication with sign-in, account creation, and user profile editing functionalities",
            destination: "https://svhackersclub.com/home"
        },
        {
            title: "Mobile Clinical App for the Care of Homeless",
            image: "https://images.unsplash.com/photo-1603285992553-5483af86aa7b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A medical App is shown in a phone",
            time: "2023/3",
            description: "Led the team to design and populate the medical system and contagious diseases control system",
            destination: "https://github.com/WendyZozo/mobile_clinical_app_backend"
        },
        {
            title: "Bank account system development",
            image: "https://images.unsplash.com/photo-1616077167555-51f6bc516dfa?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A money transaction page is shown in a phone's bank APP",
            time: "2023/4",
            description: "Implemented back-end system for bank accounts management, including create account, deposit money, withdraw money and check balance etc. functions",
            destination: "https://github.com/WendyZozo/bank_account_system_backend"
        },
    ];

    const sortProjects = () => {
        if (sortOption === 'nowToPast') {
            return projectsData.sort((a, b) => new Date(b.time) - new Date(a.time));
        } else if (sortOption === 'pastToNow') {
            return projectsData.sort((a, b) => new Date(a.time) - new Date(b.time));
        }
        return projectsData;
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    function go(event, destination) {
        event.preventDefault();
        window.location.href = destination;
    }

    return (
        <div className="projects">
            <h2 className="main__heading">All Projects</h2>
            <div className="sort-container">
                <label className="sort__label">
                    Sort By:
                    <select className="sort__select" value={sortOption} onChange={(e) => handleSortChange(e.target.value)}>
                        <option value="nowToPast" className="sort__option">Most Recent to Oldest</option>
                        <option value="pastToNow" className="sort__option">Oldest to Most Recent</option>
                    </select>
                </label>
            </div>

            <div className="cards">
                {sortProjects().map((project, index) => (
                    <div className="card" key={index}>

                        <img src={project.image} alt={project.alt} className="card__image" />
                        <h3 className="card__heading">{project.title}</h3>
                        <p className="card__time">{project.time}</p>
                        <p className="card__text">{project.description}</p>
                        <button
                            className="card__button"
                            type="button"
                            aria-label={`Learn more about ${project.title} project`}
                            onClick={(e) => go(e, project.destination)}
                        >
                            LEARN MORE
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;