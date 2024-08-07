import { AccountCircle, Notifications, Search } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Box, IconButton, InputBase, Toolbar } from '@mui/material';

const TopNavbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#444', width: "102.6%", marginLeft: -16 }}>
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center">
          <IconButton color="inherit" sx={{ boxShadow: 3, color: "white", '&:hover': { boxShadow: 6 } }}>
            <Search />
          </IconButton>
          <InputBase placeholder="Search…" style={{ color: 'white', marginLeft: '8px' }} />
        </Box>
        <IconButton color="inherit" sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
          <EmailIcon />
        </IconButton>
        <IconButton color="inherit" sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
          <SettingsIcon />
        </IconButton>
        <IconButton color="inherit" sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 }, marginLeft: 1 }}>
          <Notifications />
        </IconButton>
        <IconButton color="inherit" sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 }, marginLeft: 1 }}>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
