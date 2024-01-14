import { Container, Box, Paper, Divider } from '@mui/material';
import { user } from '../constants';
import UserInfo from '../components/UserInfo';
import MuscleGroupChart from '../components/MuscleGroupChart';
import WorkoutWeightGraph from '../components/WorkoutWeightGraph';

const UserPage = () => {
    return (
        <>
            <Container sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // stacks on small screens, flex row on medium screens and up
                justifyContent: 'space-between',
                alignContent: 'center',
                width: '100%',
                mt: 15,
                mb: 15,
                [`@media (max-width: 871px)`]: {
                    flexDirection: 'column'
                }
            }}>
                <Box sx={{ 
                    backgroundColor: '#47697E', 
                    pt: 10,
                    [`@media (max-width: 871px)`]: {
                        paddingTop: 0,
                        paddingBottom: 5
                    }
                    }}>
                    <UserInfo user={user}/>
                </Box>
                <Box sx={{ backgroundColor: 'white' }}> 
                    <MuscleGroupChart />
                    <Divider sx={{ backgroundColor: '#476487', width: '80%', display: 'block', margin: '0 auto' }}/>
                    <WorkoutWeightGraph />
                </Box> 
            </Container>
        </>
    )
}

export default UserPage