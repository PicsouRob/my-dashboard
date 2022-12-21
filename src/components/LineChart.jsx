import React from 'react';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart() {
    const mixedChart = new Chart({});
    console.log(mixedChart);
    
    const data = {
        datasets: [ {
            type: 'line',
            label: '',
            data: [ 65, 59, 80, 81, 36, 55, 40 ],
            fill: false,
            borderColor: "rgb(184, 67, 0)",
        }, {
            type: 'bar',
            label: '',
            backgroundColor: "rgb(66, 135, 245)",
            data: [ 5, 7, 12, 17, 20, 23 ],
        } ],
        labels: [ '19:00', '19:10', '19:20', '19:30', "19:40", "19:50" ],
    };
    
    return (
        <div className="">
            <Line data={ data } />
        </div>  
    );
}

// git remote add origin https://github.com/PicsouRob/dashboard.git
// git branch -M main
// git push -u origin main

export default LineChart;