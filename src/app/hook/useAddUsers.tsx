
import useAddUser from "../hook/useAddUser"
import { useRouter } from 'next/navigation'
import { User } from "../../app/schema-users/schema"
import { UserSchema } from "../../app/schema-users/schema"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

export const useAddUsers= () =>{
    const { register, handleSubmit, formState: { errors } , getValues } = useForm<User>({
        resolver: zodResolver(UserSchema)
    });

    const { mutate }: any = useAddUser()
    const router = useRouter();

    const onAddUser = handleSubmit((data) => {
        const userData = {
            username: data.username,
            name: data.name,
            email: data.email,
            phone: data.phone,
            website: data.website,
            address: {
                street: data.address?.street,
                city: data.address?.city,
                suite: data.address?.suite,
                zipcode: data.address?.zipcode,
                geo: {
                    lat: data.address?.geo?.lat,
                    lng: data.address?.geo?.lng
                }
            },
            company: {
                name: data.company?.name,
                catchPhrase: data.company?.catchPhrase,
                bs: data.company?.bs
            }
        };

        mutate(userData);
        router.push("/users");
    })
    return {register , errors , onAddUser}

}
