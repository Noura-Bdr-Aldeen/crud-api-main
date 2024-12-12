"use client";

import { Typography } from "@mui/material";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (

    <Typography color="error">Error fetching users data</Typography>

  );
}
