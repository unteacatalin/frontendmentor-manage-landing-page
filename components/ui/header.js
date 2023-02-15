import React, { Fragment, useState, useEffect, useContext } from 'react';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import cls from 'classnames';
import { useTheme } from '@mui/material/styles';

import LogoHeader from '../../components/images/logo-header';
import IconClose from '../../components/images/icon-close';

const useStyles = makeStyles()((theme) => {
  return {
    appBarContainer: {
      backgroundColor: 'transparent',
      width: '100%',
      padding: '2.5rem 25rem 0 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '2.5rem 15rem 0 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '2.5rem 10rem 0 10rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '1rem 5rem 0 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '1rem 2rem 0 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1rem 1rem 0 1rem',
      },
    },
    logoContainer: {
      padding: 0,
      margin: 0,
      height: '2rem',
      width: '12rem',
      maxHeight: '2rem',
      maxWidth: '12rem',
      [theme.breakpoints.down('lg')]: {
        marginRight: 'auto',
        paddingTop: '0.3rem',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
    },
    getStartedButton: {
      borderRadius: '50px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      margin: '1rem 0 1rem 2rem',
      width: '9rem',
      height: '3rem',
      boxShadow: `0 3px 3px ${theme.palette.common.dark_grayish_blue}`,
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
      [theme.breakpoints.down('xl')]: {
        fontSize: '0.9rem',
        margin: '1rem 0 1rem 1rem',
        width: '8rem',
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
        boxShadow: `0 3px 3px ${theme.palette.common.very_light_gray}`,
      },
    },
    getStartedButtonSelected: {
      backgroundColor: 'transparent',
      backgroundColor: theme.palette.primary.light,
      boxShadow: `0 3px 3px ${theme.palette.common.very_light_gray}`,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        boxShadow: `0 3px 3px ${theme.palette.common.dark_grayish_blue}`,
      },
    },
    drawerPaper: {
      position: 'absolute !important',
      top: '1rem',
      width: '94%',
      marginLeft: '3%',
      marginRight: '3%',
      borderRadius: '5px',
      padding: '1rem',
      fontSize: '1.2rem',
    },
    drawerRoot: {
      position: 'absolute !important',
      marginTop: '90.38px',
      '& .MuiBackdrop-root': {
        position: 'relative !important',
        height: 'calc(100vh - 90.38px)',
        background:
          'linear-gradient(rgba(0, 0, 0, 0) 5%, 20%, rgba(0, 0, 0, 0.5) 60%)',
      },
    },
    drawerIconWrapper: {
      padding: '0.4rem',
      height: '2rem',
      width: '2rem',
    },
    drawerIcon: {
      height: '2rem',
      width: '2rem',
    },
    drawerItemButtonSelected: {
      fontWeight: '700',
      color: theme.palette.primary.main,
    },
    drawerItemButton: {
      color: theme.palette.common.black,
      fontWeight: 400,
    },
    listItemText: {
      textAlign: 'center',
    },
  };
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
  />
))(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    height: '4px',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '20%',
    backgroundColor: theme.palette.primary.main,
  },
  '&.MuiTabs-root': {
    width: 'calc(100% - 148px - 9rem)',
  },
  '& .MuiTabs-flexContainer': {
    display: 'block',
    width: '38rem',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontSize: theme.typography.pxToRem(16),
    marginLeft: theme.spacing(1),
    color: theme.palette.secondary.main,
    fontWeight: 700,
    height: '5rem',
    minHeight: '2.5rem',
    width: '7rem',
    textTransform: 'none',
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.typography.pxToRem(14),
      width: '6.5rem',
      marginLeft: theme.spacing(0.5),
    },
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
    },
    '&.MuiTab-textColorPrimary': {
      ':hover': {
        color: theme.palette.common.dark_grayish_blue,
      },
    },
  })
);

function Header() {
  const { classes } = useStyles();
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [value, setValue] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (router.pathname === '/pricing' && value !== 0) {
      setValue(0);
    } else if (router.pathname === '/product' && value !== 1) {
      setValue(1);
    } else if (router.pathname === '/about' && value !== 2) {
      setValue(2);
    } else if (router.pathname === '/careers' && value !== 3) {
      setValue(3);
    } else if (router.pathname === '/community' && value !== 4) {
      setValue(4);
    } else if (router.pathname === '/get-started' && value !== 5) {
      setValue(5);
    } else if (router.pathname === '/' && !value) {
      setValue(false);
    }
  }, [router, value]);

  const tabs = (
    <StyledTabs value={value} onChange={handleChange} variant='fullWidth'>
      <StyledTab label='Pricing' component={Link} href='/pricing' />
      <StyledTab label='Product' component={Link} href='/product' />
      <StyledTab label='About Us' component={Link} href='/about' />
      <StyledTab label='Careers' component={Link} href='/careers' />
      <StyledTab label='Community' component={Link} href='/community' />
    </StyledTabs>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        anchor='top'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawerPaper, root: classes.drawerRoot }}
      >
        <List disablepadding='true'>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            component={Link}
            href='/pricing'
            disablepadding='true'
            className={cls(
              classes.drawerItemButton,
              value === 0 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Pricing
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            component={Link}
            href='/product'
            disablepadding='true'
            className={cls(
              classes.drawerItemButton,
              value === 1 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Product
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            component={Link}
            href='/about'
            disablepadding='true'
            className={cls(
              classes.drawerItemButton,
              value === 2 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              About Us
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            component={Link}
            href='/careers'
            disablepadding='true'
            className={cls(
              classes.drawerItemButton,
              value === 3 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Careers
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            component={Link}
            href='/community'
            disablepadding='true'
            className={cls(
              classes.drawerItemButton,
              value === 4 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Community
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        {openDrawer ? (
          <div className={classes.drawerIconWrapper}>
            <IconClose />
          </div>
        ) : (
          <MenuIcon className={classes.drawerIcon} />
        )}
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar
        className={classes.appBarContainer}
        position='static'
        elevation={0}
      >
        <Toolbar disableGutters>
          <Button
            component={Link}
            href='/'
            disableRipple
            className={classes.logoContainer}
            onClick={() => {
              setOpenDrawer(false);
              setValue(false);
            }}
          >
            <LogoHeader />
          </Button>
          {matchesLG ? drawer : tabs}
          {!matchesLG && (
            <Button
              component={Link}
              href='/get-started'
              variant='contained'
              disableRipple
              className={cls(
                classes.getStartedButton,
                value === 5 && classes.getStartedButtonSelected
              )}
              onClick={() => {
                setOpenDrawer(false);
                setValue(false);
              }}
            >
              Get Started
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {/* <div className={classes.toolbarMargin} /> */}
    </Fragment>
  );
}

export default Header;
