
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Exercise } from "../../utils/types";
import AddToRoutineDialog from '../AddToRoutineDialog';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import DeleteExerciseDialog from '../DeleteExerciseDialog';

type Props = {
  exercise: Exercise;
};

const ExerciseCard = ({ exercise }: Props) => {
    const userType = useSelector((state: RootState) => state.auth.userType);

    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleOpenAddDialog = () => {
        setOpenAddDialog(true);
    };

    const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
    };

    const handleOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const handleConfirmDelete = () => {
        console.log("Confirmed delete for exercise:", exercise.id);
        handleCloseDeleteDialog();
    };

  return (
      <Card sx={{ maxWidth: 250, minWidth: 250, display: 'block', margin: 'auto', mt: 3 }}>
          <CardMedia
              sx={{ margin: 'auto', height: 160, width: 180, p: 2, mt: 1 }}
              image={exercise.imageUrl}
              title={exercise.name}
          />
          <CardContent>
              <Typography gutterBottom variant='subtitle1' component="div" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                  {exercise.name}
              </Typography>
              <Typography variant="body2" color="text.primary">
                  {exercise.muscleGroup}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  {exercise.description}
              </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
                {
                    userType === 'ADMIN' ? (
                        <Button size="small" onClick={handleOpenDeleteDialog}>Delete Routine</Button>
                    ) : (
                        <Button size="small" onClick={handleOpenAddDialog}>Add to Routine</Button>
                        )
                }
              <Button 
                size="small"
                component={Link}
                to={`/exercises/${exercise.id}`}
                sx = {{
                    '&:hover': {
                        color: 'white'
                    }
                }}
                >
                    See More
                </Button>
          </CardActions>
            <AddToRoutineDialog
                open={openAddDialog}
                onClose={handleCloseAddDialog}
                exerciseName={exercise.name}
                exerciseId={exercise.id}
            />
            <DeleteExerciseDialog
                open={openDeleteDialog}
                onClose={handleCloseDeleteDialog}
                onConfirm={handleConfirmDelete}
                exerciseName={exercise.name}
            />
      </Card>
  );

}

export default ExerciseCard