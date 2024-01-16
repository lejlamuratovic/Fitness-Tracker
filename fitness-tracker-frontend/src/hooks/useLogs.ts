import { useQuery } from "react-query";
import { WorkoutLogsService } from "../services";
import { WorkoutLog } from "../utils/types";

// because ts couldn't infer the type of the error
interface ApiError {
    message: string;
}  

// get all logs per user id 
const useLogs = (userId: string) => {
    return useQuery<WorkoutLog[], ApiError>(['workout logs', userId],
        () => WorkoutLogsService.getLogsByUserId(userId),
        { refetchOnWindowFocus: false }
    );
}

export default useLogs;