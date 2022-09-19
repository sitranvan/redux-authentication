import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from "react-toastify";
import { AccountCircle, Close, Logout, PersonAdd, Settings } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';
import './styles.scss';
const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
}

function Header() {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.user.current)
    const isLoggedIn = !!loggedInUser.id
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === "backdropClick")
            return;
        setOpen(false);
        setMode(MODE.LOGIN)
    };
    const handleToggleMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }
    const handleLogout = async () => {
        const action = logout()
        await dispatch(action)
        toast.success('Successful logout')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary" className='header'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link className="link" to="/">TVS</Link>
                    </Typography>
                    <NavLink className="link" to="/todo">
                        <Button color="inherit">Todo</Button>
                    </NavLink>
                    <NavLink className="link" to="/album">
                        <Button color="inherit">Album</Button>
                    </NavLink>
                    <NavLink className="link" to="/create-products">
                        <Button color="inherit">CreateAt</Button>
                    </NavLink>
                    <NavLink className="link" to="/counter">
                        <Button color="inherit">Counter</Button>
                    </NavLink>
                    {!isLoggedIn && (<Button color="inherit" onClick={handleClickOpen}>Login</Button>)}
                    {isLoggedIn && (
                        <IconButton color='inherit' onClick={handleToggleMenu} >
                            <AccountCircle />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Dialog open={open} onClose={handleClose} disableEscapeKeyDown sx={{ width: 500, margin: '0 auto' }} >
                <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} onClick={handleClose}>
                    <Close />
                </IconButton>
                <DialogContent>
                    <DialogContentText>
                        {mode === MODE.LOGIN && (
                            <>
                                <Login closeDialog={handleClose} />
                                <Box textAlign='center' mt={2}>
                                    <Button onClick={() => setMode(MODE.REGISTER)}>Do not have an account</Button>
                                </Box>
                            </>
                        )}
                        {mode === MODE.REGISTER && (
                            <>
                                <Register closeDialog={handleClose} />
                                <Box textAlign='center' mt={2}>
                                    <Button onClick={() => setMode(MODE.LOGIN)}>Already have an account</Button>
                                </Box>
                            </>
                        )}

                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={!!anchorEl}
                onClose={handleCloseMenu}
                onClick={handleCloseMenu}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleCloseMenu}>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseMenu}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default Header