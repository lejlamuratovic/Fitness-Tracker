import { useMutation, useQueryClient } from 'react-query';
import { RoutineService } from '../services';
import { Routine } from '../utils/types';

interface ApiError {
    message: string;
}  

const useMarkRoutineDone = () => {
    const queryClient = useQueryClient();
    return useMutation<Routine, ApiError, { id: string, dateCompleted: string }>(
        ({ id, dateCompleted }) => RoutineService.markRoutineCompleted(id, dateCompleted),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('workoutlogs');
            },
        }
    );
};


export default useMarkRoutineDone;
