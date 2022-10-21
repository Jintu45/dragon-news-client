import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/newsSummaryCart/NewsSummaryCart';


const Catagory = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h2 className='mb-4'>this is category section {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCart
                    key={news._id}
                    news={news}
                >
                </NewsSummaryCart>)
            }
        </div>
    );
};

export default Catagory;