import React from 'react';
import axios from 'axios';

function Dashboard() {

    const getAllMaps = async () => {
        const maps =  await axios.get('/api/map');
        return console.log(maps.data);
    };
    getAllMaps();

    return (
        <div>
            <p>Hello from the Dashboard</p>
        </div>
    )
}

export default Dashboard;
