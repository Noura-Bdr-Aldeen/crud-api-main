import { Alert, Snackbar, Button, IconButton, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import { useDeleteUser } from '../hook/useDeleteUser';
import { SnackbarProvider } from 'notistack'

export const ButtonDelete = ({ user }) => {
    const [openAlert, setOpenAlert] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

    const { mutate } = useDeleteUser();

    const handleDeleteClick = () => {
        setOpenConfirmDialog(true);
    };

    const handleConfirmDelete = () => {
        setOpenConfirmDialog(false);
        mutate(user.id);
        setOpenAlert(true);
    };

    const handleCloseAlert = (event: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };


    const handleCloseConfirmDialog = () => {
        setOpenConfirmDialog(false);
    };


    return (
        <SnackbarProvider>
            <Box>
                <IconButton
                    color='primary'
                    size="small"
                    onClick={handleDeleteClick}
                >
                    <DeleteOutlineIcon />
                </IconButton>
                <Snackbar
                    open={openAlert}
                    autoHideDuration={6000}
                    onClose={handleCloseAlert}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}>
                    <Alert onClose={handleCloseAlert}
                        severity="success" sx={{ width: '100%' }} >
                        User deleted successfully!
                    </Alert>
                </Snackbar>

                <Dialog
                    open={openConfirmDialog}
                    onClose={handleCloseConfirmDialog}
                    aria-labelledby="confirm-dialog-title"
                    aria-describedby="confirm-dialog-description"
                >
                    <DialogTitle id="confirm-dialog-title">Confirm Deletion</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="confirm-dialog-description">
                            Are you sure you want to delete this user ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ margin: "10px" }}>
                        <Button
                            onClick={handleCloseConfirmDialog}
                            variant='contained'
                            size='small'>
                            Cancel</Button>
                        <Button
                            onClick={handleConfirmDelete}
                            autoFocus variant='outlined'
                            size='small'>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </SnackbarProvider>
    )
}


