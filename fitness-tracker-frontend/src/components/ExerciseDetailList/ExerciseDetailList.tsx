import Grid from '@mui/material/Grid';
import ExerciseDetailCard from '../ExerciseDetailCard';
import { ExerciseDetail } from '../../utils/types';

type Props = {
  exerciseDetailList: ExerciseDetail[];
  onExerciseDetailsChange: (updatedList: ExerciseDetail[]) => void;
};

const ExerciseDetailList = ({ exerciseDetailList, onExerciseDetailsChange }: Props) => {

  // called when any of the fields are changed, managing the state of the exercise detail list
  const handleDetailChange = (updatedDetail: ExerciseDetail) => {
    const updatedList = exerciseDetailList.map(detail =>
      detail.id === updatedDetail.id ? updatedDetail : detail
    );
    onExerciseDetailsChange(updatedList);
  };

  return (
    <Grid container direction="column" spacing={0}>
      {exerciseDetailList.map(detail => (
        <Grid item key={detail.id}>
          <ExerciseDetailCard 
            exerciseDetail={detail} 
            onDetailChange={handleDetailChange} 
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ExerciseDetailList;
