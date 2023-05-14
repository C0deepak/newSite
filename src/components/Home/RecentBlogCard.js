import React from 'react'

const RecentBlogCard = (props) => {
  return (
    <>
    <div className="recentBlogEach">
        <img src={props.blogImage} alt=""/>
        <div className="recentBlogEachDes">
            <h2>{props.blogName}</h2>
            <p>{props.blogDes}</p>
            <div className="readMoreBtn">Read More</div>
        </div>
    </div>
    </>
  )
}

export default RecentBlogCard