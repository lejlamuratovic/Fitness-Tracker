import { User } from '../../utils/types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UserAvatar from '../UserAvatar';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import EditInfoModal from '../EditInfoModal';

type Props = {
  user: User;
};

const UserInfo = ({ user }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState(user);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
  <Container maxWidth="sm" sx={{ backgroundColor: 'primary' }}>

    <UserAvatar firstName={user.firstName} lastName={user.lastName} size="80px" fontSize="30px" sx={{ margin: '15px auto' }} />

    <Typography variant="h6" color='text.secondary' sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
        {user.firstName} {user.lastName}
    </Typography>

    <Typography variant="body2" color='text.secondary'> 
      {user.email} 
    </Typography>

    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Button size="medium" 
              variant="contained"
              onClick={handleModalOpen} 
              sx={{ 
                marginTop: '20px',  
                color: 'white', 
                borderColor: 'gray', 
                maxWidth: '300px', 
                display: 'block', 
                ml: 'auto',
                mr: 'auto', 
                backgroundColor: '#72A1BF' }}>
        Edit personal information
      </Button>
      <Button size="medium" variant="text" sx={{ marginTop: '20px', color: 'text.secondary', backgroundColor: 'none' }}>
        <InputAdornment position="start">
            <LogoutIcon sx={{  color: 'text.secondary',}}/>
        </InputAdornment>
        Log out
      </Button>
    </Box>

    <EditInfoModal
        open={modalOpen}
        handleClose={handleModalClose}
        user={userData}
        setUser={setUserData}
    />

  </Container>
  );
};

export default UserInfo;
