import { useMutation } from '@tanstack/react-query';
import { AddUser } from '../../api/users/post-user';
import { useQueryClient } from "@tanstack/react-query";
import { User } from '../schema-users/schema';

const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: User) => AddUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

export default useAddUser;
