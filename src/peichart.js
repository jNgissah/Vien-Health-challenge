import * as React from 'react';
import ReactDOM from 'react-dom'

import Chart from "react-google-charts";


export default function Barchart() {


    return (
        <div style={{ maxWidth: "100%" }}>


            <Chart
                width={'100%'}
                height={'120%'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['', ''],
                    ['', 11],
                    ['', 4],
                    
                ]}
                options={{
                   
                    colors: ['#016450', '#EAECEE'],
                    pieHole: 0.6,
                    legend: { position: 'none' },
                   
                }}
                rootProps={{ 'data-testid': '3' }}
            />



        </div>
    );
}

