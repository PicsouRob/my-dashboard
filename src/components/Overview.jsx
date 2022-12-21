import React, { useState } from 'react';

import { dashboard, liveMarketInfo, overviewPortfolio } from '../helpers';
import Header from './Header';
import LineChart from './LineChart';

function Overview() {
    const [ selected, setSelected ] = useState(0);
    const [ chartAmount, setChartAmount ] = useState("35,352.02");
    
    return (
        <div>
            <Header text="Dashboard" />
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5">
                { dashboard.map((data, index) => (
                    <div key={index} className="bg-primary p-3 rounded-lg space-y-3">
                        <div className="flex items-center justify-between text-white">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-gray-800 rounded-lg">
                                    <img src={data.icon} alt={data.title} className="w-5 h-5" />
                                </div>
                                <div className="leading-4 tracking-normal">
                                    <h2 className="text-[14px] font-semibold">{ data.title }</h2>
                                    <span className="text-gray-600 text-[12px]">{ data.subTitile.toUpperCase() }</span>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 text-green-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h2 className="text-[16px] text-white font-bold">{ data.amount }</h2>
                                <span className="text-green-600 text-[12px]">{ data.pourcent }</span>
                            </div>
                            <img src="/images/chart.png" alt="chart" className="w-16 h-6" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="pt-10 text-white grid gap-8 grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 gap-y-5 flex flex-col justify-between">
                    <img src="/images/creditcard.png" alt="" className="" />
                    <div className="flex-1 flex flex-col justify-between bg-primary space-y-5 rounded-lg p-4">
                        <h1 className="font-bold text-xl">My Portfolio</h1>
                        { overviewPortfolio.map((data, index) => (
                            <div key={index} className="">
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-gray-800 rounded-lg">
                                            <img src={data.icon} alt={data.title} className="w-5 h-5" />
                                        </div>
                                        <div className="tracking-normal leading-4">
                                            <h2 className="text-[14px] font-semibold">{ data.title }</h2>
                                            <span className="text-gray-400 leading-0 text-[12px] font-semibold">{ data.amount }</span>
                                        </div>
                                    </div>
                                    <div className="text-[12px]">
                                        <h1 className={`${data.color} float-right`}>{ data.pourcent }</h1>
                                        <p className="">{ data.change} {data.subTitile.toUpperCase()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-2 space-y-5 flex flex-col justify-between">
                    <div className="bg-primary space-y-8 rounded-lg p-4 flex-1">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-semibold">Charts</h1>
                            <div className="flex gap-3 items-center">
                                <div className="bg-gray-800 rounded-md p-1 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                                </svg>
                                </div>
                                <div className="border border-gray-600 rounded-md px-2 text-center flex items-center justify-center py-1 gap-2">
                                    <img src="/icons/bitcoin.svg" alt="bit" className="w-4 h-4" />
                                    <select name="" id="" className="bg-transparent text-[11px]">
                                        <option selected value="USD" className="">USD</option>
                                        <option value="CAN" className="">CAN</option>
                                        <option value="EURO" className="">EURO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 justify-between">
                            <div className="">
                                <select name="" id="" className="bg-transparent text-[11px]" onSelect={(e) => setChartAmount(e.target.value)}>
                                    <option selected value="35,352.02" className="">Bitcoin/BTC</option>
                                    <option value="24,352.02" className="">Litecoin/LTC</option>
                                    <option value="45,352.02" className="">Ethereum/ETH</option>
                                </select>
                                <h2>{ chartAmount }</h2>
                            </div>
                            <div className="flex flex-wrap gap-y-3 items-center gap-x-1 md:gap-x-3">
                                { [ "1h", "3h", "1d", "1w", "1m" ].map((item, ind) => (
                                    <div className={ `${ selected === ind && "bg-blue-600" } rounded-lg border border-gray-700 px-3 cursor-pointer` }
                                        onClick={() => setSelected(ind)}
                                    >
                                        <span className="text-[13px]">{ item }</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <LineChart />
                        </div>
                    </div>
                    <div className="bg-primary rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-semibold">Live Market</h1>
                            <div className="border border-gray-600 rounded-md px-2 text-center flex items-center justify-center py-1">
                                <span className="text-[12px]">View More</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-5">
                            <div className="space-y-2 text-[13px]">
                                <span className="text-gray-500">Coin</span>
                                <div className="flex items-center gap-2">
                                    <img src="/icons/bitcoin.svg" alt="bito" className="w-6 h-6" />
                                    <span className="">Bitcoin</span>
                                </div>
                            </div>
                            { liveMarketInfo.map((data, index) => (
                                <div key={index} className="space-y-2 text-[13px]">
                                    <span className="text-gray-500">{ data.title}</span>
                                    <h3 className={`${data.text.includes("%") && "text-green-800"}`}>{ data.text }</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;