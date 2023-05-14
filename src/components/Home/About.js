import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])
    return (
        <>
            <div className="about">
                <div className="homeHeading aboutHeading" data-aos="fade-up">
                    IETE at <span>BIT Sindri</span>
                </div>
                <div className="aboutDes">
                    Throughout the academic year We organize various small events for students to develop their skill set. Some of them are :
                </div>
                <div className="aboutBriefDes">
                    <ul>
                        <li>We organize Workshops and Seminars on trending topics such as Cyber Security and Ethical Hacking, Internet of Things etc.</li>
                        <li>We also organize webinars on trending topics such as Cyber Security and Ethical Hacking, Internet of Things, Web Development, API's and many more.</li>
                        <li>We organise Tech Udbhav, our Annual Techno-Management Fest. The events under Tech Udbhav are specially choosen and designed for the students so that they can use and enhance their Technical and Managerial skills and win exiciting prizes.</li>
                        <li>Events like Unicorn, Online quizzing and In-house gaming events.</li>
                        <li>Technical events on web development, coding and electronics.</li>
                        <li>We organize small interactive sessions to teach students technical stuffs like Web Development, Arduino and Micro-controllers, Video Editing and many more.</li>
                        <li>To keep the students updated, we regularly post the developments in latest technologies in the very way of Tech Drive.</li>
                        <li>We organize regular GM's to discuss about latest Technical trends and social issues.</li>
                        <li>Regularly post blogs on new technologies on our blog site (IETE Blog Site).</li>
                    </ul>
                </div>
                <div className="homeHeading parentHeading">
                    Our <span>Parent</span> Body
                </div>
                <div className="parentDes">
                    <h1>IETE National Body</h1>
                    <p>The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading recognised professional society devoted to the advancement of Science and Technology of Electronics, Telecommunication & IT. Founded in 1953. The IETE is the National Apex Professional body of Electronics and Telecommunication, Computer Science and IT Professionals. It serves more than 1,25,000 members (including Corporate, Student and ISF members) through various 64 Centres, spread all over India and abroad.</p>
                </div>
                <div className="objective">
                    <div className="objectiveHeading">Objective of IETE</div>
                    <div className="objectiveDesWrap">
                        <div className="objectiveDes">The IETE focuses on advancement of the Science and Technology of Electronics, Telecommunication, Computers, Information Technology and related areas.</div>
                        <div className="objectiveDes">The Institution is known for providing leadership oppurtunities in Scientific and Technical areas of direct importance to the national development and economy.</div>
                        <div className="objectiveDes">The IETE conducts and sponsors technical meetings, conferences, symposia, and exhibitions all over India, publishes technical journals and provides continuing education as well as career advancement opportunities to its members.</div>
                        <div className="objectiveDes">The IETE conducts both the Graduateship (AMIETE) Examination and Diploma (DIPIETE) Examination in Electronics & Telecommunication and Computer Science & Engineering streams.</div>
                        <img src="img/ieteLogo.png" alt="" className="objectiveImage"/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About