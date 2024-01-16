import { useQuery } from "react-query";
import { ExerciseService } from "../services";
import { Exercise } from "../utils/types";

// because ts couldn't infer the type of the error
interface ApiError {
    message: string;
}  

// get exercise details by id
const useExercise = (id: string) => {
    return useQuery<Exercise, ApiError>(['exercise', id],
        () => ExerciseService.getExerciseById(id),
        { refetchOnWindowFocus: false }
    );
}

export default useExercise;