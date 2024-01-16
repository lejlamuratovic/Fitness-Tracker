import { useQuery } from "react-query";
import { ExerciseService } from "../services";
import { Exercise } from "../utils/types";

// because ts couldn't infer the type of the error
interface ApiError {
    message: string;
}  

const useExercises = () => {
   return useQuery<Exercise[], ApiError>('exercises',
       () => ExerciseService.getExercises(),
       { refetchOnWindowFocus: false }
   );
}


export default useExercises;