import React, { useState, useEffect } from 'react';
import { Container, Grid, Pagination, TextField, Typography } from '@mui/material';
import WorkoutCard from '../WorkoutCard';
import { WorkoutLog } from '../../utils/types';
import { user } from '../../constants';

type Props = {
  workoutLogsList: WorkoutLog[];
};

const WorkoutList = ({ workoutLogsList }: Props) => {
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredWorkoutLogs, setFilteredWorkoutLogs] = useState(workoutLogsList);

  useEffect(() => {
    const filteredLogs = workoutLogsList.filter(log => {
      const logDate = new Date(log.date);
      const start = startDate ? new Date(startDate) : new Date('1970-01-01');
      const end = endDate ? new Date(endDate) : new Date('2999-12-31');
      return logDate >= start && logDate <= end;
    });
    setFilteredWorkoutLogs(filteredLogs);
    setPage(1); // to reset to first page after filtering
  }, [startDate, endDate, workoutLogsList]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWorkoutLogs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container>

      <Typography variant='h5' color='text.secondary' sx={{ marginBottom: 2 }}>Workout History</Typography>
      {/* to filter workouts by date */}
      <TextField
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        sx={{ m: 2 }}
      />
      <TextField
        label="End Date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        sx={{ m: 2 }}
      />

      {/* workout list */}
      <Grid container spacing={2}>
        {currentItems.map((workoutLog, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <WorkoutCard user={user} workoutLog={workoutLog} />
          </Grid>
        ))}
      </Grid>

      {/* pagination */}
      <Pagination
        count={Math.ceil(filteredWorkoutLogs.length / itemsPerPage)}
        page={page}
        onChange={handleChangePage}
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
};

export default WorkoutList;
