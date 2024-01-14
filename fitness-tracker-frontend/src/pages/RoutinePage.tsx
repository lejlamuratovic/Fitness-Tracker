import { Box, Container, Typography } from "@mui/material"
import RoutineList from "../components/RoutineList";
import AddButton from "../components/AddButton";

// dummy function
const handleOpenModal = () => {
    console.log('Open modal')
}

const RoutinePage = () => {
  return (
    <>
        <Container sx={{ 
            pt: '50px', 
            display: 'block', 
            margin: '0 auto',
            // media query for mobile devices
            '@media screen and (max-width: 535px)': {
                pt: '100px'
            }
            }}>
            <Typography 
                variant='h5' 
                color='text.secondary' 
                sx={{ 
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em', 
                    fontWeight: 'bold', 
                    textShadow: '1px 1px 1px lightgray', 
                    marginBottom: '20px'
                }}>
                Your Routines
            </Typography>
            <Box sx={{ mt: 3 }}>
                <RoutineList />
            </Box>
            <Box sx={{ height: '100px', width: '100px', position: 'fixed', right: 15, bottom: 5 }}>
                <AddButton handleClick={handleOpenModal} size="large" sx={{ fontSize: '55px' }}/> 
            </Box>
        </Container>
    </>
  );
}

export default RoutinePage
