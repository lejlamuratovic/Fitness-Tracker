import AddButton from '../components/AddButton'
import ExerciseList from '../components/ExerciseList'
import { Box, Container } from '@mui/material'

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
                <AddButton handleClick={handleOpenModal} size="large" sx={{ fontSize: '55px' }}/> 
            </Box>
        </>
    )
}

export default ExercisePage
