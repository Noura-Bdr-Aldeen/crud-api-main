import { Typography, Grid, Box } from "@mui/material";
import { Card, CardContent, Avatar } from "@mui/material";
import { User } from "../types/user";



const UserDetails = ({ user }: { user: User }) => {
    return (
        <Grid container spacing={3} sx={{ padding: 4, width: "80%" }}>

            <Grid item xs={12}>
                <Card sx={{ backgroundColor: "gainsboro" }}>
                    <CardContent
                        sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2 }}>{user.username && user.username.charAt(0).toUpperCase()}</Avatar>
                        <Box>
                            <Typography variant="h6" component="div">
                                {user.username}
                            </Typography>
                            <Typography variant="h6" component="div">
                                {user.name}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <Card sx={{ backgroundColor: "gainsboro" }}>
                    <CardContent>
                        <Typography variant="subtitle1" color="primary">Contact Information</Typography>
                        <Box sx={{ mt: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={9} md={9}>
                                    <Typography variant="body2" color="secondary">Email</Typography>
                                    <Typography variant="body1">{user.email}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9} md={9}>
                                    <Typography variant="body2" color="secondary">Phone</Typography>
                                    <Typography variant="body1">{user.phone}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9} md={9}>
                                    <Typography variant="body2" color="secondary">website</Typography>
                                    <Typography variant="body1">{user.website}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <Card sx={{ backgroundColor: "gainsboro" }}>
                    <CardContent>
                        <Typography variant="subtitle1" color="primary">Company</Typography>
                        <Box sx={{ mt: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={9} md={9}>
                                    <Typography variant="body2" color="secondary">company name</Typography>
                                    <Typography variant="body1">{user?.company?.name}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9} md={9}>
                                    <Typography variant="body2" color="secondary">catchPhrase</Typography>
                                    <Typography variant="body1">{user?.company?.catchPhrase}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9} md={9}>
                                    <Typography variant="body2" color="secondary">bs</Typography>
                                    <Typography variant="body1">{user?.company?.bs}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <Card sx={{ backgroundColor: "gainsboro" }}>
                    <CardContent>
                        <Typography variant="subtitle1" color="primary">Address</Typography>
                        <Box sx={{ mt: 1 }}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body2" color="secondary">Street</Typography>
                                    <Typography variant="body1">{user?.address?.street}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body2" color="secondary">Suite</Typography>
                                    <Typography variant="body1">{user?.address?.suite}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <Card sx={{ backgroundColor: "gainsboro" }}>
                    <CardContent>
                        <Typography variant="subtitle1" color="primary">Location</Typography>
                        <Box sx={{ mt: 1 }}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body2" color="secondary">City</Typography>
                                    <Typography variant="body1">{user?.address?.city}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9} md={6}>
                                    <Typography variant="body2" color="secondary">Zipcode</Typography>
                                    <Typography variant="body1">{user?.address?.zipcode}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    )
}

export default UserDetails
