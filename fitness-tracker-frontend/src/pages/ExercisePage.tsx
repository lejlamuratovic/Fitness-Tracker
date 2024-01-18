import { Box, Container, Grid, Typography, Paper, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import { useParams } from 'react-router-dom'
import { useExercise } from '../hooks';
import { Link } from 'react-router-dom';
import AddToRoutineDialog from '../components/AddToRoutineDialog';
import { useState } from 'react';

const ExercisePage = () => {
  const { id } = useParams();
  
  const validId = id ?? ''; // empty string if id undefined, bc ts null checks
  const { data: exercise, isLoading, isError, error } = useExercise(validId);

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
      setOpenDialog(true);
  };

  const handleCloseDialog = () => {
      setOpenDialog(false);
  }


  return (
    <>
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
        <p> {error?.message} </p>
      </Box>
    }

    { 
      exercise &&
        <Container sx={{ mt: 10, mb: 5 }}>
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>

                <Typography 
                    variant="h5" 
                    gutterBottom
                    color="#72A1BF"
                    sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2, textAlign: 'center', textShadow: '1px 1px 1px gray', fontSize: '30px' }}
                >
                  {exercise.name}
                </Typography>

                <Typography 
                    variant="body1" 
                    gutterBottom
                    color="text.secondary"
                    sx={{ fontWeight: 'bold', fontSize: '18px' }}
                >
                  {exercise.muscleGroup}
                </Typography>

                <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ textAlign: 'justify', mt: 3 }}
                >
                  {exercise.description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: '2rem', width: '100%' }}>
                    <Button 
                      variant="text" 
                      size="medium" 
                      sx = {{ 
                        color:"text.secondary",
                        '&:hover': {
                          color: '#72A1BF'
                        } 
                       }}
                      component={Link}
                      to={`/explore`}
                      >
                        <InputAdornment position="start">
                            <ArrowBackIos sx={{ fontSize: '20px' }} />
                        </InputAdornment>
                        Back
                    </Button>
                    <Button 
                      variant="contained" 
                      size="medium" 
                      sx = {{ backgroundColor:"#72A1BF" }}
                      onClick={handleOpenDialog}
                      >
                        Add to Routine
                      </Button>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '4px',
                  }}
                  alt={exercise.name}
                  src={exercise.imageUrl}
                />
              </Grid>

            </Grid>
          </Paper>
        </Container>
    }

        { 
        exercise && 
        <AddToRoutineDialog
            open={openDialog}
            onClose={handleCloseDialog}
            exerciseName={exercise.name}
            exerciseId={exercise.id}
        />
        }
    </>
  );
}

export default ExercisePage;
