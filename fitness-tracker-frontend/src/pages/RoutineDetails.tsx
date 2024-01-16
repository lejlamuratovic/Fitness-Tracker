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
import RoutineService from '../services/routines';
import useUpdateRoutine from "../hooks/useUpdateRoutine";

const RoutineDetails = () => {
  const { id } = useParams();
  const [routine, setRoutine] = useState<Routine>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // today's date in yyyy-mm-dd format

  const updateRoutine = useUpdateRoutine();

  useEffect(() => {
    if (id) {
      setLoading(true);
      RoutineService.getRoutineById(id)
        .then((data: any) => {
          setRoutine(data);
        })
        .catch((error: any) => {
          setError(true);
          console.error('Error fetching routine:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);
  
  const handleExerciseDetailsChange = (updatedList: ExerciseDetail[]) => {
    if (routine) {
        setRoutine({ ...routine, exercises: updatedList });
        setIsChanged(true);
    }
  };

  const handleRoutineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (routine) {
          setRoutine({ ...routine, name: event.target.value });
          setIsChanged(true);
      }
  };

  const handleSaveChanges = () => {
      if (routine && id) {
          updateRoutine.mutate({ id, data: routine }, {
              onSuccess: () => {
                  console.log('Routine updated successfully');
              },
              onError: (error: any) => {
                  console.error('Error updating routine:', error);
              }
          });
      }
      setIsChanged(false);
  };
  
    // todo: mark routine as completed in database
    const handleCompleteRoutine = () => {
        setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
  
    const handleConfirmCompletion = () => {
        console.log('Routine completed on:', selectedDate);
        setOpenDialog(false);
    };
  
    const handleDateChange = (event: any) => {
        setSelectedDate(event.target.value);
    };
  
    return (
      <>
        <Container sx={{ mt: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" color="text.secondary" sx={{ fontWeight: 'bold', letterSpacing: '2px' }}>
            Workout Plan
          </Typography>

          {
            isLoading &&
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <p>Loading...</p>
            </Box>
          }

          {
            isError &&
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <p>Error fetching routine details</p>
            </Box>
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
                    exerciseDetailList={routine.exercises} 
                    onExerciseDetailsChange={handleExerciseDetailsChange}
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
