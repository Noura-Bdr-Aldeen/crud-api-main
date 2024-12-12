import { fetchUserById } from "../../../api/users/get-user-by-id"
import UserDetails from "../../components/UserDetails"


type Props = {
    params: Promise<{ userId: string }>
}

export default async function userDetails({ params }: Props) {
    const { userId } = await params
    const user = await fetchUserById(userId);

    return (
        <UserDetails user={user} />
    );
};

