import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-52%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid blue',
    boxShadow: 24,
    p: 5,
};

export default function KeepMountedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} style={{ textTransform: 'capitalize' }}>
                Terms and Conditions
            </Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    {/* Close button */}
                    <Button
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        X
                    </Button>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Terms and Conditions
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        <ul style={{padding: '.8rem'}}>
                            <li>
                                The Embassy endeavor to process applications as quickly as we can. However, the Embassy cannot accept responsibility for any delays caused by inadequately documented applications.
                            </li>
                            <li style={{marginTop: '.5rem'}}>
                                Cash Payments are no longer accepted. All payments have to be deposited in the following account.
                            </li>
                        </ul>

                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
