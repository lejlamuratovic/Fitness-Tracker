import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Card, Divider } from '@mui/material';
import UserAvatar from '../UserAvatar';
import { WorkoutLog, User } from '../../utils/types';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

type Props = {
    user: User;
    workoutLog: WorkoutLog;
}

const WorkoutCard = ({ user, workoutLog }: Props) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);


    const getDayOfWeek = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
        const [year, month, day] = dateString.split('.').map(Number);
        const date = new Date(year, month - 1, day); // 0-indexed month
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <Card sx={{ margin:'5px', padding: 2, maxWidth: "sm", minWidth: "300px"}}>

            <Container sx={{ display: 'flex', alignItems: 'center' }}>

            <UserAvatar firstName={user.firstName} lastName={user.lastName} />
                <Container sx={{ textAlign: 'left' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {user.firstName}
                    </Typography>
                    <Typography variant="body2" sx={{}}>
                        {getDayOfWeek(workoutLog.date)}, {workoutLog.date}
                    </Typography>
                </Container>
            </Container>

            <Divider sx={{ marginTop: '5px', borderColor: "black", opacity: 0.5 }} />

            <Container sx = {{ minHeight: '130px' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'left', margin: '10px 0 2px 0' }}>
                    Workout
                </Typography>
                {workoutLog.exercises.slice(0, 3).map((exercise, index) => (
                    <Typography key={index} variant="body2" sx={{ textAlign: 'left' }}>
                        <span>
                        {exercise.exerciseName} &nbsp; 
                        </span>
                        |  &nbsp;{exercise.sets} sets x {exercise.reps} reps, {exercise.weight} kg
                    </Typography>
                ))}

                {workoutLog.exercises.length > 3 && (
                    <Button onClick={handleOpen} variant="text" size="small" sx={{ mt: 1 }}>
                        See More
                    </Button>
                )}

                <Modal open={openModal} onClose={handleClose}>
                    <div style={{ backgroundColor: 'white', padding: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        {workoutLog.exercises.map((exercise, index) => (
                            <Typography key={index} variant="body2" color="text.primary" sx={{ textAlign: 'left' }}>
                                {exercise.exerciseName} | {exercise.sets} sets x {exercise.reps} reps, {exercise.weight} kg
                            </Typography>
                        ))}
                    </div>
                </Modal>
            </Container>

        </Card>
    );
}

export default WorkoutCard;
