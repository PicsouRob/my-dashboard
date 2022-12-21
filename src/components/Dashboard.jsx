import React from 'react';
import { dashboard } from '../helpers';
import Header from './Header';
import Overview from './Overview';
import Charts from './Charts';
import Mailbox from './Mailbox';
import Transaction from './Transaction';
import News from './News';
import Setting from './Setting';
import Wallet from './Wallet';

function Dashboard({ selected }) {
    return (
        <div className='relative bg-gray-800 p-4 md:p-6'>
            { selected === 0 ? (
                <Overview />
            ) : selected === 1 ? (
                <Charts />
            ) : selected === 2 ? (
                <Transaction />
            ) : selected === 3 ? (
                <Wallet />
            ) : selected === 4 ? (
                <News />
            ) : selected === 5 ? (
                <Mailbox />
            ) : (
                <Setting />
            )}
        </div>
    );
}

export default Dashboard;