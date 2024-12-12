import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import deleteUserFn from "../../api/users/delete-user";

export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteUserFn,
        onSuccess: () => {
            // Invalidate and refetch the users query
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error) => {
            console.error('Error deleting user:', error);
        },
    });
};

