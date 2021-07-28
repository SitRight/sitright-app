import React from 'react';
import Title from './Dashboard/Title';
import { Chart } from "react-google-charts";

export default function Improvement() {
  return (
    <React.Fragment>
      <Title>Daily Breakdown</Title>
      <Chart
        width={'250px'}
        height={'265px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Good', 28],
          ['Bad', 11],
        ]}
        options={{
          color: 'black',
          legend: 'none',
          slices: {
            0: { color: '#D1AEB9' },
            1: { color: 'black' },
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </React.Fragment>
  );
}