import { useQuery } from "react-query";
import { UsersService } from "../services";
import { User } from "../utils/types";

// because ts couldn't infer the type of the error
interface ApiError {
    message: string;
}  

// get user details by id
const useUser = (id: string) => {
    return useQuery<User, ApiError>(['user', id],
        () => UsersService.getUserById(id),
        { refetchOnWindowFocus: false }
    );
}

export default useUser;