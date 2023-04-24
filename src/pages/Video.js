import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Player from '../components/description/Player';
import VideoDescription from '../components/description/VideoDescription';
import RelatedVideoList from '../components/List/RelatedVideoList';
import Loading from '../components/ui/Loading';
import { fetchVideo } from '../features/video/videoSlice';

const Video = () => {

 const {isLoading,isError,video,error} = useSelector((state)=>state.video);

 const dispatch = useDispatch();

 const {videoId} = useParams();
 useEffect(()=>{
  dispatch(fetchVideo(videoId))
 },[dispatch,videoId]);


 let content = null;

 const {id,link,title,tags} = video || {}

 if(isLoading && !isError) content = <Loading/>;

 if (!isLoading && isError) {
   content = <div className='col-span-12'>{error}</div>
 }

 if (!isLoading && !isError && !video?.id) {
  content = <div className='col-span-12'>Video Not Found</div>
 }

 if (!isLoading && !isError && video?.id) {
  content = <div className="grid grid-cols-3 gap-2 lg:gap-8">
  <div className="col-span-full w-full space-y-8 lg:col-span-2">
    
        <Player link = {link} title = {title}/>             
      <VideoDescription video = {video}/>
      
  </div>
  <RelatedVideoList currentVideoId={id} tags={tags}/>
 
</div>
 }

 
  return (
    <section className="pt-6 pb-20">
    <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
    </div>
</section>
  );
};

export default Video;