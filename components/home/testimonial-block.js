import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';

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
        padding: '1rem',
      },
    },
    title: {
      textAlign: 'center',
      color: theme.palette.secondary.main,
    },
    carouselContainer: {
      width: '100%',
      height: '17rem',
      margin: '1rem 0',
      '& .carousel.carousel-slider': {
        width: 'inherit',
        height: 'inherit',
        overflow: 'visible',
        '& .slider-wrapper': {
          width: 'inherit',
          height: 'inherit',
          '& .slider': {
            width: 'inherit',
            height: 'inherit',
            '& .sliode .selected': {
              width: 'inherit',
              height: 'inherit',
            },
          },
        },
        '& .control-dots': {
          '& .dot': {
            background: theme.palette.primary.main,
          },
        },
      },
      [theme.breakpoints.down('xs')]: {
        height: '19rem',
      },
    },
    image: {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '5rem',
      height: '5rem',
    },
    imageContainer: {
      height: '5rem',
      width: '5rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '1rem',
    },
    itemContainer: {
      height: '17rm',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    textBody: {
      color: theme.palette.common.dark_grayish_blue,
      width: '100%',
      maxWidth: '30rem',
    },
    name: {
      color: theme.palette.secondary.main,
    },
    getStartedButton: {
      borderRadius: '50px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      margin: '1rem 0 2rem 0',
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

function TestimonialBlock() {
  const { classes } = useStyles();
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <Grid
      item
      container
      xs={12}
      flexDirection='column'
      className={classes.container}
      alignItems='center'
    >
      <Grid item>
        <Typography variant='h3' paragraph className={classes.title}>
          {"What they've said"}
        </Typography>
      </Grid>
      <Grid item container justifyContent='center'>
        <Carousel
          autoPlay={true}
          interval={5000}
          showArrows={false}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
          className={classes.carouselContainer}
        >
          <div className={classes.itemContainer}>
            <div className={classes.imageContainer}>
              <Image
                src='/avatar-ali.png'
                alt='avatar ali'
                width={0}
                height={0}
                quality='100'
                className={classes.image}
              />
            </div>
            <Typography variant='h6' paragraph className={classes.name}>
              Ali Bravo
            </Typography>
            <Typography variant='body' paragraph className={classes.textBody}>
              {
                '"We have been able to cancel so many other subscriptions since using Manage. There is no nore crosss-channel confusion and everyone is much more focused."'
              }
            </Typography>
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.imageContainer}>
              <Image
                src='/avatar-anisha.png'
                alt='avatar anisha'
                width={0}
                height={0}
                quality='100'
                className={classes.image}
              />
            </div>
            <Typography variant='h6' paragraph className={classes.name}>
              Anisha Li
            </Typography>
            <Typography variant='body' paragraph className={classes.textBody}>
              {
                '"Manage has superchanged our team\'s workflow. The ability to maintain visibility on large milestones at all times keeps everyone motivated."'
              }
            </Typography>
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.imageContainer}>
              <Image
                src='/avatar-richard.png'
                alt='avatar richard'
                width={0}
                height={0}
                quality='100'
                className={classes.image}
              />
            </div>
            <Typography variant='h6' paragraph className={classes.name}>
              Richard Watts
            </Typography>
            <Typography variant='body' paragraph className={classes.textBody}>
              {
                '"Manage allows us to provide structure and process. It keeps us organized and focused. I can\'t stop recommending them to everyone I talk to!"'
              }
            </Typography>
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.imageContainer}>
              <Image
                src='/avatar-shanai.png'
                alt='avatar shanai'
                width={0}
                height={0}
                quality='100'
                className={classes.image}
              />
            </div>
            <Typography variant='h6' paragraph className={classes.name}>
              Shanai Gaugh
            </Typography>
            <Typography variant='body' paragraph className={classes.textBody}>
              {
                '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."'
              }
            </Typography>
          </div>
        </Carousel>
      </Grid>
      <Grid item>
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

export default TestimonialBlock;
