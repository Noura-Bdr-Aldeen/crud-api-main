'use client'

import { useClerk } from '@clerk/nextjs'
import { Button } from '@mui/material'

export const SignOutButton = () => {
    const { signOut } = useClerk()

    return (
        <Button
        variant='contained'
        color='primary'
            onClick={() => signOut({ redirectUrl: '/' })}
            >
            Sign out
        </Button>
    )
}