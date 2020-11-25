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
import NavAvatar from '../../assets/images/navAvatar.png';
import AlbumIcon from '@material-ui/icons/AlbumOutlined'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
  //   padding: '1rem',
  //   position: 'fixed',
  //   bottom: '1rem',
  //   left: '1rem'
  width: '75vw',
  // background: theme.palette.primary.dark,
  background: 'rgba(0, 0, 0, 0.7)',
  position: 'fixed',
  bottom: 0,
  left: '12.5vw',
  zIndex: 100
    
  },
  // list: {
  //   width: 250,
  // },
  // fullList: {
  //   width: 'auto',
  // },
  // drawer: {
  //   background: `url(${NavAvatar}) left center no-repeat`,
  //   backgroundSize: '500px 500px',

  // },
  // drawerWidth900px: {
  //   background: `url(${NavAvatar}) left center no-repeat`,
  //   backgroundSize: '250px 250px'
  // },
  // menuBtn: {
  //   background: theme.palette.secondary.dark,
  //   color: theme.palette.text.secondary
  // },
  // drawerList: {
  //   background: theme.palette.primary.light,
  //   color: theme.palette.text.primary
  // }
}));

export default function NavDrawer({ routes }) {
  const minWidth900 = useMediaQuery('(min-width:900px)');
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  // const [anchorState, setAnchorState] = React.useState(false);

  // const toggleDrawer = (set) => (e) => {
  //   setAnchorState(set);
  // }
  

  // const list = (anchor) => (
  //   <div
  //     className={clsx(classes.list, {
  //       [classes.fullList]: anchor === 'bottom',
  //     })}
  //     role="presentation"
  //     onClick={toggleDrawer(false)}
  //     onKeyDown={toggleDrawer(false)}
  //   >
  //     <List 
  //     className={classes.drawerList}
  //     >
  //       {routes.map((route, i) => {
  //         if (route.name.length > 0) {
  //           return (
  //             <ListItem button key={i}>
  //               <Link href={route.path} style={{ textDecoration: 'none' }}>
  //               <ListItemIcon>{route.Icon ? <route.Icon />: <i class="fas fa-compact-disc" style={{fontSize: '1.2rem'}}></i>}</ListItemIcon>
  //                 <ListItemText primary={route.name} />
  //               </Link>
  //             </ListItem>
  //           )
  //         }
  //       })}
  //     </List>
  //     <Divider />
  //   </div>
  // );

  return (
    <Box className={classes.root}>
        <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {routes.map(route=>{
        return (route.name.length>0?
          <BottomNavigationAction href={route.path} label={route.name} icon={route.Icon ? <route.Icon />: <i class="fas fa-compact-disc" style={{fontSize: '1.2rem'}}></i>}/>:null
        )
      })}
      {/* <BottomNavigationAction href="/home" label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
    </BottomNavigation>
      {/* <React.Fragment>
        <Fab variant="extended" onClick={toggleDrawer(true)} className={classes.menuBtn}>
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
        </SwipeableDrawer >
      </React.Fragment> */}
    </Box>
  )
}
