import Avatar from '@mui/material/Avatar';

type AvatarProps = {
    firstName: string;
    lastName: string;
    size?: string;
    fontSize?: string;
};

const UserAvatar = ({ firstName, lastName, size = '34px', fontSize = '20px' }: AvatarProps) => {
    const stringAvatar = (name: string) => {
        return {
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    };

    const avatarProps = stringAvatar(`${firstName} ${lastName}`);

    return (
        <Avatar {...avatarProps} sx={{ width: size, height: size, fontSize: fontSize }} />
    );
};

export default UserAvatar;
