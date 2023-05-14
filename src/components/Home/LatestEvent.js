import React, { useEffect } from 'react'
import latestEventJson from './LatestEventJson'
import LatestEventCard from './LatestEventCard'
import Swiper from 'swiper';
import 'swiper/css';

const LatestEvent = () => {
    useEffect(() => {
        var swiper = new Swiper(".latestEventPreWrapper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            },
            loop:true,
            autoplay:{
                delay: 1000,
                disableOnInteraction:false,
            }
        });
    }, [])
    
    return (
        <>
            <div className="latestEvent">
                <div className="homeHeading">
                    Latest <span>Events</span>
                </div>
                <div className="swiper latestEventPreWrapper">
                    <div className="swiper-wrapper latestEventWrapper">
                        {
                            latestEventJson.map((event) => {
                                return (
                                    <LatestEventCard
                                        key={event.id}
                                        eventVideo={event.eventVideo}
                                        eventName={event.eventName}
                                        eventDes={event.eventDes}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestEvent