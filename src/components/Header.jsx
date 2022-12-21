import React from 'react';

function Header({ text }) {
    return (
        <div className='flex align-center justify-between gap-x-5 text-white'>
            <div className="flex align-center justify-between gap-x-6 md:gap-x-16 lg:gap-x-24">
                <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">{ text }</h1>
                <div className="items-center justify-between gap-x-2 rounded-md bg-primary pl-2 lg:min-w-[300px] hidden lg:flex">
                    <input type="text" placeholder='Search...' className="bg-transparent lg:min-w-[320px]" />
                    <div className="cursor-pointer px-2">
                        <SearchButton />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-x-5">
                <div className="flex lg:hidden bg-primary rounded-md p-2 cursor-pointer">
                    <SearchButton />
                </div>
                <div className="bg-primary rounded-md p-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                    <img src="/icons/avatar.svg" alt="" className="w-8 h-8" />
                    <span className="text-[11px] hidden md:flex font-bold">Picsou Phanord</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 font-bold">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

const SearchButton = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

export default Header;