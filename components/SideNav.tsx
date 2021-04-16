import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import StoreIcon from '@material-ui/icons/Store';
import WorkIcon from '@material-ui/icons/Work'; 
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import SettingsIcon from '@material-ui/icons/Settings';
import MessageIcon from '@material-ui/icons/Message';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';

import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';



const themeContext = {
    name: 'dark',
    type: [
      'light',
      'dark'
    ],
    switch: true,
    language: [
      'en',
      'fr',
      'pl',
      'es'
    ],
    index: 0,
  }

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);


export default function PersistentDrawerLeft() {
  const { locale } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  function Logo() {
    if (!themeContext.switch) {
      return (
      <Link href="/[lang]/" as={`/${locale}/`} passHref>
        <ButtonBase>
        <img src='/logo_dark.svg' alt='Logo' height="36"/>
        </ButtonBase>
      </Link>
      );
    } else {
    return (
      <Link href="/[lang]/" as={`/${locale}/`} passHref>
        <ButtonBase>
        <img src='/logo.svg' alt='Logo' height="36"/>
        </ButtonBase>
      </Link>
      );
    }
  }

  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
        
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <Grid container direction="row" spacing={2} justify="flex-end" alignItems="center">
            <Grid item>
            <Logo/>
            </Grid>
            <Grid item>
            <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
            </Grid>
        </Grid>
          
        </div>
        <Divider />
        <ListItem button>
          <ListItemIcon><StoreIcon/>
          </ListItemIcon>
          <ListItemText primary='Merchants' />
      </ListItem>

      <ListItem button>
          <ListItemIcon><WorkIcon/>
          </ListItemIcon>
          <ListItemText primary="Cases" />
      </ListItem>
      <ListItem button>
          <ListItemIcon><InsertDriveFileIcon/>
          </ListItemIcon>
          <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button>
          <ListItemIcon><SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
      </ListItem>
      <Divider />
      <ListItem button>
          <ListItemIcon><MessageIcon/>
          </ListItemIcon>
          <ListItemText primary="Feedback" />
      </ListItem>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}