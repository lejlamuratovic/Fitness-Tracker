import { useMutation, useQueryClient } from "react-query";
import { ExerciseService } from "../services";
import { Exercise } from "../utils/types";


interface ApiError {
    message: string;
}  

const useUpdateExercise = () => {
    const queryClient = useQueryClient();
    return useMutation<Exercise, ApiError, { id: string; formData: FormData }>(
        ({ id, formData }) => ExerciseService.updateExercise(id, formData),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('exercises');
            },
        }
    );
};

export default useUpdateExercise;
