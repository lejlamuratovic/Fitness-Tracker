import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { workoutLogsList } from '../../constants';
import TextField from '@mui/material/TextField';
import { Card, Container, Paper, Typography } from '@mui/material';

const WorkoutWeightGraph = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // filter the data based on the selected date range
  const filteredData = workoutLogsList.filter(log => {
    if (!startDate || !endDate) return true; // if no date range selected, show all data
    const logDate = new Date(log.date);
    return startDate <= logDate && logDate <= endDate; // check if not null and compare dates
  });

  const data = filteredData.map(log => {
    const totalWeight = log.exercises.reduce((acc, curr) => acc + curr.weight, 0);
    return { date: log.date, totalWeight };
  });

  return (
    <Paper elevation={3} sx={{ padding: 2}}>
      <Typography variant='h5' sx={{ marginBottom: 2 }}>Total Weight Lifted</Typography>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalWeight" fill="#1769aa" />
      </BarChart>

      <Container sx={{padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
        <TextField
          label="Start Date"
          type="date"
          onChange={(e) => setStartDate(new Date(e.target.value))}
          InputLabelProps={{
            shrink: true
          }}
          variant='filled'
        />
        <TextField
          label="End Date"
          type="date"
          onChange={(e) => setEndDate(new Date(e.target.value))}
          InputLabelProps={{
            shrink: true
          }}
          variant='filled'
        />
      </Container>
    </Paper>
  );
};

export default WorkoutWeightGraph;
