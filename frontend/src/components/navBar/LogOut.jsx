import { forwardRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = forwardRef((props, ref) => {
        return <Slide direction="up" ref={ref} {...props} />;
});

const LogOut = (props) => {
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
                setOpen(true);
        };

        const handleClose = () => {
                setOpen(false);
        };

        return (
                <div>
                        <Button onClick={handleClickOpen}>
                                כפתור התנתקות
                        </Button>
                        <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                        >
                                <DialogTitle>{"האם לבצע התנתקות מהאתר?😺"}</DialogTitle>
                                <DialogActions>
                                        <Button onClick={handleClose}>ביטול</Button>
                                        <Button onClick={handleClose}>כן</Button>
                                </DialogActions>
                        </Dialog>
                </div>
        );
}
export default LogOut;
