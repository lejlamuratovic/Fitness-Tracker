import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ExerciseDetail } from '../../utils/types';

type Props = {
    exerciseDetail: ExerciseDetail,
};
const ExerciseDetailCard = ({ exerciseDetail }: Props) => {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 700, m: 2 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
          {exerciseDetail.exerciseName}
        </Typography>
        <Grid container spacing={1} sx={{ marginTop: 1, alignItems: 'center' }}>
          <Grid item xs>
            <TextField
              label="Weight (kg)"
              type="number"
              defaultValue={exerciseDetail.weight}
              variant="outlined"
              size="small"
              InputLabelProps={{ style: { fontWeight: 'bold', textTransform: 'uppercase' } }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Sets"
              type="number"
              defaultValue={exerciseDetail.sets}
              variant="outlined"
              size="small"
              InputLabelProps={{ style: { fontWeight: 'bold', textTransform: 'uppercase' } }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Reps"
              type="number"
              defaultValue={exerciseDetail.reps}
              variant="outlined"
              size="small"
              InputLabelProps={{ style: { fontWeight: 'bold', textTransform: 'uppercase' } }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExerciseDetailCard;
