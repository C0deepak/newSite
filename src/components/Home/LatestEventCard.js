import React from 'react'

const LatestEventCard = (props) => {
  return (
    <>
        <div className="swiper-slide latestEventEach">
            <iframe src={props.eventVideo} frameborder="0" title='Youtube Video Player'></iframe>
            <div className="latestEventEachDes">
                <div className="latestEventHeading">{props.eventName}</div>
                <p>{props.eventDes}</p>
                <div className="readMoreBtn">Read More</div>
            </div>
        </div>
    </>
  )
}

export default LatestEventCard

