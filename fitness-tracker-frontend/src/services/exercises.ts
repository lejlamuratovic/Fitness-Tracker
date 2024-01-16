import appAxios from "./AppAxios";
import { Exercise } from "../utils/types";

// get all exercises
const getExercises = async (): Promise<Exercise[]> => {
    return appAxios.get(`/exercise/`).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
            return data;
        });
 }

 // get exercise by id 
 const getExerciseById = async (id: string): Promise<Exercise> => {
    return appAxios.get(`/exercise/${id}`).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
            return data;
        });
}
 
 
 export default { getExercises, getExerciseById };