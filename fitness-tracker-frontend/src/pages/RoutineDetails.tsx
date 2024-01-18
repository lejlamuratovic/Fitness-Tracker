import { Box, Container, TextField, Typography } from '@mui/material'
import ExerciseDetailList from '../components/ExerciseDetailList';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { ExerciseDetail, Routine } from '../utils/types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useParams } from 'react-router-dom';
import { useRoutine, useUpdateRoutine } from '../hooks';
import Loading from '../components/Loading';
import ErrorAlert from '../components/ErrorAlert';

const RoutineDetails = () => {
    const { id } = useParams();

    const validId = id ?? ''; // empty string if id undefined, bc ts null checks
    const { data, isLoading, isError, error } = useRoutine(validId);

    const [routine, setRoutine] = useState<Routine | null>(null);
    const [isChanged, setIsChanged] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [deletedExercises, setDeletedExercises] = useState<string[]>([]);

    const updateRoutine = useUpdateRoutine();

    useEffect(() => {
        if (data) setRoutine(data);
    }, [data]);
    
    const handleExerciseDetailsChange = (updatedList: ExerciseDetail[]) => {
      setRoutine(routine => routine ? { ...routine, exercises: updatedList } : null);
      setIsChanged(true);
    };

    const handleRoutineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoutine(routine => routine ? { ...routine, name: event.target.value } : null);
        setIsChanged(true);
    };

    const handleSaveChanges = () => {
      if (routine && id && routine.exercises) {
          const updatedExercises = routine.exercises.filter(exercise => 
              !deletedExercises.includes(exercise.detailId)
          );
  
          const updatedRoutine = { ...routine, exercises: updatedExercises };
  
          updateRoutine.mutate({ id, data: updatedRoutine }, {
              onSuccess: () => {
                  console.log('Routine updated successfully');
                  setDeletedExercises([]); // Reset the deleted exercises list
              },
              onError: (error: any) => console.error('Error updating routine:', error)
          });
      }
      setIsChanged(false);
  };  
  
    const handleCompleteRoutine = () => {
      console.log('Routine completion logic not implemented');
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => setOpenDialog(false);

    const handleConfirmCompletion = () => {
        console.log('Routine completed on:', selectedDate);
        setOpenDialog(false);
    };

    const handleDateChange = (event: any) => setSelectedDate(event.target.value);
  
    const handleDeleteExercise = (exerciseDetailId: string) => {
      setDeletedExercises(prev => [...prev, exerciseDetailId]);
      setIsChanged(true);
  };
  
    return (
      <>
        <Container sx={{ mt: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" color="text.secondary" sx={{ fontWeight: 'bold', letterSpacing: '2px' }}>
            Workout Plan
          </Typography>

          {
            isLoading &&
            <Loading />
          }

          {
            isError &&
            <ErrorAlert message={error?.message} />
          }

          {/* name of routine */}
          { 
            routine &&
            <Box>
              <Box>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontSize: '25px' }}>
                  Name
                </Typography>
                <TextField
                  type="text"
                  value={routine.name}
                  onChange={handleRoutineChange}
                  variant="outlined"
                  size="medium"
                  InputProps={{ style: { color: 'text.secondary' } }}
                  sx={{ minWidth: '300px', backgroundColor: 'white' }}
                />
              </Box>

              {/* exercises */}
              <Box>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontSize: '25px' }}>
                  Exercises
                </Typography>
                <ExerciseDetailList 
                  exerciseDetailList={routine.exercises ?? []} 
                  onExerciseDetailsChange={handleExerciseDetailsChange}
                  onDeleteExercise={handleDeleteExercise}
                />
              </Box>
          </Box>
          }

          {/* handle changes or complete the routine */}
          <Box sx={{ 
            mt: 2, 
            mb: 5, 
            display: 
            'flex', 
            width: '70%', 
            justifyContent: 'space-between',
            // media query for smaller screens
            '@media (max-width: 600px)': {
                width: '100%'
            }


            }}>
            <Button 
              variant="contained" 
              disabled={!isChanged} 
              color="success"
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
            <Button 
              variant="contained" 
              color="success" 
              onClick={handleCompleteRoutine}
            >
              Complete Routine
            </Button>
          </Box>
        </Container>

        {/* dialog for completing routine */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle sx={{mb: 1, minWidth: '300px'}}>Complete Routine</DialogTitle>
          <DialogContent>
            <TextField
              label="Completion Date"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              InputLabelProps={{ shrink: true }}
              margin="dense"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleConfirmCompletion}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </>
    );
};
  

export default RoutineDetails
