import { useState, useEffect } from 'react';
import Link from 'next/link';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import cls from 'classnames';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import ErrorIcon from '@mui/icons-material/Error';
import FormHelperText from '@mui/material/FormHelperText';

import LogoHeader from '../images/logo-header';
import IconFacebook from '../images/icon-facebook';
import IconInstagram from '../images/icon-instagram';
import IconYoutube from '../images/icon-youtube';
import IconTwitter from '../images/icon-twitter';
import IconPinterest from '../images/icon-pinterest';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      backgroundColor: theme.palette.common.very_dark_blue,
      padding: '3rem 25rem 1rem 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '3rem 15rem 1rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '3rem 9rem 1rem 9rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '3rem 2.5rem 1rem 2.5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '3rem 2rem 1rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '3rem 2rem 1rem 2rem',
      },
    },
    footerWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.common.white,
      fontSize: '0.5rem',
      padding: '0.3rem 0 0 0',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.5rem',
        padding: '0.3rem 0 0 0',
      },
    },
    link: {
      color: theme.palette.primary.main,
    },
    logoContainer: {
      padding: 0,
      width: '12rem',
      paddingBottom: '1.15rem',
      [theme.breakpoints.down('lg')]: {
        paddingBottom: '1.15rem',
      },
      [theme.breakpoints.down('xs')]: {
        paddingBottom: 0,
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    socialMediaWrapper: {
      margin: 0,
      [theme.breakpoints.down('lg')]: {
        margin: '1rem 0',
      },
    },
    socialMedia: {
      cursor: 'pointer',
      minHeight: '46px',
      minWidth: '46px',
      [theme.breakpoints.down('xl')]: {
        minHeight: '40px',
        minWidth: '40px',
      },
      [theme.breakpoints.down('lg')]: {
        minHeight: '46px',
        minWidth: '46px',
      },
    },
    footerText: {
      fontSize: '1.1rem',
      lineHeight: '3rem',
      maxHeight: '3rem',
      color: theme.palette.common.white,
      cursor: 'pointer',
      fontWeight: 400,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
    footerTextSelected: {
      color: theme.palette.primary.main,
      fontWeight: 500,
    },
    mainWrapper: {
      paddingBottom: '1rem',
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      width: '5rem',
      height: '3.5rem',
      borderRadius: '50px',
      textTransform: 'none',
      fontSize: '1.1rem',
      fontWeight: 700,
      // marginBottom: '1.15rem',
      color: theme.palette.common.white,
      boxShadow:
        '0px 5px 5px -3px rgb(255 255 255 / 20%), 0px 8px 10px 1px rgb(255 255 255 / 14%), 0px 3px 14px 2px rgb(255 255 255 / 12%)',
      margin: 0,
      marginBottom: '1.5rem',
      marginLeft: '1rem',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0.5rem',
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        boxShadow:
          '0px 5px 5px -3px rgb(255 255 255 / 30%), 0px 8px 10px 1px rgb(255 255 255 / 24%), 0px 3px 14px 2px rgb(255 255 255 / 22%)',
      },
    },
    copyrightText: {
      color: theme.palette.common.dark_grayish_blue,
      fontSize: '1.2rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    formWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 0,
      [theme.breakpoints.down('lg')]: {
        justifyContent: 'center',
        marginTop: '1rem',
      },
    },
    textInput: {
      backgroundColor: theme.palette.common.white,
      width: '25rem',
      borderRadius: '50px',
      [theme.breakpoints.down('xxxl')]: {
        width: '22rem',
      },
      [theme.breakpoints.down('xxl')]: {
        width: '20rem',
      },
      [theme.breakpoints.down('xl')]: {
        width: '18rem',
      },
      [theme.breakpoints.down('lg')]: {
        maxWidth: '100%',
        width: '25rem',
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: '96%',
        width: '21rem',
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: '18rem',
        width: '100%',
      },
    },
    textInputWithError: {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  };
});

