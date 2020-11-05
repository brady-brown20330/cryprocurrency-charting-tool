import React from 'react';
import {Line} from 'react-chartjs-2';

  const Chart = (props) => {
    return (
        <div>
        <Line
          data={props.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
}

export default Chart;