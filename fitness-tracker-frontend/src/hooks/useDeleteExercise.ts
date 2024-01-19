import { ExerciseService } from "../services";
import { Exercise } from "../utils/types";
import { useMutation, useQueryClient } from "react-query";

interface ApiError {
    message: string;
}  

const useDeleteExercise = () => {
    const queryClient = useQueryClient();
    return useMutation<Exercise, ApiError, { id: string }>(
        ({ id }) => ExerciseService.deleteExercise(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('exercises');
            },
        }
    );
};

export default useDeleteExercise;