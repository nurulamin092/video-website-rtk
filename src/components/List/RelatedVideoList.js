import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../ui/Loading';
import RelatedVideoListItem from './RelatedVideoListItem';

const RelatedVideoList = ({currentVideoId,tags}) => {
    const {relatedVideos,isLoading,isError,error} = useSelector(state=> state.relatedVideos);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchRelatedVideos({tags,id:currentVideoId}))
    },[dispatch,currentVideoId,tags]);

    let content = null;

    if(isLoading) content = <Loading/>
    if (!isLoading && isError) {
        content = <div className='col-span-12'>{error}</div>
    }

    if (!isLoading && !isError && relatedVideos?.length === 0) {
       content = <div className='col-span-12'>No related video not found</div>
    }

    if (!isLoading && !isError && relatedVideos?.length>0) {
        content = relatedVideos.map(video=><RelatedVideoListItem key={video.id} video={video}/>)
    }
    return (
        <section className="pt-12">
        <section className="pt-12">
            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
             
                {content}
                {/* <div className="col-span-12">some error happened</div> */}
            </div>
        </section>
    </section>
    );
};

export default RelatedVideoList;