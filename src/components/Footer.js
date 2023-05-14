import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footerWrapper">
                    <div className="left">
                        <div className="faq">
                            <div className="footerHeading">FAQS</div>
                            <ul>
                                <li>Why do you join IETE?</li>
                                <li>What I will learn in IETE?</li>
                                <li>Is IETE a close club?</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <div className="footerHeading">CONTACT US</div>
                            <p>ietebits@gmail.com</p>
                            <p>+91-7903607014 / +91-9934438281</p>
                        </div>
                        <div className="find">
                            <div className="footerHeading">WHERE TO FIND US</div>
                            <p>BIT Sindri</p>
                            <p>828123, Dhanbad</p>
                            <p>Jharkand</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="footerHeading">SEND US YOUR MESSAGE</div>
                        <form>
                            <input type="text" placeholder='Your Name...' />
                            <input type="text" placeholder='Your Email...' />
                            <textarea cols="10" rows="5" placeholder='Any Message...'></textarea>
                            <button type="submit">Send <i class="fa-solid fa-paper-plane"></i> </button>
                        </form>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="footerHeading">GET IN TOUCH</div>
                    <div className="footerSocial">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                    <p>Copyright © 2022 All Rights Reserved | IETE Students' Forum BIT Sindri</p>
                    <p>Designed and Developed by Team IETE❤️</p>
                </div>
            </div>
        </>
    )
}

export default Footer