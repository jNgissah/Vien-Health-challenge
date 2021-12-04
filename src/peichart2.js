import * as React from 'react';
import ReactDOM from 'react-dom'

import Chart from "react-google-charts";


export default function Barchart() {


    return (
        <div style={{ maxWidth: "100%"}}>


            <Chart
               
                width={'100%'}
                height={'120%'}
                
                padding="0"chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['', ''],
                    ['', 4],
                    ['', 11],

                ]}
                options={{

                    colors: ['#FACF55', '#EAECEE'],
                    pieHole: 0.6,
                    legend: { position: 'none' },

                }}
                rootProps={{ 'data-testid': '3' }}
            />



        </div>
    );
}

