import React from 'react'
import About from '../components/Home/About'
import BriefHistory from '../components/Home/BriefHistory'
import Hero from '../components/Home/Hero'
import LatestEvent from '../components/Home/LatestEvent'
import RecentBlog from '../components/Home/RecentBlog'

const Home = () => {
  return (
    <>
        <Hero/>
        <BriefHistory></BriefHistory>
        <About/>
        <RecentBlog/>
        <LatestEvent/>
    </>
  )
}

export default Home