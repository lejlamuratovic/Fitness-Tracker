import { User } from '../../utils/types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UserAvatar from '../UserAvatar';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import LogoutIcon from '@mui/icons-material/Logout';

type Props = {
  user: User;
};

const UserInfo = ({ user }: Props) => {
  return (
    <Container maxWidth="sm" sx={{ backgroundColor: 'primary' }}>
      <UserAvatar firstName={user.firstName} lastName={user.lastName} size="80px" fontSize="30px" sx={{ margin: '15px auto' }} />
      <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
        {user.firstName} {user.lastName}
        </Typography>
      <Typography variant="body2"> 
        {user.email} 
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button size="medium" variant="outlined" sx={{ marginTop: '20px', color: 'white', borderColor: 'gray' }}>
          Edit personal information
        </Button>
        <Button size="medium" variant="text" sx={{ marginTop: '20px', color: 'white', backgroundColor: 'none' }}>
          <InputAdornment position="start">
              <LogoutIcon sx={{ color:"white" }}/>
          </InputAdornment>
          Log out
        </Button>
      </Box>
    </Container>
  );
};

export default UserInfo;
