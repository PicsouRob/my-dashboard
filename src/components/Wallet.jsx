import React from 'react';
import AnimateLogo from './AnimateLogo';
import Header from './Header';

function Wallet() {
    return (
        <div className='flex flex-col'>
            <Header text="Mail Box" />
            <div className="flex-1 h-full grid place-items-center">
                <AnimateLogo logo="/icons/wallet.svg" text="wallet" />
            </div>
        </div>
    );
}

export default Wallet;