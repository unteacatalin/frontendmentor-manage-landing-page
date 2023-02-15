import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      height: '15rem',
      padding: '0 25rem',
      backgroundColor: theme.palette.primary.main,
      backgroundImage: 'url("/bg-simplify-section-desktop.svg")',
      backgroundRepeat: 'repeat',
      [theme.breakpoints.down('xxl')]: {
        padding: '0 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '0 10rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '0 5rem',
        height: '20rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '0 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '0 1rem',
        backgroundImage: 'url("/bg-simplify-section-mobile.svg")',
        backgroundRepeat: 'no-repeat',
      },
    },
    title: {
      color: theme.palette.common.white,
      textAlign: 'left',
      fontSize: '3rem',
      [theme.breakpoints.down('xl')]: {
        fontSize: '2.5rem',
      },
      [theme.breakpoints.down('lg')]: {
        textAlign: 'center',
      },
    },
    getStartedButton: {
      borderRadius: '50px',
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
      margin: '1rem 0 1rem 2rem',
      width: '9rem',
      height: '3rem',
      boxShadow: `0 3px 3px ${theme.palette.common.dark_grayish_blue}`,
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
      [theme.breakpoints.down('lg')]: {
        margin: '1rem 0',
      },
      '&:hover': {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        boxShadow: `0 3px 3px ${theme.palette.common.very_light_gray}`,
      },
    },
  };
});

function CallToActionBlock() {
  const { classes } = useStyles();
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  return (
    <Grid
      item
      container
      xs={12}
      className={classes.container}
      flexDirection={matchesMD ? 'column' : 'row'}
      //   alignItems={matchesMD ? 'flex-start' : 'center'}
      justifyContent={matchesMD ? 'center' : 'flex-start'}
    >
      <Grid
        item
        container
        lg={6}
        md={12}
        justifyContent={matchesLG ? 'center' : 'flex-start'}
        alignItems={matchesLG ? 'flex-end' : 'center'}
      >
        <Typography variant='h2' className={classes.title} paragraph>
          Simplify How your team works today.
        </Typography>
      </Grid>
      <Grid
        item
        container
        lg={6}
        md={12}
        justifyContent={matchesLG ? 'center' : 'flex-end'}
        alignItems={matchesLG ? 'flex-start' : 'center'}
      >
        <Button
          component={Link}
          href='/get-started'
          variant='contained'
          disableRipple
          className={classes.getStartedButton}
        >
          Get Started
        </Button>
      </Grid>
    </Grid>
  );
}

export default CallToActionBlock;
