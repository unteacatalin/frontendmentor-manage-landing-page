import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import cls from 'classnames';
import Box from '@mui/material/Box';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      padding: '2.5rem 25rem 0 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '2.5rem 15rem 0 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '2.5rem 10rem 0 10rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '2.5rem 0 0 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '2.5rem 0 0 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1rem 0 0 1rem',
      },
    },
    textBody: {
      color: theme.palette.common.dark_grayish_blue,
      textAlign: 'left',
      lineHeight: '1.8rem',
      margin: '1rem 0',
      [theme.breakpoints.down('lg')]: {
        textAlign: 'center',
        paddingRight: '5rem',
      },
      [theme.breakpoints.down('sm')]: {
        paddingRight: '2rem',
      },
      [theme.breakpoints.down('xs')]: {
        paddingRight: '1rem',
      },
    },
    textBodyBottomSpacer: {
      marginBottom: '3rem',
    },
    textBodyLeft: {
      textAlign: 'left !important',
      margin: '1rem 0 0 0 !important',
    },
    bulletPoint: {
      backgroundColor: theme.palette.primary.main,
      width: '3.5rem',
      height: '2rem',
      borderRadius: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bulletPointText: {
      color: theme.palette.common.white,
      fontSize: '0.9rem',
    },
    title: {
      textAlign: 'left',
      color: theme.palette.secondary.main,
      [theme.breakpoints.down('lg')]: {
        paddingRight: '5rem',
        textAlign: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        paddingRight: '2rem',
      },
      [theme.breakpoints.down('xs')]: {
        paddingRight: '1rem',
      },
    },
    subtitle: {
      marginTop: '0.3rem',
      marginRight: 0,
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
      color: theme.palette.secondary.main,
      [theme.breakpoints.down('lg')]: {
        marginBottom: 0,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
    subsectionWrapper: {
      marginBottom: '2rem',
      [theme.breakpoints.down('lg')]: {
        marginBottom: '3rem',
      },
    },
    background: {
      [theme.breakpoints.down('lg')]: {
        backgroundColor: theme.palette.common.light_yellow,
      },
    },
  };
});

function AboutBlock() {
  const { classes } = useStyles();
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <Grid
      item
      container
      xs={12}
      flexDirection={matchesLG ? 'column' : 'row'}
      className={classes.container}
      spacing={matchesLG ? 0 : 2}
    >
      <Grid item container lg={6} md={12} flexDirection='column'>
        <Grid item>
          <Typography variant='h3' className={classes.title} paragraph>
            {"What's different about Manage?"}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='body'
            className={cls(classes.textBody, classes.textBodyBottomSpacer)}
            paragraph
          >
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container lg={6} md={12} flexDirection='column'>
        <Grid
          item
          container
          // flexDirection={matchesLG ? 'column' : 'row'}
          spacing={matchesLG ? 0 : 2}
          className={classes.subsectionWrapper}
        >
          <Grid
            item
            container
            lg={2}
            md={1}
            sm={2}
            xs={2}
            xxs={2}
            className={classes.background}
          >
            <Box className={classes.bulletPoint}>
              <Typography variant='body' className={classes.bulletPointText}>
                01
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            flexDirection={matchesLG ? 'row' : 'column'}
            lg={10}
            md={11}
            sm={10}
            xs={10}
            xxs={10}
            className={classes.background}
          >
            <Grid item>
              <Typography variant='h5' className={classes.subtitle}>
                Track company-wide progress
              </Typography>
            </Grid>
            {!matchesLG && (
              <Grid item>
                <Typography variant='body' className={classes.textBody}>
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never Lose sight of the bigger
                  picture again.
                </Typography>
              </Grid>
            )}
          </Grid>
          {matchesLG && (
            <Grid item container xs={12}>
              <Typography
                variant='body'
                className={cls(classes.textBody, classes.textBodyLeft)}
                paragraph
              >
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never Lose sight of the bigger picture
                again.
              </Typography>
            </Grid>
          )}
        </Grid>
        <Grid
          item
          container
          flexDirection='row'
          spacing={matchesLG ? 0 : 2}
          className={classes.subsectionWrapper}
        >
          <Grid
            item
            container
            lg={2}
            md={1}
            sm={2}
            xs={2}
            xxs={2}
            className={classes.background}
          >
            <div className={classes.bulletPoint}>
              <Typography variant='body' className={classes.bulletPointText}>
                02
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            container
            flexDirection='column'
            lg={10}
            md={11}
            sm={10}
            xs={10}
            xxs={10}
            className={classes.background}
          >
            <Grid item>
              <Typography variant='h5' className={classes.subtitle}>
                Advanced built-in reports
              </Typography>
            </Grid>
            {!matchesLG && (
              <Grid item>
                <Typography variant='body' className={classes.textBody}>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </Typography>
              </Grid>
            )}
          </Grid>
          {matchesLG && (
            <Grid item container xs={12}>
              <Typography
                variant='body'
                className={cls(classes.textBody, classes.textBodyLeft)}
                paragraph
              >
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </Typography>
            </Grid>
          )}
        </Grid>
        <Grid
          item
          container
          flexDirection='row'
          spacing={matchesLG ? 0 : 2}
          className={classes.subsectionWrapper}
        >
          <Grid
            item
            container
            lg={2}
            md={1}
            sm={2}
            xs={2}
            xxs={2}
            className={classes.background}
          >
            <div className={classes.bulletPoint}>
              <Typography variant='body' className={classes.bulletPointText}>
                03
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            container
            flexDirection='column'
            lg={10}
            md={11}
            sm={10}
            xs={10}
            xxs={10}
            className={classes.background}
          >
            <Grid item>
              <Typography variant='h5' className={classes.subtitle}>
                Everything you need in one place
              </Typography>
            </Grid>
            {!matchesLG && (
              <Grid item>
                <Typography variant='body' className={classes.textBody}>
                  Stop jumping from one service to another to comunicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </Typography>
              </Grid>
            )}
          </Grid>
          {matchesLG && (
            <Grid item container xs={12}>
              <Typography
                variant='body'
                className={cls(classes.textBody, classes.textBodyLeft)}
                paragraph
              >
                Stop jumping from one service to another to comunicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutBlock;
