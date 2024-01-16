import { RoutineService } from "../services";
import { Routine } from "../utils/types";
import { useMutation, useQueryClient } from "react-query";

interface ApiError {
    message: string;
}  

const useUpdateRoutine = () => {
    const queryClient = useQueryClient();
    return useMutation<Routine, ApiError, { id: string; data: Routine }>(
        ({ id, data }) => RoutineService.updateRoutine(id, data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('routines');
            },
        }
    );
};

export default useUpdateRoutine;