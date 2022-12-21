import React from 'react';
import { menuData } from '../helpers';

function Menu({ selected, setSelected }) {
    const menuBottom = [
        {
            title: "Setting",
            icon: "/icons/setting.svg",
        },
        {
            title: "Logout",
            icon: "/icons/logout.svg",
        },
    ];
    
    const selectMenu = (index) => {
        setSelected(index);
    }
    
    return (
        <div className=" bg-primary flex flex-col justify-between min-h-screen p-6 md:p-6 z-30">
            <div className="space-y-8">
                <div className="flex align-center justify-center md:justify-start gap-x-4 text-white">
                    <img src="/icons/logo.svg" alt="" className="w-7 md:w-10 h-10" />
                    <h3 className="font-bold text-xl hidden md:flex">Logoipsm</h3>
                </div>
                <div className="space-y-2">
                    { menuData.map((data, ind) => (
                        <div
                        className={ `${ selected === ind  ? "bg-blue-900" : "" } flex text-white items-center justify-center md:justify-start gap-x-4 gap-y-4 cursor-pointer p-2 rounded-sm` }
                        onClick={ () => selectMenu(ind) }>
                        <img src={ data.icon } alt={ data.title } className="w-5 h-5 text-red-800" />
                        <span className=" hidden md:flex">{ data.title }</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="space-y-2">
                { menuBottom.map((data, index) => (
                    <div
                        className="flex text-white items-center justify-center md:justify-start gap-x-4 gap-y-4 cursor-pointer p-2 rounded-sm">
                        <img src={ data.icon } alt={ data.title } className="w-5 h-5 text-red-800" />
                        <span className=" hidden md:flex">{ data.title }</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;