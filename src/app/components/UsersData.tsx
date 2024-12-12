"use client"

import CardUser from "./CardUser";
import { Grid } from "@mui/material";
import useGetUser  from "../hook/useGetUser";
import ButtonPagination from "./buttonPagination";


type User = {
    id: number;
    username: string;
    company: { name: string };
};


export const UsersData = () => {

    const { data } = useGetUser();


    return (
        <>
            <Grid container
                rowSpacing={3}
                columnSpacing={2}
                sx={{
                    maxWidth: '80%',
                    width: { xs: '100%', sm: '80%' },
                    margin: '0 auto',
                }}
            >
                {data?.data?.map((user: User) => (
                    <Grid key={user.id} item xs={12} sm={6} md={4} lg={4} >
                        <CardUser user={user} />
                    </Grid>

                ))}

            </Grid>
            <ButtonPagination />
        </>
    );
};
