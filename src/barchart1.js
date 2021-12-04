import * as React from 'react';
import ReactDOM from 'react-dom'

import Chart from "react-google-charts";


export default function Barchart () {
	

		return (
			<div style={{  maxWidth: "100%" }}>


                <Chart
                    width={'100%'}
                    height={'55px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['years', ''],
                        ['1', 9],
                        ['2', 3],
                        ['3', 9],
                        ['4', 8],
                        ['5', 7],
                        ['6', 2],
                        ['7', 10],
                    ]}
                    options={{
                       
                        colors:"#FF8433",
                        legend: { position: 'none' },
                        hAxis: { position: 'none' },
                        hAxis: { textColor: '#fff' },
                        tooltip: { trigger: 'none' },
                       

                       
                       

                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                />



				
			</div>
		);
	}

