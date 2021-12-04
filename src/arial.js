import * as React from 'react';
import ReactDOM from 'react-dom'

import Chart from "react-google-charts";


export default function Barchart() {


    return (
        <div >

            
            <Chart
                width={'100%'}
                height={'80px'}
                chartType="AreaChart"
                position="relative"
                loader={<div>Loading Chart</div>}
                data={[
                    ['', ''],
                    ['Mon', 900],
                    ['Tue', 200],
                    ['Wed', 500],
                    ['Thur', 300],
                    ['Fri', 700],
                    ['Sat', 100],
                    ['Sun', 800],
                ]}
                options={{
                    isStacked: true,
                    height: 200,

                    colors: ['#FF8433'],
                    legend: { position: 'none', maxLines: 3 },
                    vAxis: { minValue: 0 },
                    ticks: ["$3", "$6k", "$9k" ],
                }}
                rootProps={{ 'data-testid': '2' }}
            />


        </div>
    );
}

