import ExerciseList from '../components/ExerciseList'
import { Box, Container } from '@mui/material'
import ExerciseModal from '../components/ExerciseModal'

const ExplorePage = () => {
    return (
        <>
            <Container sx={{ mt: 12 }} >
                <ExerciseList />
            </Container>
            <Box sx={{ height: '100px', width: '100px', position: 'fixed', right: 15, bottom: 5 }}>
                <ExerciseModal />
            </Box>
        </>
    )
}

export default ExplorePage
