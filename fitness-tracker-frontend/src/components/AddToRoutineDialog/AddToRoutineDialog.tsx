import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { routineList } from '../../constants';

type Props = {
    open: boolean;
    onClose: () => void;
    exerciseName: string;
};

const AddToRoutineDialog = ({ open, onClose, exerciseName }: Props) => {
    const [weight, setWeight] = useState(0);
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [selectedRoutine, setSelectedRoutine] = useState('');

    const handleSubmit = () => {
        console.log({ exerciseName, weight, sets, reps, selectedRoutine });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add {exerciseName} to Routine</DialogTitle>
            <DialogContent>
                
                {/* set exercise details */}
                <TextField label="Weight (kg)" type="number" value={weight} onChange={(e) => setWeight(parseInt(e.target.value) || 0)} fullWidth margin="dense" />
                <TextField label="Sets" type="number" value={sets} onChange={(e) => setSets(parseInt(e.target.value) || 0)} fullWidth margin="dense" />
                <TextField label="Reps" type="number" value={reps} onChange={(e) => setReps(parseInt(e.target.value) || 0)} fullWidth margin="dense" />

                {/* select from available routines */}
                <FormControl fullWidth margin="dense">
                    <InputLabel id="routine-select-label">Select Routine</InputLabel>
                    <Select
                        labelId="routine-select-label"
                        value={selectedRoutine}
                        label="Select Routine"
                        onChange={(e) => setSelectedRoutine(e.target.value)}
                    >
                        {routineList.map((routine) => (
                            <MenuItem key={routine.id} value={routine.id}>{routine.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddToRoutineDialog;
