import appAxios from "./AppAxios";
import { Exercise } from "../utils/types";

const getExercises = async (): Promise<Exercise[]> => {
    return appAxios.get(`/exercise`).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
            return data;
        });
 }
 
 
 export default { getExercises };