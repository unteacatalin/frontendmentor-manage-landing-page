import Head from 'next/head';
import PeopleIcon from '@mui/icons-material/People';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';

import Layout from '../components/ui/layout';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '2.4rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '4rem 9rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '4rem 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '2.4rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
    },
    section: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconWrapper: {
      width: '10rem',
      height: '10rem',
    },
  };
});

export default function Community() {
  const { classes } = useStyles();
  return (
    <Layout>
      <Head>
        <title>Manage community page</title>
        <meta name='description' content='Manage community page' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className={classes.container}>
        <Typography variant='h1'>Community</Typography>
        <div className={classes.section} id='link-shortening'>
          <PeopleIcon className={classes.iconWrapper} />
        </div>
      </div>
    </Layout>
  );
}
