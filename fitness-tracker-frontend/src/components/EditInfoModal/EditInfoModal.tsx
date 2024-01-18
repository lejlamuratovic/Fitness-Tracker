import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { User } from '../../utils/types';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useUpdateUser from '../../hooks/useUpdateUser';

interface EditInfoModalProps {
  open: boolean;
  handleClose: () => void;
  user: User;
  setUser: any;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const EditInfoModal = ({ open, handleClose, user, setUser }: EditInfoModalProps) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const updateUserMutation = useUpdateUser(); // Use the useUpdateUser hook

  const handleSave = () => {
    const updatedUser = { ...user, firstName, lastName };
    updateUserMutation.mutate({ id: user.id, user: updatedUser }, {
      onSuccess: () => {
        setUser(updatedUser);
        handleClose();
      }
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" color='text.secondary' sx={{ mb: 2 }}>
          Edit Personal Information
        </Typography>
        <TextField
          margin="dense"
          fullWidth
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{ float: 'right', mt: 2 }}
          onClick={handleSave}
          color="success"
        >
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};

export default EditInfoModal;
