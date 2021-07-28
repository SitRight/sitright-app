import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(days, percentage) {
  return { days, percentage };
}

const data = [
  createData('Start', 20),
  createData('Jan1', 32),
  createData('Jan7', 48),
  createData('Jan14', 56),
  createData('Jan21', 60),
  createData('Jan28', 62),
  createData('Feb7', 74),
  createData('Now', 80),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Posture Quality over Time</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="days" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Posture Quality (%)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="percentage" stroke="black" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}