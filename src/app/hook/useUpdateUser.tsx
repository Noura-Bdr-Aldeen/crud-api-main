import { useMutation } from '@tanstack/react-query';
import { UpdateUser } from '../../api/users/update-user';
import { useQueryClient } from "@tanstack/react-query";

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UpdateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

export default useUpdateUser;
