import { useQuery } from "react-query";
import { RoutineService } from "../services";
import { Routine } from "../utils/types";

// because ts couldn't infer the type of the error
interface ApiError {
    message: string;
}  

// get by user id 
const useRoutines = (userId: string) => {
    return useQuery<Routine[], ApiError>(['routines', userId],
        () => RoutineService.getRoutines(userId),
        { refetchOnWindowFocus: false }
    );
}

export default useRoutines;