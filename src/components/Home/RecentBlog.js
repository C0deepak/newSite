import React from 'react'
import recentBlogJson from './RecentBlogJson'
import RecentBlogCard from './RecentBlogCard'

const RecentBlog = () => {
    return (
        <>
            <div className="recentBlog">
                <div className="homeHeading">
                    Recent <span>Blog</span>
                </div>
                <div className="recentBlogPreWrapper">
                    <div className="recentBlogWrapper">
                        {
                            recentBlogJson.map((blog) => {
                                return (
                                    <RecentBlogCard
                                        key={blog.id}
                                        blogImage={blog.blogImage}
                                        blogName={blog.blogName}
                                        blogDes={blog.blogDes}
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

export default RecentBlog