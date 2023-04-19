import React from 'react';
import RelatedVideoListItem from './RelatedVideoListItem';

const RelatedVideoList = ({id,tags}) => {
    return (
        <section className="pt-12">
        <section className="pt-12">
            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                <RelatedVideoListItem />

                {/* <div className="col-span-12">some error happened</div> */}
            </div>
        </section>
    </section>
    );
};

export default RelatedVideoList;