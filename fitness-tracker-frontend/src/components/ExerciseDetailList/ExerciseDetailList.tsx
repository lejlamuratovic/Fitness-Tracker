import Grid from '@mui/material/Grid';
import ExerciseDetailCard from '../ExerciseDetailCard';
import { exerciseDetailList } from '../../constants';

const ExerciseDetailList = () => {
  return (
    <Grid container direction="column" spacing={0}>
      {exerciseDetailList.map(detail => (
        <Grid item key={detail.id}>
          <ExerciseDetailCard exerciseDetail={detail} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ExerciseDetailList;
