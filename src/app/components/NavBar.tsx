"use client"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SignOutButton } from './SignOutButton';
import { SignInButton } from './SignInButton';
import { useUser } from '@clerk/nextjs';



export default function NavBar() {
  const { isSignedIn} = useUser();

  return (
    <AppBar
      sx={{ backgroundColor: 'GrayText' }}
      position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          dashboard
        </Typography>
        {isSignedIn ? (
          <SignOutButton />
        ) : (
          <SignInButton />
        )}
      </Toolbar>
    </AppBar>
  );
}
