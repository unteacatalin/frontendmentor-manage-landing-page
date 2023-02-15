import { makeStyles } from 'tss-react/mui';
import cls from 'classnames';
import useMediaQuery from '@mui/material/useMediaQuery';

import Header from './header';
import Footer from './footer';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'clip',
    },
    imageBackgroundTopRight: {
      width: '55rem',
      height: '55rem',
      zIndex: -1,
      backgroundImage: 'url("./bg-tablet-pattern.svg")',
      backgroundPosition: 'bottom left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      clipPath: 'polygon(100% 5%, 100% 100%, 0% 100%, 0% 5%)',
      top: '-14%',
      right: '1%',
      transform: 'scale(1.1)',
      [theme.breakpoints.down('xxxl')]: {
        clipPath: 'polygon(100% 3%, 100% 100%, 0% 100%, 0% 3%)',
        top: '-15%',
        right: '-1%',
        width: '55rem',
        height: '55rem',
        transform: 'scale(1)',
      },
      [theme.breakpoints.down('xxl')]: {
        clipPath: 'polygon(100% 3%, 100% 100%, 0% 100%, 0% 3%)',
        top: '-5%',
        right: '-5%',
        width: '50rem',
        height: '50rem',
        transform: 'scale(1)',
      },
      [theme.breakpoints.down('xl')]: {
        clipPath: 'polygon(90% 3%, 90% 100%, 0% 100%, 0% 3%)',
        top: '-3%',
        right: '-10%',
        width: '45rem',
        height: '45rem',
        transform: 'scale(1.1)',
      },
      [theme.breakpoints.down('lg')]: {
        clipPath: 'polygon(90% 3%, 90% 100%, 0% 100%, 0% 3%)',
        top: '-3%',
        right: '-10%',
        width: '40rem',
        height: '40rem',
        transform: 'scale(1)',
      },
      [theme.breakpoints.down('md')]: {
        clipPath: 'polygon(90% 4%, 90% 100%, 0% 100%, 0% 4%)',
        top: '-7%',
        right: '-20%',
        width: '45rem',
        height: '45rem',
        transform: 'scale(0.9)',
      },
      [theme.breakpoints.down('sm')]: {
        clipPath: 'polygon(100% 1%, 100% 100%, 0% 100%, 0% 1%)',
        top: '-1%',
        right: '-20%',
        width: '35rem',
        height: '35rem',
        transform: 'scale(1)',
      },
      [theme.breakpoints.down('xs')]: {
        clipPath: 'polygon(100% 1%, 100% 100%, 0% 100%, 0% 1%)',
        top: '-1%',
        right: '-20%',
        width: '30rem',
        height: '30rem',
        transform: 'scale(1)',
      },
    },
    imageBackgroundBottomLeft: {
      width: '50rem',
      height: '120rem',
      zIndex: -1,
      backgroundImage: 'url("./bg-tablet-pattern.svg")',
      backgroundPosition: 'bottom left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      bottom: 0,
      left: 0,
      position: 'absolute',
      clipPath: 'polygon(100% 0%, 100% 100%, 50% 100%, 50% 0%)',
      top: '-10%',
      left: '-20%',
      transform: 'scale(1.1)',
      [theme.breakpoints.down('xxxl')]: {
        clipPath: 'polygon(100% 3%, 100% 100%, 0% 100%, 0% 3%)',
        top: '-15%',
        left: '-20%',
        transform: 'scale(1)',
      },
      [theme.breakpoints.down('xxl')]: {
        clipPath: 'polygon(100% 3%, 100% 100%, 0% 100%, 0% 3%)',
        top: '-10%',
        left: '-20%',
        transform: 'scale(1)',
      },
      [theme.breakpoints.down('xl')]: {
        clipPath: 'polygon(100% 0%, 100% 100%, 50% 100%, 50% 0%)',
        top: '-10%',
        left: '-40%',
        transform: 'scale(1.1)',
      },
    },
    imageBackgroundBottomRight: {
      width: '50rem',
      height: '120rem',
      zIndex: -1,
      backgroundImage: 'url("./bg-tablet-pattern.svg")',
      backgroundPosition: 'bottom left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      bottom: 0,
      right: 0,
      clipPath: 'polygon(100% 5%, 100% 100%, 0% 100%, 0% 5%)',
      top: '-20%',
      right: '-1%',
      transform: 'scale(1)',
      [theme.breakpoints.down('lg')]: {
        clipPath: 'polygon(90% 3%, 90% 100%, 0% 100%, 0% 3%)',
        top: '-15%',
        right: '-40%',
        transform: 'scale(0.5)',
      },
      [theme.breakpoints.down('md')]: {
        clipPath: 'polygon(90% 4%, 90% 100%, 0% 100%, 0% 4%)',
        top: '-15%',
        right: '-58%',
        transform: 'scale(0.5)',
      },
      [theme.breakpoints.down('sm')]: {
        clipPath: 'polygon(100% 1%, 100% 100%, 0% 100%, 0% 1%)',
        top: '-15%',
        right: '-80%',
        transform: 'scale(0.5)',
      },
      [theme.breakpoints.down('xs')]: {
        clipPath: 'polygon(100% 1%, 100% 100%, 0% 100%, 0% 1%)',
        top: '-15%',
        right: '-95%',
        transform: 'scale(0.4)',
      },
    },
    main: {
      minHeight: 'calc(100vh - 120px - 286.8px)',
      width: '100%',
      [theme.breakpoints.down('lg')]: {
        minHeight: 'calc(100vh - 80px - 578.73px)',
      },
      [theme.breakpoints.down('sm')]: {
        minHeight: 'calc(100vh - 574.74px - 72px)',
      },
    },
  };
});

function Layout({ children }) {
  const { classes } = useStyles();
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <div className={classes.container}>
      <div className={classes.imageBackgroundTopRight} />
      <div
        className={cls(
          !matchesLG && classes.imageBackgroundBottomLeft,
          matchesLG && classes.imageBackgroundBottomRight
        )}
      />
      <Header />
      {/* <div className={classes.spacer} /> */}
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
