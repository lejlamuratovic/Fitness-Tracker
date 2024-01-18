import { useMutation, useQueryClient } from "react-query";
import { Routine } from "../utils/types";
import { RoutineService } from "../services";

interface ApiError {
    message: string;
}  

const useAddRoutine = () => {
    const queryClient = useQueryClient();
    return useMutation<Routine, ApiError, { routine: Routine }>(
        ({routine }) => RoutineService.createRoutine(routine),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('routines');
            },
        }
    );
};

export default useAddRoutine;