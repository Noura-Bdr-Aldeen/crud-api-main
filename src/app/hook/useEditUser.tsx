import { useRouter } from 'next/navigation'
import useUpdateUser from "../hook/useUpdateUser"
import { UserSchema } from "../../app/schema-users/schema"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from "../types/user"


export const useEditUser = (user : User)=>{
     
    const { register, handleSubmit, formState: { errors } } = useForm<User>({
        resolver: zodResolver(UserSchema),
        defaultValues: user
    });
   const { mutate } = useUpdateUser()
    const router = useRouter();
    const onUpdateUser = handleSubmit(async (data) => {
        const userData = {
            id: user.id,
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
return { register , errors , onUpdateUser }
}