import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const BriefHistory = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])
  return (
    <>
        <div className="briefHistory">
          <div className="homeHeading briefHistoryHeading" data-aos="fade-up">
            Brief <span>History</span>
          </div>
          <div className="briefHistoryImage">
            <img src="img/ieteMember.jpg" alt="" />
            <div className="briefHistoryImageOverlay"></div>
            <div className="briefHistoryDes" data-aos="fade-up" data-aos-delay="2000">
              IETE Students' Chapter, BIT Sindri was established in the year 2007, since then it is one of the fastest-growing clubs of BIT Sindri. In June 2020 we have attained an even higher and more notable level, yes we are now IETE Students' Forum. IETE Students' Forum, BIT Sindri is a sub branch of IETE National body operating through various centers, spread all over India and abroad. Our aim is the empowerment of youth through technical education and skill development.
            </div>
          </div>
        </div>
    </>
  )
}

export default BriefHistory
