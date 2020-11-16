import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon from '@material-ui/icons/Code';
import EightBitIcon from '../../assets/images/8bitAvatar.png'
import NavAvatar from '../../assets/images/navAvatar.png'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
    background: `url(${NavAvatar}) left center no-repeat`,
    backgroundSize: '500px 500px',

  },
  drawerWidth900px: {
    background: `url(${NavAvatar}) left center no-repeat`,
    backgroundSize: '250px 250px'
  }
});

export default function NavDrawer({ routes }) {
  const minWidth900 = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const [anchorState, setAnchorState] = React.useState(false);

  const toggleDrawer = (set) => (e) => {
    setAnchorState(set);
  }
  

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List 
      // className={classes.drawer}
      >
        {routes.map((route, i) => {
          if (route.name.length > 0) {
            return (
              <ListItem button key={i}>
                <ListItemIcon>{route.Icon ? <route.Icon />: <CodeIcon />}</ListItemIcon>
                <Link href={route.path} style={{ textDecoration: 'none' }}>
                  <ListItemText primary={route.name} />
                </Link>
              </ListItem>
            )
          }
        })}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box style={{ margin: '1rem' }}>
      <React.Fragment>
        {/* <Button onClick={toggleDrawer(true)}>BOTTOM</Button> */}
        <Fab variant="extended" onClick={toggleDrawer(true)}>
          <MenuIcon className={classes.extendedIcon} />
        Menu
      </Fab>
        <SwipeableDrawer
          className={(minWidth900) ? classes.drawer : classes.drawerWidth900px}
          anchor='bottom'
          open={anchorState}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list('bottom')}
          {/* <img src={NavAvatar} /> */}
        </SwipeableDrawer >
      </React.Fragment>
    </Box>
  )
}
