import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../api/users/get-user";
import { useStore } from "../../store/StorePageNumber";



export default function useGetUser(){

    const pageNumber = useStore((state) => state.pageNumber);

    return useQuery({
        queryKey: ["users", pageNumber],
        queryFn: () => fetchUsers(pageNumber)
    });
};
