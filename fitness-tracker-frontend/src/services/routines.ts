import appAxios from "./appAxios";
import { ExerciseDetail, Routine } from "../utils/types";

// get routine by user id
const getRoutines = async (userId: string): Promise<Routine[]> => {
    return appAxios.get(`/routines/user/${userId}`).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
            return data;
        });
}

// get routine by id
const getRoutineById = async (routineId: string): Promise<Routine> => {
    return appAxios.get(`/routines/${routineId}`).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
            return data;
        });
}

// update routine
const updateRoutine = async (routineId: string, routine: Routine): Promise<Routine> => {
    try {
        const response = await appAxios.put(`/routines/${routineId}`, routine);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// add exercise to existing routine
const addExerciseToRoutine = async (id: string, exercise: ExerciseDetail): Promise<Routine> => {
    try {
        const response = await appAxios.post(`/routines/${id}/exercises`, exercise);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

 
export default { getRoutines, getRoutineById, updateRoutine, addExerciseToRoutine };