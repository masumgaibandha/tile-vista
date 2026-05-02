

import TopTilesCard from '@/component/TopTilesCard';
import React from 'react';

const AllTilesPage = async() => {
    const res = await fetch('https://tile-vista.vercel.app/data.json')
    const tiles =await res.json()
     
    return (
        <div>
            <h2 className='text-3xl font-bold mt-6'>All Tiles</h2>
            <div className='my-4 grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                tiles.map(tile => <TopTilesCard key={tile.id} tile={tile}></TopTilesCard>)
            }
        </div>
        </div>
    );
};

export default AllTilesPage;