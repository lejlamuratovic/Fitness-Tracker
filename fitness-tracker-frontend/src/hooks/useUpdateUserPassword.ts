import { useMutation, useQueryClient } from "react-query";
import { Password, User } from "../utils/types";
import { UsersService } from "../services";

interface ApiError {
    message: string;
}  

const useUpdateUserPassword = () => {
    const queryClient = useQueryClient();
    return useMutation<User, ApiError, { id: string, password: Password }>(
        ({ id, password }) => UsersService.updateUserPassword(id, password),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('user');
            },
        }
    );
};

export default useUpdateUserPassword;