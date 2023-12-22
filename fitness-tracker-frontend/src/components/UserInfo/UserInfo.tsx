import { User } from '../../utils/types';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
  user: User;
};

const UserInfo = ({ user }: Props) => {
  const stringAvatar = (name: string) => {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };

  const avatarProps = stringAvatar(`${user.firstName} ${user.lastName}`);

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: 'primary' }}>
      <Avatar {...avatarProps} sx={{ margin: '15px auto', width: '80px', height: '80px', fontSize: '30px' }}/>
      <Typography variant="h5">
        {user.firstName} {user.lastName}
        </Typography>
      <Typography variant="body2"> 
        {user.email} 
      </Typography>
      <Button size="medium" variant="outlined" sx={{ marginTop: '20px' }}>
        Edit personal information
      </Button>
    </Container>
  );
};

export default UserInfo;
