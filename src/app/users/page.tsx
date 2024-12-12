import { UsersData } from "../components/UsersData";
import ButtonAddUser  from "../components/buttonAddUser"
import { Box } from "@mui/material";


export default function UserPage() {

    return (
        <>
            <Box p={1} display={"flex"} justifyContent={"flex-end"}><ButtonAddUser/></Box>
            <UsersData />
        </>
    );
}

