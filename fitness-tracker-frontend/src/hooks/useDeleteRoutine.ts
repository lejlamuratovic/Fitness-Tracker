import { RoutineService } from "../services";
import { Routine } from "../utils/types";
import { useMutation, useQueryClient } from "react-query";

interface ApiError {
    message: string;
}  

const useDeleteRoutine = () => {
    const queryClient = useQueryClient();
    return useMutation<Routine, ApiError, { id: string }>(
        ({ id }) => RoutineService.deleteRoutine(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('routines');
            },
        }
    );
};

export default useDeleteRoutine;