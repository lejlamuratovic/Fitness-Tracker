import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Badge, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ width: '100%', position: 'absolute', left: 0, top: 0, backgroundColor: "#72A1BF", pl: 1, pr: 1 }}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', maxWidth: '100%' }}>

                {/* Icon and Logo */}
                
                <Box sx= {{ display: 'flex' }}>
                    <FitnessCenterIcon sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '40px', mr: 1 }} />
                    <Typography 
                        variant="h4" 
                        sx={{ 
                            display: { xs: 'none', sm: 'block' }, 
                            mr: 1,
                            color: 'white',
                            // on hover, keep the color white
                            '&:hover': {
                                color: 'white'
                            }
                        }}
                        component={ Link }
                        to="/"
                        >
                        Fitness Tracker
                    </Typography>
                </Box>

                {/* Menu for smaller screens */}

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', sm: 'none' }, mr: 1 }}
                    onClick={handleMenuOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Explore</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Routines</MenuItem>
                </Menu>

                {/* Buttons for larger screens */}

                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex'}, paddingLeft: '20px'}}>
                    <Button 
                        color="inherit" 
                        sx={{
                            fontSize: '16px',
                            '&:hover': {
                                fontWeight: 'bold',
                                color: 'white',
                            }
                        }}
                        component={ Link }
                        to="/"
                        >
                            Home
                    </Button>
                    <Button 
                        color="inherit" 
                        sx={{
                            fontSize: '16px',
                            '&:hover': {
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        }}
                        component={ Link }
                        to="/explore"
                        >
                            Explore
                    </Button>
                    <Button 
                        color="inherit" 
                        sx={{
                            fontSize: '16px',
                            '&:hover': {
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        }}
                        component={ Link }
                        to="/routines"
                        >
                            Routines
                    </Button>
                </Box>

                {/* Notification and User Avatar */}

                <IconButton 
                    color="inherit"
                    sx={{
                        '&:hover': {
                            color: 'lightgray'
                        }
                    }}
                    >
                    <Badge variant="dot" color="error">
                        <NotificationsIcon sx={{fontSize:'35px'}}/>
                    </Badge>
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    component = { Link }
                    to="/users/1"
                    sx={{
                        '&:hover': {
                            color: 'lightgray'
                        }
                    }}
                >
                    <AccountCircle sx={{fontSize:'35px'}}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
