"use client"

import { Box, CircularProgress } from "@mui/material";
import useGetUser from "./hook/useGetUser";

export default function LoadingPage() {
  const { isLoading } = useGetUser()

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress color="primary" />
      </Box>)
  }
  return;

}
