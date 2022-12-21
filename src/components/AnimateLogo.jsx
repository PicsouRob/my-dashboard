import React from 'react';

function AnimateLogo({ logo, text }) {
    return (
        <div className='min-h-[380px] flex flex-col items-center justify-center text-white gap-y-6 p-6'>
            <img src={ logo } alt="logo" className="h-46 w-36 animate-pulse" />
            <br className="" />
            <h1 className="text-xl font-bold">Empty { text }</h1>
        </div>
    );
}

export default AnimateLogo;