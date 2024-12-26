'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import { Box, Button, Typography, TextField } from '@mui/material'

export default function SignUpPage() {
    return (
        <div>
            <SignUp.Root>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>

                    <Box textAlign={'center'} sx={{
                        marginBlockStart: '100px',
                        width: '400px'
                    }}>
                        <SignUp.Step
                            name="start"
                        >
                            <Box marginBottom={'20px'}>
                                <Typography textAlign={'left'} variant='h5' color='primary' gutterBottom>
                                    Create an account
                                </Typography>
                            </Box>
                            <Clerk.GlobalError style={{ color: 'red', marginBottom: "30px" }} />
                            <Box>
                                <Clerk.Field name="username">
                                    <Clerk.Input type='name' required asChild>
                                        <TextField label='UserName' variant='filled' size='medium' fullWidth sx={{ marginBottom: '30px' }} />
                                    </Clerk.Input>
                                    <Clerk.FieldError style={{ color: 'red' }} />
                                </Clerk.Field>
                                <Clerk.Field name="emailAddress">
                                    <Clerk.Input type='email' required asChild>
                                        <TextField label='Email' variant='filled' size='medium' fullWidth sx={{ marginBottom: '30px' }} />
                                    </Clerk.Input>
                                    <Clerk.FieldError style={{ color: 'red' }}
                                    />
                                </Clerk.Field>
                                <Clerk.Field name="password">
                                    <Clerk.Input type='password' required asChild>
                                        <TextField label='password' variant='filled' size='medium' fullWidth sx={{ marginBottom: '20px' }} />
                                    </Clerk.Input>
                                    <Clerk.FieldError style={{ color: 'red' }}
                                    />
                                </Clerk.Field>
                            </Box>
                            <SignUp.Captcha />
                            <SignUp.Action
                                submit
                                style={{ border: "none" }}
                            >
                                <Button variant='contained' size='medium'>sign up</Button>
                            </SignUp.Action>
                            <Box marginTop={'30px'}>
                                <Typography variant='body1'>
                                    Have an account?{''}
                                    <Button href='/sign-in' variant='text' size='small'>sign in</Button>

                                </Typography>
                            </Box>
                        </SignUp.Step>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>

                    <Box textAlign={'center'} sx={{
                        marginBlockStart: '100px',
                        width: '400px'
                    }}>
                        <SignUp.Step
                            name="verifications"
                        >

                            <Box marginBottom={'20px'}>
                                <Typography textAlign={'left'} variant='h5' color='primary' gutterBottom>
                                    Verify email code
                                </Typography>
                            </Box>
                            <Clerk.GlobalError style={{ color: 'red', marginBottom: "30px" }} />


                            <SignUp.Strategy name="email_code">
                                <Clerk.Field name="code">
                                    <Clerk.Input type='code' required asChild>
                                        <TextField label='code' variant='filled' size='medium' fullWidth sx={{ marginBottom: '20px' }} />
                                    </Clerk.Input>
                                    <Clerk.FieldError style={{ color: 'red' }}
                                    />
                                </Clerk.Field>
                                <SignUp.Action
                                    submit
                                    style={{ border: 'none' }}
                                >
                                    <Button variant='outlined' color='primary'> Finish registration</Button>
                                </SignUp.Action>
                            </SignUp.Strategy>
                            <Box marginTop={'30px'}>
                                <Typography variant='body1'>
                                    Have an account?{''}
                                    <Button href='/sign-in' variant='text' size='small'>sign in</Button>

                                </Typography>
                            </Box>
                        </SignUp.Step>
                    </Box>
                </Box>
            </SignUp.Root>
        </div>
    )
}