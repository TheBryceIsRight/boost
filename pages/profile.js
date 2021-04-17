import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Head from 'next/head'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'
import { useFetchUser } from '../lib/user';
import React from 'react';
import Image from "next/image";



const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(0.3),
      width: 20,
      height: 20,
    },
  }));

function ProfileCard({ user }) {
    return (
      <React.Fragment>  
          <Typography variant="h3">Name: {user.name}</Typography>  
          <Image src={user.picture} alt="User" />
          <Typography variant="h3">Nickname: {user.nickname}</Typography>
      </React.Fragment>
    )
  }

function Profile() {
    const { user, loading } = useFetchUser({ required: true });

    const classes = useStyles();

    return <React.Fragment><Head>
          <title>
          Profile
          </title>
        </Head>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <AccountCircle className={classes.icon} />
                Profile
            </Typography>
          </Breadcrumbs>
        <br/>
          <Typography variant='h1'>{loading ? <Skeleton /> : 'Profile'}</Typography>
        <br/>
      {loading ? < Skeleton/> : <ProfileCard user={user} />}
      </React.Fragment>
}

export default Profile