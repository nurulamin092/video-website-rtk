import React from 'react'
import VideoGrid from '../components/Grid/VideoGrid'
import Tags from '../components/tags/Tags'
import Pagination from '../components/ui/Pagination'

export default function Home() {
  return (
   <>
   

        {/* <!-- Tags --> */}
    <Tags/>

        {/* <!-- Video Grid --> */}
   
<VideoGrid/>
        {/* <!-- pagination--> */}
      <Pagination/>

        {/* <!-- footer --> */}
   
   </>
  )
}
