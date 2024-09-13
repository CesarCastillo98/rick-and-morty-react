// src/Modal.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const Modal = ({ character, closeModal }) => {
  return (
    <Dialog open={true} onClose={closeModal}>
      <DialogTitle>{character.name}</DialogTitle>
      <DialogContent>
        <img src={character.image} alt={character.name} style={{ width: '100%' }} />
        <Typography variant="body1" gutterBottom>
          Status: {character.status}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Species: {character.species}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Gender: {character.gender}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Origin: {character.origin.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Location: {character.location.name}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;

