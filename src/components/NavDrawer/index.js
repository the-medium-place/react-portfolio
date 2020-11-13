import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation'
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


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function NavDrawer({ routes }) {
  const classes = useStyles();
  const [anchorState, setAnchorState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setAnchorState(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routes.map(route => {
          if (route.name.length > 0) {
            return (
              <ListItem button>
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
          anchor='bottom'
          open={anchorState}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list('bottom')}
        </SwipeableDrawer>
      </React.Fragment>
    </Box>
  )
}
