import appAxios from "./appAxios";
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

const addExercise = async (formData: FormData): Promise<Exercise> => {
    return appAxios.post('/exercise/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => response.data);
};

export default { getExercises, getExerciseById, addExercise };