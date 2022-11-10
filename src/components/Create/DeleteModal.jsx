import * as React from 'react';
import { Button, Box, Typography, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function DeleteModal({ deleteOpen, handleDeleteClose }) {
  
    return (
      <div>
        <Modal
          open={deleteOpen}
          onClose={handleDeleteClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to delete this saying?
            </Typography>
            <Button variant="contained">
                Confirm
            </Button>
          </Box>
        </Modal>
      </div>
    );
}

export default DeleteModal;