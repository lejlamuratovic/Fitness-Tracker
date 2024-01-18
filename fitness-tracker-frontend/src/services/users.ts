import appAxios from "./appAxios";
import { User } from "../utils/types";

 // get exercise by id 
 const getUserById = async (id: string): Promise<User> => {
    return appAxios.get(`/users/${id}`).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
            return data;
        });
}

// update user 
const updateUser = async (id: string, user: User): Promise<User> => {
    return appAxios.put(`/users/${id}`, user).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
            return data;
        });
}
 
 
 export default { getUserById, updateUser };