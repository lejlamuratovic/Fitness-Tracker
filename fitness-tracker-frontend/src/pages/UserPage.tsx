import { Container, Box, Divider } from '@mui/material';
import { workoutLogsList } from '../constants';
import UserInfo from '../components/UserInfo';
import MuscleGroupChart from '../components/MuscleGroupChart';
import WorkoutWeightGraph from '../components/WorkoutWeightGraph';
import WorkoutList from '../components/WorkoutList';

const UserPage = () => {
    return (
        <>
            <Container sx={{ marginTop: '40px', display: 'block', margin: '0 auto' }}>
                <Box sx={{ pt: 10 }}>
                    <UserInfo />
                </Box> 
                <Divider sx={{ width: '80%', display: 'block', ml: 'auto', mr: 'auto', mt: 3, mb: 3, backgroundColor: 'gray' }} />
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    alignContent: 'center',
                    [`@media (max-width: 982px)`]: {
                        flexDirection: 'column'
                    }
                    }}>
                    <MuscleGroupChart />
                    <WorkoutWeightGraph />
                </Box>
                <Divider sx={{ width: '80%', display: 'block', ml: 'auto', mr: 'auto', mt: 3, mb: 3, backgroundColor: 'gray' }} />
                <Box sx={{  }}>
                    <WorkoutList workoutLogsList={workoutLogsList} />
                </Box>
            </Container> 
        </>
    )
}

export default UserPage