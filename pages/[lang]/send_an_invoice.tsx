import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Media, MediaContextProvider } from "../../utils/media";
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import { Button } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import VerticalLinearStepperInvoice from '../../components/VerticalLinearStepperInvoice';


//Random String Generator


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 100,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);


function Send_an_invoice() {

    const { locale, t } = useTranslation();
    
    const classes = useStyles();

    return <React.Fragment>
      <Head>
        <title>
        Send an Invoice
        </title>

      </Head>
      
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            {t('send_an_invoice')}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={4} direction='column'  alignItems='center' justify='center' className={classes.root} >
            <Grid item>
            <Typography variant='h3'>{t('send_an_invoice')}</Typography>
            </Grid>
            <Grid item>
            <VerticalLinearStepperInvoice/>
            </Grid>
        </Grid>
          

        </Media>

        {/*Tablet */}
        <Media at='md'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            {t('send_an_invoice')}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={4} direction='column'  alignItems='center' justify='center' className={classes.root} >
            <Grid item>
            <Typography variant='h3'>{t('send_an_invoice')}</Typography>
            </Grid>
            <Grid item>
            <VerticalLinearStepperInvoice/>
            </Grid>
        </Grid>
          
        </Media>

        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            {t('send_an_invoice')}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={4} direction='column'  alignItems='center' justify='center' className={classes.root} >
            <Grid item>
            <Typography variant='h3'>{t('send_an_invoice')}</Typography>
            </Grid>
            <Grid item>
            <VerticalLinearStepperInvoice/>
            </Grid>
        </Grid>
       
        </Media>
        </MediaContextProvider>
    </React.Fragment> 
}


export default withLocale(Send_an_invoice) 