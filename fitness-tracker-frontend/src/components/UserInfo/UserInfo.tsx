import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UserAvatar from '../UserAvatar';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect, useState } from 'react';
import EditInfoModal from '../EditInfoModal';
import useUser from '../../hooks/useUser';
import Loading from '../Loading';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const UserInfo = () => {
  const userId = useSelector((state: RootState) => state.auth.userId);

  if(!userId) {
    return null;
  }
  
  const { data: user, isLoading, isError, error } = useUser(userId);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState(user);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // update the user data when the user changes
  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  return (
  <Container maxWidth="sm" sx={{ backgroundColor: 'primary' }}>
    
    {
      isLoading &&
      <Loading />
    }

    {
      isError &&
      <ErrorAlert message={error?.message} />
    }

    { 
      user && 
      <Box>
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
          <Button 
            size="medium" 
            variant="text" 
            sx={{ marginTop: '20px', color: 'text.secondary', backgroundColor: 'none' }}
            onClick={() => dispatch(logout())}
            >
            <InputAdornment position="start">
                <LogoutIcon sx={{  color: 'text.secondary',}}/>
            </InputAdornment>
            Log out
          </Button>
        </Box>
      </Box>
    }

      {user && userData &&
        <EditInfoModal
          open={modalOpen}
          handleClose={handleModalClose}
          user={userData}
          setUser={setUserData}
        />
      }

  </Container>
  );
};

export default UserInfo;
