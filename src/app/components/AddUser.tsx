"use client"

import { useState } from "react"
import useAddUser from "../hook/useAddUser"
import { Grid, Button, TextField, Divider, Box, Typography } from "@mui/material"
import { useRouter } from 'next/navigation'
import { User } from "../../app/schema-users/schema"
import { UserSchema } from "../../app/schema-users/schema"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'



const AddUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<User>({
        resolver: zodResolver(UserSchema)
    });

    const [inputValues, setInputValues] = useState({
        username: '',
        name: '',
        email: '',
        phone: '',
        website: '',
        address: { street: '', city: '', suite: '', zipcode: '', geo: { lat: '', lng: '' } },
        company: { name: '', catchPhrase: '', bs: '' }
    });

    const { mutate }: any = useAddUser()
    const router = useRouter();

    const onAddUser =() => {
        const userData = {
            username: inputValues.username,
            name: inputValues.name,
            email: inputValues.email,
            phone: inputValues.phone,
            website: inputValues.website,
            address: {
                street: inputValues.address?.street,
                city: inputValues.address?.city,
                suite: inputValues.address?.suite,
                zipcode: inputValues.address?.zipcode,
                geo: {
                    lat: inputValues.address?.geo?.lat,
                    lng: inputValues.address?.geo?.lng
                }
            },
            company: {
                name: inputValues.company?.name,
                catchPhrase: inputValues.company?.catchPhrase,
                bs: inputValues.company?.bs
            }
        };

     mutate(userData);
        router.push("/users");
    };



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValues(prev => {
            const [parentKey, childKey] = name.split('.');
            if (parentKey && childKey) {
                const parentObj = prev[parentKey];
                if (!parentObj) {
                    return { ...prev, [parentKey]: {} as Partial<User> };
                }
                parentObj[childKey] = value;
                return { ...prev };
            }
            return { ...prev, [name]: value };
        });
    };


    return (
        <>

            <Grid
                container
                rowSpacing={2}
                columnSpacing={2}
                sx={{
                    maxWidth: '60%',
                    width: { xs: '100%', sm: '80%' },
                    margin: '0 auto',
                }}
            >
                <Typography
                    color="primary"
                    variant="h4"
                >
                    Add New User
                </Typography>

                <Divider
                    sx={{
                        width: "100%",
                        padding: "20px 0  20px 0",
                        color: "blue"
                    }}
                    textAlign="left"
                >
                    Personal Info
                </Divider>
                <form onSubmit={handleSubmit(onAddUser)}>
                    <Grid
                        item
                        container
                        rowSpacing={2}
                        columnSpacing={2}
                    >
                        {/* Use a conditional operator to check if there's an error message and convert it to a boolean 
                        This fix converts the string error message to a boolean value, which should resolve the type mismatch error. The !! operator first checks if the message exists (truthy) and then coerces it to a boolean (true if truthy, false otherwise).
                        */}
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                required
                                label="username"
                                {...register("username")}
                                value={inputValues.username}
                                onChange={handleChange}
                                error={!!errors?.username?.message}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="Name"
                                {...register("name")}
                                value={inputValues.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                required
                                label="Email"
                                {...register("email")}
                                value={inputValues.email}
                                onChange={handleChange}
                                error={!!errors?.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                required
                                label="phone"
                                {...register("phone")}
                                value={inputValues.phone}
                                onChange={handleChange}
                                error={!!errors?.phone?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="website"
                                {...register("website")}
                                value={inputValues.website}
                                onChange={handleChange}
                                error={!!errors?.website?.message}
                            />
                        </Grid>
                    </Grid>

                    <Divider
                        sx={{
                            width: "100%",
                            padding: "40px 0  20px 0",
                            color: "blue"
                        }}
                        textAlign="left"
                    >
                        Address Info
                    </Divider>

                    <Grid
                        item
                        container
                        rowSpacing={2}
                        columnSpacing={2}
                    >
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="street"
                                {...register("address.street")}
                                value={inputValues.address?.street}
                                onChange={handleChange}
                                error={!!errors?.address?.street?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="city"
                                {...register("address.city")}
                                value={inputValues.address?.city}
                                onChange={handleChange}
                                error={!!errors?.address?.city?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="suite"
                                {...register("address.suite")}
                                value={inputValues.address.suite}
                                onChange={handleChange}
                                error={!!errors?.address?.suite?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="zipcode"
                                {...register("address.zipcode")}
                                value={inputValues.address?.zipcode}
                                onChange={handleChange}
                                error={!!errors?.address?.zipcode?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="geo.lat"
                                {...register("address.geo.lat")}
                                value={inputValues.address?.geo?.lat}
                                onChange={handleChange}
                                error={!!errors?.address?.geo?.lat?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="geo.lng"
                                {...register("address.geo.lng")}
                                value={inputValues.address?.geo?.lng}
                                onChange={handleChange}
                                error={!!errors?.address?.geo?.lng?.message}
                            />
                        </Grid>
                    </Grid>

                    <Divider
                        sx={{
                            width: "100%",
                            padding: "20px 0  20px 0",
                            color: "blue"
                        }}
                        textAlign="left"
                    >
                        Company Info
                    </Divider>

                    <Grid
                        item
                        container
                        rowSpacing={2}
                        columnSpacing={2}
                    >
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                required
                                label="company.name"
                                {...register("company.name")}
                                value={inputValues.company?.name}
                                onChange={handleChange}
                                error={!!errors?.company?.name?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="company.catchPhrase"
                                {...register("company.catchPhrase")}
                                value={inputValues.company?.catchPhrase}
                                onChange={handleChange}
                                error={!!errors?.company?.catchPhrase?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="company.bs"
                                {...register("company.bs")}
                                value={inputValues.company?.bs}
                                onChange={handleChange}
                                error={!!errors?.company?.bs?.message}
                            />
                        </Grid>
                    </Grid>
                    {Object.entries(errors).map(([field, error]) => (
                                <div key={field}>
                                    <p>{error.message}</p>
                                </div>
                            ))}
                    <Box sx={{
                        width: "100%",
                        marginTop: "20px"
                    }}>
                        <Button
                            fullWidth
                            variant="contained"
                            type="submit">
                            Add User
                        </Button>
                    </Box>
                </form>
            </Grid>
        </>

    )
}

export default AddUser

