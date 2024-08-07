import { Assessment, Assignment, ExitToApp, Home, People } from '@mui/icons-material';
import { List, ListItem, ListItemIcon } from '@mui/material';

const SideNavbar = () => {
  return (
    <div style={{ width: '80px', backgroundColor: '#333', color: 'white', height: '150vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <List>
        <ListItem button>
          <ListItemIcon><Home style={{ color: 'white' }} /></ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon><Assessment style={{ color: 'white' }} /></ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon><Assignment style={{ color: 'white' }} /></ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon><People style={{ color: 'white' }} /></ListItemIcon>
        </ListItem>
      </List>
      <List>
        <ListItem button>
          <ListItemIcon><ExitToApp style={{ color: 'white' }} /></ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
};

export default SideNavbar;
