import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions'
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { urlImage } from "../../api/constant"
import { ButtonDelete } from './ButtonDelete';




const CardUser = ({ user }) => {

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea href={`/users/${user.id}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={urlImage}
                    alt="user image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.username}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {user.company?.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "end" }}>
                <ButtonDelete user={user} />
                <IconButton
                    href={`/users/${user.id}/edit-user`}
                    color='primary'
                    size="small"
                >
                    <EditIcon color="primary" />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CardUser
