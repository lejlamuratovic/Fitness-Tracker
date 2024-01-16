import { useQuery } from "react-query";
import { RoutineService } from "../services";
import { Routine } from "../utils/types";

// because ts couldn't infer the type of the error
interface ApiError {
    message: string;
}  

// get routine details by id
const useRoutine = (id: string) => {
    return useQuery<Routine, ApiError>(['routine', id],
        () => RoutineService.getRoutineById(id),
        { refetchOnWindowFocus: false }
    );
}

export default useRoutine;