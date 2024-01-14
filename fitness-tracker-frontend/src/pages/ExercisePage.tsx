import AddButton from '../components/AddButton'
import ExerciseList from '../components/ExerciseList'
import { Box, Container } from '@mui/material'
import ExerciseModal from '../components/ExerciseModal'

// dummy function 
const handleOpenModal = () => {
    console.log('Open modal')
}

const ExercisePage = () => {
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

export default ExercisePage
