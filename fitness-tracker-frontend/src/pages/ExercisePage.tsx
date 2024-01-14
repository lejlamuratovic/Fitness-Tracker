import React from 'react';
import { Box, Container, Grid, Typography, Paper, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';

const exercise = {
  id: "ex_lat_pulldown_1",
  name: "Lat Pulldown",
  muscleGroup: "LATS",
  description: "A compound exercise targeting the latissimus dorsi. A compound exercise targeting the latissimus dorsi.A compound exercise targeting the latissimus dorsi. A compound exercise targeting the latissimus dorsi. A compound exercise targeting the latissimus dorsi. A compound exercise targeting the latissimus dorsi. A compound exercise targeting the latissimus dorsi.",
  imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
};

const ExercisePage = () => {
  return (
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
                <Button variant="text" size="medium" sx = {{ color:"text.secondary"}}>
                    <InputAdornment position="start">
                        <ArrowBackIos sx={{ fontSize: '20px' }} />
                    </InputAdornment>
                    Back
                </Button>
                <Button variant="contained" size="medium" sx = {{ backgroundColor:"#72A1BF" }}>Add to Routine</Button>
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
  );
}

export default ExercisePage;
