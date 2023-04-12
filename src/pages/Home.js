import React from 'react'
import Footer from '../components/footer/Footer'
import VideoGrids from '../components/Grid/VideoGrids'
import Navbar from '../components/navbar/Navbar'
import Tags from '../components/tags/Tags'
import Pagination from '../components/ui/Pagination'

export default function Home() {
  return (
   <>
    <Navbar/>

        {/* <!-- Tags --> */}
    <Tags/>

        {/* <!-- Video Grid --> */}
   
<VideoGrids/>
        {/* <!-- pagination--> */}
      <Pagination/>

        {/* <!-- footer --> */}
     <Footer/>
   </>
  )
}
