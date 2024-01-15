import { Box, Container, TextField, Typography } from '@mui/material'
import ExerciseDetailList from '../components/ExerciseDetailList';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ExerciseDetail } from '../utils/types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// routine json 
const initialRoutine = 
{
    "id": "routine_1",
    "name": "Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
}

const RoutineDetails = () => {
    const [routine, setRoutine] = useState(initialRoutine);
    const [isChanged, setIsChanged] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // today's date in yyyy-mm-dd format
  
    const handleExerciseDetailsChange = (updatedList: ExerciseDetail[]) => {
        setRoutine({ ...routine, exercises: updatedList });
        setIsChanged(true);
    };

    const handleRoutineChange = (event: any) => {
        setRoutine({ ...routine, name: event.target.value });
        setIsChanged(true);
    };
  
    // todo: update exercise details in database
    const handleSaveChanges = () => {
        console.log('Routine saved: ', routine);
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

          {/* name of routine */}
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
          <DialogTitle sx={{mb: 2, minWidth: '300px'}}>Complete Routine</DialogTitle>
          <DialogContent>
            <TextField
              label="Completion Date"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              InputLabelProps={{ shrink: true }}
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
