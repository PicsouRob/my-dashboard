import React from 'react';
import AnimateLogo from './AnimateLogo';
import Header from './Header';

function News() {
    return (
        <div className='flex flex-col'>
            <Header text="News" />
            <div className="flex-1 h-full grid place-items-center">
                <AnimateLogo logo="/icons/news.svg" text="news" />
            </div>
        </div>
    );
}

export default News;