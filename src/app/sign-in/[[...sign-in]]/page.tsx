'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { LoadingProps } from '@clerk/elements/common';
import { Box, Button, TextField, Typography, IconButton, Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';



export default function SignInPage() {
    return (
        <div className='grid w-full grow items-center px-4 sm:justify-center'>
            <SignIn.Root>
                <Clerk.Loading>
                    {isGlobalLoading => (
                        <>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Box sx={{
                                    marginBlockStart: '100px',
                                    width: '400px'
                                }}>
                                    <SignIn.Step name='start'>
                                        <Typography variant='h5'
                                            textAlign={'center'}
                                            color='primary'
                                            gutterBottom>Sign in to dashboard
                                        </Typography>

                                        <Typography
                                            variant='h6'
                                            textAlign={'center'}
                                            gutterBottom>
                                            Welcome back! Please sign in to continue
                                        </Typography>

                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                            <Clerk.Connection name='github' asChild>
                                                <IconButton
                                                    size='small'
                                                    color='primary'
                                                    disabled={isGlobalLoading}
                                                >
                                                    <Clerk.Loading scope='provider:github'>
                                                        {(isLoading: LoadingProps['isGlobalLoading']) => (
                                                            <>
                                                                {!isGlobalLoading && <GitHubIcon />}
                                                                {isGlobalLoading && <Typography variant='body1'>Loading GitHub...</Typography>}
                                                            </>
                                                        )}
                                                    </Clerk.Loading>
                                                </IconButton>
                                            </Clerk.Connection>

                                            <Clerk.Connection name='github' asChild>
                                                <IconButton
                                                    size='small'
                                                    color='primary'
                                                    disabled={isGlobalLoading}
                                                >
                                                    <Clerk.Loading scope='provider:google'>
                                                        {(isLoading: LoadingProps['isGlobalLoading']) => (
                                                            <>
                                                                {!isGlobalLoading && <GoogleIcon />}
                                                                {isGlobalLoading && <Typography variant='body1'>Loading google...</Typography>}
                                                            </>
                                                        )}
                                                    </Clerk.Loading>
                                                </IconButton>
                                            </Clerk.Connection>
                                        </Box>

                                        <Divider
                                            sx={{
                                                width: "100%",
                                                padding: "20px 0  20px 0",
                                                color: "blue"
                                            }}
                                            textAlign="center"
                                        >
                                            or
                                        </Divider>

                                        <Box
                                            margin={'20px 0px'}>
                                            <Clerk.Field name='identifier'>
                                                <Clerk.Input type='email' required asChild>
                                                    <TextField label='Enter your email' variant='filled' size='medium' fullWidth sx={{ marginBottom: '20px' }} />
                                                </Clerk.Input>
                                                <Clerk.FieldError />
                                            </Clerk.Field>

                                            <Clerk.Field name='password'>
                                                <Clerk.Input type='password' asChild>
                                                    <TextField label='password' variant='filled' size='medium' fullWidth
                                                        style={{ marginBottom: '20px' }} />
                                                </Clerk.Input>
                                                <Clerk.FieldError style={{ color: 'red' }} />
                                            </Clerk.Field>
                                        </Box>


                                        <Box sx={{
                                            display: 'flex',
                                            gap: '20px',
                                            justifyContent: 'center'
                                        }}>
                                            <SignIn.Action submit asChild>
                                                <Button disabled={isGlobalLoading} variant='contained' size='small'>
                                                    <Clerk.Loading>
                                                        {isLoading => {
                                                            return isLoading ? (
                                                                <Typography variant='body1'>Loading...</Typography>
                                                            ) : (
                                                                'Continue'
                                                            )
                                                        }}
                                                    </Clerk.Loading>
                                                </Button>
                                            </SignIn.Action>

                                            <Button href='/sign-up' size='small' variant='outlined'>
                                                Sign up
                                            </Button>
                                        </Box>

                                    </SignIn.Step>
                                </Box>
                            </Box>


                        </>
                    )}
                </Clerk.Loading>
            </SignIn.Root>
        </div>
    )
}