import React from 'react';
import AnimateLogo from './AnimateLogo';
import Header from './Header';

function Transaction() {
    return (
        <div className='flex flex-col'>
            <Header text="Transaction" />
            <div className="flex-1 h-full grid place-items-center">
                <AnimateLogo logo="/icons/transaction.svg" text="transaction" />
            </div>
        </div>
    );
}

export default Transaction;