function Footer() {
  const { classes } = useStyles();
  const theme = useTheme();

  const router = useRouter();

  const [value, setValue] = useState(false);
  const [socialMediaSelected, setSocialMediaSelected] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');

  const matchesXXXL = useMediaQuery((theme) => theme.breakpoints.down('xxxl'));
  const matchesXXL = useMediaQuery((theme) => theme.breakpoints.down('xxl'));
  const matchesXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setError(true);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError(true);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
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
    } else if (router.pathname === '/privacy' && value !== 6) {
      setValue(6);
    } else if (router.pathname === '/' && !value) {
      setValue(false);
    }
  }, [router, value]);

  return (
    <footer className={classes.container}>
      <Grid
        item
        container
        xs={12}
        flexDirection='row'
        className={classes.mainWrapper}
        justifyContent='center'
      >
        {matchesLG && (
          <Grid
            item
            container
            justifyContent={matchesLG ? 'center' : 'flex-end'}
            xs={12}
          >
            <Box className={classes.formWrapper}>
              <Box
                sx={{
                  width: matchesMD
                    ? '96%'
                    : matchesLG
                    ? '25rem'
                    : matchesXL
                    ? '18rem'
                    : matchesXXL
                    ? '20rem'
                    : matchesXXXL
                    ? '22rem'
                    : '25rem',
                  maxWidth: '25rem',
                  height: '5rem',
                }}
              >
                <OutlinedInput
                  type='email'
                  endAdornment={
                    error && (
                      <InputAdornment position='end'>
                        <ErrorIcon color='primary' />
                      </InputAdornment>
                    )
                  }
                  className={cls(
                    classes.textInput,
                    error && classes.textInputWithError
                  )}
                  color='secondary'
                  placeholder='Updates in your inbox...'
                  onChange={handleChange}
                  onClick={() => setError(false)}
                />
                {error && (
                  <FormHelperText
                    sx={{
                      color: theme.palette.primary.main,
                      paddingLeft: '2rem',
                      paddingTop: '0.5rem',
                    }}
                  >
                    Please insert a valid email
                  </FormHelperText>
                )}
              </Box>
              <Button
                variant='outlined'
                type='submit'
                disableRipple
                className={classes.button}
                onClick={handleSubmit}
              >
                Go
              </Button>
            </Box>
          </Grid>
        )}
        {!matchesLG && (
          <Grid
            item
            container
            lg={3}
            md={12}
            justifyContent={matchesLG ? 'center' : 'flex-start'}
          >
            <Grid
              item
              container
              className={classes.logoContainer}
              component={Link}
              href='/'
            >
              <LogoHeader color={theme.palette.common.white} />
            </Grid>
            <Grid item container>
              &nbsp;
            </Grid>
            <Grid
              item
              container
              spacing={2}
              alignItems='center'
              justifyContent={matchesLG ? 'center' : 'flex-start'}
              className={classes.socialMediaWrapper}
            >
              <Grid
                item
                className={classes.socialMedia}
                onMouseEnter={() => setSocialMediaSelected(0)}
                onMouseLeave={() => setSocialMediaSelected(false)}
              >
                <IconFacebook
                  color={
                    socialMediaSelected === 0
                      ? theme.palette.primary.main
                      : theme.palette.common.white
                  }
                />
              </Grid>
              <Grid
                item
                className={classes.socialMedia}
                onMouseEnter={() => setSocialMediaSelected(1)}
                onMouseLeave={() => setSocialMediaSelected(false)}
              >
                <IconYoutube
                  color={
                    socialMediaSelected === 1
                      ? theme.palette.primary.main
                      : theme.palette.common.white
                  }
                />
              </Grid>
              <Grid
                item
                className={classes.socialMedia}
                onMouseEnter={() => setSocialMediaSelected(2)}
                onMouseLeave={() => setSocialMediaSelected(false)}
              >
                <IconTwitter
                  color={
                    socialMediaSelected === 2
                      ? theme.palette.primary.main
                      : theme.palette.common.white
                  }
                />
              </Grid>
              <Grid
                item
                className={classes.socialMedia}
                onMouseEnter={() => setSocialMediaSelected(3)}
                onMouseLeave={() => setSocialMediaSelected(false)}
              >
                <IconPinterest
                  color={
                    socialMediaSelected === 3
                      ? theme.palette.primary.main
                      : theme.palette.common.white
                  }
                />
              </Grid>
              <Grid
                item
                className={classes.socialMedia}
                onMouseEnter={() => setSocialMediaSelected(4)}
                onMouseLeave={() => setSocialMediaSelected(false)}
              >
                <IconInstagram
                  color={
                    socialMediaSelected === 4
                      ? theme.palette.primary.main
                      : theme.palette.common.white
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid
          item
          container
          lg={2}
          md={5}
          sm={5}
          xs={5}
          xxs={5}
          flexDirection='column'
        >
          <Grid
            item
            container
            justifyContent={matchesXS ? 'flex-start' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === false && classes.footerTextSelected
              )}
              component={Link}
              href='/'
            >
              Home
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesXS ? 'flex-start' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 0 && classes.footerTextSelected
              )}
              component={Link}
              href='/pricing'
            >
              Pricing
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesXS ? 'flex-start' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 1 && classes.footerTextSelected
              )}
              component={Link}
              href='/product'
            >
              Products
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesXS ? 'flex-start' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 2 && classes.footerTextSelected
              )}
              component={Link}
              href='/about'
            >
              About Us
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={2}
          md={5}
          sm={5}
          xs={5}
          xxs={5}
          flexDirection='column'
        >
          <Grid
            item
            container
            justifyContent={matchesXS ? 'flex-start' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 3 && classes.footerTextSelected
              )}
              component={Link}
              href='/careers'
            >
              Careers
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesXS ? 'flex-start' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 4 && classes.footerTextSelected
              )}
              component={Link}
              href='/community'
            >
              Community
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesXS ? 'flex-start' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 6 && classes.footerTextSelected
              )}
              component={Link}
              href='/privacy'
            >
              Privacy Policy
            </Typography>
          </Grid>
        </Grid>
        {matchesLG && (
          <Grid
            item
            container
            lg={3}
            md={12}
            justifyContent={matchesLG ? 'center' : 'flex-start'}
          >
            <Grid
              item
              container
              spacing={2}
              alignItems='center'
              justifyContent={matchesLG ? 'space-between' : 'flex-start'}
              className={classes.socialMediaWrapper}
            >
              <Grid
                item
                className={classes.socialMedia}
                onMouseEnter={() => setSocialMediaSelected(0)}
                onMouseLeave={() => setSocialMediaSelected(false)}
              >
                <IconFacebook
                  color={
                    socialMediaSelected === 0
                      ? theme.palette.primary.main
                      : theme.palette.common.white
                  }
                />
              </Grid>
              <Grid
                item
                className={classes.socialMedia}
                onMouseEnter={() => setSocialMediaSelected(1)}
                onMouseLeave={() => setSocialMediaSelected(false)}
              >
                <IconYoutube
                  color={
                    socialMediaSelected === 1
                      ? theme.palette.primary.main
                      : theme.palette.common.white
                  }
                />
              </Grid>
              <Grid
                item
                className={classes.socialMedia}
                onMouseEnter={() => setSocialMediaSelected(2)}
                onMouseLeave={() => setSocialMediaSelected(false)}
              >
                <IconTwitter
                  color={
                    socialMediaSelected === 2
                      ? theme.palette.primary.main
                      : theme.palette.common.white
                  }
                />
              </Grid>
              <Grid
                item
                className={classes.socialMedia}
                onMouseEnter={() => setSocialMediaSelected(3)}
                onMouseLeave={() => setSocialMediaSelected(false)}
              >
                <IconPinterest
                  color={
                    socialMediaSelected === 3
                      ? theme.palette.primary.main
                      : theme.palette.common.white
                  }
                />
              </Grid>
              <Grid
                item
                className={classes.socialMedia}
                onMouseEnter={() => setSocialMediaSelected(4)}
                onMouseLeave={() => setSocialMediaSelected(false)}
              >
                <IconInstagram
                  color={
                    socialMediaSelected === 4
                      ? theme.palette.primary.main
                      : theme.palette.common.white
                  }
                />
              </Grid>
            </Grid>

            <Grid item container>
              &nbsp;
            </Grid>
            <Grid
              item
              container
              className={classes.logoContainer}
              component={Link}
              href='/'
            >
              <LogoHeader color={theme.palette.common.white} />
            </Grid>
          </Grid>
        )}
        <Grid item container lg={5} md={12}>
          {!matchesLG && (
            <Grid
              item
              container
              justifyContent={matchesLG ? 'center' : 'flex-end'}
            >
              <Box className={classes.formWrapper}>
                <Box
                  sx={{
                    width: matchesMD
                      ? '96%'
                      : matchesLG
                      ? '25rem'
                      : matchesXL
                      ? '18rem'
                      : matchesXXL
                      ? '20rem'
                      : matchesXXXL
                      ? '22rem'
                      : '25rem',
                    maxWidth: '25rem',
                    height: '5rem',
                  }}
                >
                  <OutlinedInput
                    type='email'
                    endAdornment={
                      error && (
                        <InputAdornment position='end'>
                          <ErrorIcon color='primary' />
                        </InputAdornment>
                      )
                    }
                    className={cls(
                      classes.textInput,
                      error && classes.textInputWithError
                    )}
                    color='secondary'
                    placeholder='Updates in your inbox...'
                    onChange={handleChange}
                    onClick={() => setError(false)}
                  />
                  {error && (
                    <FormHelperText
                      sx={{
                        color: theme.palette.primary.main,
                        paddingLeft: '2rem',
                        paddingTop: '0.5rem',
                      }}
                    >
                      Please insert a valid email
                    </FormHelperText>
                  )}
                </Box>
                <Button
                  variant='outlined'
                  type='submit'
                  disableRipple
                  className={classes.button}
                  onClick={handleSubmit}
                >
                  Go
                </Button>
              </Box>
            </Grid>
          )}
          <Grid item container>
            &nbsp;
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesLG ? 'center' : 'flex-end'}
          >
            <Typography variant='body' className={classes.copyrightText}>
              Copyright 2020. All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <div className={classes.footerWrapper}>
          Challenge by&nbsp;
          <Link
            href='https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29/hub'
            target='_blank'
            className={classes.link}
          >
            Frontend Mentor
          </Link>
          . Coded by&nbsp;
          <Link
            href='https://untea-rocmu-it.herokuapp.com/'
            target='_blank'
            className={classes.link}
          >
            Catalin Marius Untea
          </Link>
          .
        </div>
      </Grid>
    </footer>
  );
}

export default Footer;
