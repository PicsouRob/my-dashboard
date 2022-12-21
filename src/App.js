import React, { useState } from 'react';

import Dashboard from './components/Dashboard';
import Menu from './components/Menu';

function App() {
    const [ selected, setSelected ] = useState(0);
    
    return (
        <div className="relative grid grid-cols-5">
            <div className='col-span-1 bg-primary'>
                <Menu selected={selected} setSelected={setSelected} />  
            </div>
            <div className='col-span-4 bg-gray-800 min-h-screen'>
                <Dashboard selected={selected} />
            </div>
        </div>
    );
}

export default App;