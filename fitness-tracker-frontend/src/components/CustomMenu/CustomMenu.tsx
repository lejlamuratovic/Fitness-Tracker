import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

interface CustomMenuProps {
    anchorEl: null | HTMLElement;
    open: boolean;
    onClose: () => void;
    menuItems: string[];
}

const CustomMenu= ({ anchorEl, open, onClose, menuItems }: CustomMenuProps) => {
    return (
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        open={Boolean(open)}
        onClose={onClose}
        sx={{
            '& .MuiPaper-root': {
                padding: '5px',
                backgroundColor: '#616161',
                color: 'white',
                textTransform: 'uppercase'
            }
        }}
    >
    {menuItems.map((item) => (
        <MenuItem key={item} onClick={onClose}>
            <Typography textAlign="center" 
                sx={{ 
                    fontSize: '20px' ,
                    padding: '5px',
                }}>
                    {item}
            </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CustomMenu;
