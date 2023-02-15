import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      padding: '2.5rem 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '2.5rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '2.5rem 10rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '2.5rem 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '2.5rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '2.5rem 1rem',
      },
    },
    title: {
      color: theme.palette.secondary.main,
      fontSize: '3.5rem',
      textAlign: 'left',
      [theme.breakpoints.down('lg')]: {
        fontSize: '3rem',
        textAlign: 'center',
      },
    },
    bodyText: {
      color: theme.palette.common.dark_grayish_blue,
      lineHeight: '2rem',
      textAlign: 'left',
      margin: '1rem 0',
      [theme.breakpoints.down('lg')]: {
        textAlign: 'center',
      },
    },
    image: {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: 'auto',
      borderRadius: '5px 5px 0 0',
    },
    columnLeft: {
      paddingTop: '2.5rem',
    },
    getStartedButton: {
      borderRadius: '50px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      margin: '1rem 0',
      width: '9rem',
      height: '3rem',
      boxShadow: `0 3px 3px ${theme.palette.common.dark_grayish_blue}`,
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
      [theme.breakpoints.down('lg')]: {
        margin: '1rem 0 2rem 0',
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
        boxShadow: `0 3px 3px ${theme.palette.common.very_light_gray}`,
      },
    },
  };
});

function HeroBlock() {
  const { classes } = useStyles();
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <Grid
      item
      container
      xs={12}
      className={classes.container}
      spacing={matchesLG ? 0 : 2}
    >
      {matchesLG && (
        <Grid item container lg={6} md={12}>
          <Image
            src='/illustration-intro.svg'
            alt='online banking'
            width={0}
            height={0}
            quality='100'
            className={classes.image}
          />
        </Grid>
      )}
      <Grid
        item
        container
        lg={6}
        md={12}
        className={classes.columnLeft}
        alignItems='center'
      >
        <Grid
          item
          container
          justifyContent={matchesLG ? 'center' : 'flex-start'}
        >
          <Typography variant='h1' className={classes.title}>
            Bring everyone together to build better products.
          </Typography>
          <Typography variant='body' className={classes.bodyText} paragraph>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </Typography>
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
      {!matchesLG && (
        <Grid item container lg={6} md={12}>
          <Image
            src='/illustration-intro.svg'
            alt='online banking'
            width={0}
            height={0}
            quality='100'
            className={classes.image}
          />
        </Grid>
      )}
    </Grid>
  );
}

export default HeroBlock;
