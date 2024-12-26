"use client"

import { Grid, Button, TextField, Divider, Box, Typography } from "@mui/material"
import { User } from "../types/user"
import { useEditUser } from "../hook/useEditUser"

type Props = {
    user: User
}



const EditUser = ({ user }: Props) => {
 const {register , errors , onUpdateUser}=useEditUser(user);

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
                    Edit User
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
                <form onSubmit={onUpdateUser}>
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
                                label="username"
                                {...register("username")}
                                error={!!errors?.username?.message}
                                helperText={errors?.username?.message}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="Name"
                                {...register("name")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="Email"
                                {...register("email")}
                                error={!!errors?.email?.message}
                                helperText={errors?.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="phone"
                                {...register("phone")}
                                error={!!errors?.phone?.message}
                                helperText={errors?.phone?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="website"
                                {...register("website")}
                                error={!!errors?.website?.message}
                                helperText={errors?.website?.message}
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
                                error={!!errors?.address?.street?.message}
                                helperText={errors?.address?.street?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="city"
                                {...register("address.city")}
                                error={!!errors?.address?.city?.message}
                                helperText={errors?.address?.city?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="suite"
                                {...register("address.suite")}
                                error={!!errors?.address?.suite?.message}
                                helperText={errors?.address?.suite?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="zipcode"
                                {...register("address.zipcode")}
                                error={!!errors?.address?.zipcode?.message}
                                helperText={errors?.address?.zipcode?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="geo.lat"
                                {...register("address.geo.lat")}
                                error={!!errors?.address?.geo?.lat?.message}
                                helperText={errors?.address?.geo?.lat?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="geo.lng"
                                {...register("address.geo.lng")}
                                error={!!errors?.address?.geo?.lng?.message}
                                helperText={errors?.address?.geo?.lng?.message}
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
                                label="company.name"
                                {...register("company.name")}
                                error={!!errors?.company?.name?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="company.catchPhrase"
                                {...register("company.catchPhrase")}
                                error={!!errors?.company?.catchPhrase?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <TextField
                                label="company.bs"
                                {...register("company.bs")}
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
                            Edit User
                        </Button>
                    </Box>
                </form>
            </Grid>
        </>

    )
}

export default EditUser;
