import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ExerciseDetail } from '../../utils/types';

type Props = {
    exerciseDetail: ExerciseDetail,
    onDetailChange: (updatedDetail: ExerciseDetail) => void;
};

const ExerciseDetailCard = ({ exerciseDetail, onDetailChange }: Props) => {

  // called when any of the fields are changed, managing the state of the exercise detail
  const handleFieldChange = (field: string, value: number) => {
    onDetailChange({ ...exerciseDetail, [field]: value });
  };

  return (
    <Card sx={{ minWidth: 250, maxWidth: 700, m: 1 }}>
      <CardContent>
        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
          {exerciseDetail.exerciseName}
        </Typography>
        <Grid container spacing={1} sx={{ marginTop: 1, alignItems: 'center' }}>
          <Grid item xs>
            <TextField
              label="Weight (kg)"
              type="number"
              defaultValue={exerciseDetail.weight}
              onChange={(e) => handleFieldChange('weight', parseInt(e.target.value))}
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
              onChange={(e) => handleFieldChange('sets', parseInt(e.target.value))}
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
              onChange={(e) => handleFieldChange('reps', parseInt(e.target.value))}
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
