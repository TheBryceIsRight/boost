
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Media, MediaContextProvider } from "../../utils/media";
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import Grid from '@material-ui/core/Grid';
import {Circle} from '../../components/Circle';
import {Circle1} from '../../components/Circle1';
import {Circle2} from '../../components/Circle2';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Formik, Form, Field} from 'formik';
import {
  Button,
  LinearProgress,
  MenuItem,
  FormControlLabel
} from '@material-ui/core';
import {
  TextField,
  Switch,
} from 'formik-material-ui';

import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SyntaxHighlighter from 'react-syntax-highlighter';
import hybrid from 'react-syntax-highlighter/dist/cjs/styles/hljs/hybrid';


export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
  }

interface Values {
    email: string;
  }


  const ranges = [
    {
      value: 'United States',
      label: 'United States',
    },
    {
      value: 'Canada',
      label: 'Canada',
    },
    {
      value: 'Europe',
      label: 'Europe',
    },
  ];

  function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">POST JSON API Call</DialogTitle>
        <SyntaxHighlighter language="JSON" style={hybrid}>
            {selectedValue}
        </SyntaxHighlighter>
      </Dialog>
    );
  }


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


function Registration() {

    const { locale, t } = useTranslation();
    const classes = useStyles();

    //Dialog Controls
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("Example String");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    ///////////////////


    const NewForm = () => (
        <Card>
            <CardContent>
            <Formik
        initialValues={{
            email: '',
            email_confirm: '',
            password: '',
            select: 'United States',
            tags: [],
            terms: false,
            date: new Date(),
            time: new Date(),
            dateTime: new Date(),
        }}
        validate={values => {
            const errors: Partial<Values> = {};
            if (!values.email ) {
            errors.email = 'Required';
            } 
            else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
            errors.email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
            setSubmitting(false);
            setSelectedValue(JSON.stringify(values, null, 2));
            handleClickOpen();
            }, 500);
            // fetch(`https://hooks.zapier.com/hooks/catch/8157500/okazqvp/`, {
            // method: 'POST',
            // body: JSON.stringify(values, null, 2),
            // });
        }}
        render={({submitForm, isSubmitting}) => (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form>
                <Box margin={1}>
                <Field
                    component={TextField}
                    name="email"
                    type="email"
                    label={t('email')}
                    variant='outlined'
                />
                </Box>
                <Box margin={1}>
                <Field
                    component={TextField}
                    name="email_confirm"
                    type="email"
                    label={t('confirm_email')}
                    variant='outlined'
                />
                </Box>
                <Box margin={1}>
                <Field
                    component={TextField}
                    type="password"
                    label={t('password')}
                    name="password"
                    variant='outlined'
                />
                </Box>
                <Box margin={1}>
                <Field
                    component={TextField}
                    type="text"
                    name="select"
                    label={t('country')}
                    select
                    variant="outlined"
                    helperText={t('where_you_live')}
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                >
                    {ranges.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                </Field>
                </Box>
                <Box margin={1}>
                <FormControlLabel
                    control={
                    <Field component={Switch} type="checkbox" name="terms" />
                    }
                    label={t('i_accept')}
                />
                </Box>
                {isSubmitting && <LinearProgress />}
                <br/>
                <Box margin={1}>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                >
                    {t('continue')}
                </Button>
                </Box>
            </Form>
            </MuiPickersUtilsProvider>
        )}
        />
            </CardContent>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </Card>

        
    );

    return <React.Fragment>
      <Head>
        <title>
        {t('registration')}
        </title>

      </Head>
      
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/" as={`/${locale}/`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                {t('registration')}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={2} direction='column' alignItems='center' justify='center' className={classes.root} >
            <Grid item>
                <Typography variant="h3" component="h2">
                    {t('get_started')}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" component="h3">
                    {t('registration_motivation')}
                </Typography>
            </Grid>
        </Grid>
        
          
          <br/>
          <br/>
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} >
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('payment_acceptance')}
                    </Typography>
                    
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('take_cash')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle1/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('menu_management')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('build_a_catalog')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle2/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('discounts')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('easily_add_discounts')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={4} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                        <NewForm/>
                    </Grid>
                    <Grid item>
                        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
                            <Button variant='outlined'>{t('skip')} </Button>
                        </Link>
                    </Grid>
                </Grid>
              </Grid>

        </Media>

        {/*Tablet */}
        <Media at='md'>

        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/" as={`/${locale}/`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                {t('registration')}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={2} direction='column' alignItems='center' justify='center' className={classes.root} >
            <Grid item>
                <Typography variant="h3" component="h2">
                    {t('get_started')}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" component="h3">
                    {t('registration_motivation')}
                </Typography>
            </Grid>
        </Grid>
        
          
          <br/>
          <br/>
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} >
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('payment_acceptance')}
                    </Typography>
                    
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('take_cash')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle1/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('menu_management')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('build_a_catalog')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle2/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('discounts')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('easily_add_discounts')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={4} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                        <NewForm/>
                    </Grid>
                    <Grid item>
                        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
                            <Button variant='outlined'>{t('skip')} </Button>
                        </Link>
                    </Grid>
                </Grid>
              </Grid>

        </Media>

        {/*Desktop */}
        <Media at='lg'>

        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/" as={`/${locale}/`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                {t('registration')}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={2} direction='column' alignItems='center' justify='center' className={classes.root} >
            <Grid item>
                <Typography variant="h3" component="h2">
                    {t('get_started')}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" component="h3">
                    {t('registration_motivation')}
                </Typography>
            </Grid>
        </Grid>
        
          
          <br/>
          <br/>
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} >
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('payment_acceptance')}
                    </Typography>
                    
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('take_cash')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle1/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('menu_management')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('build_a_catalog')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle2/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('discounts')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('easily_add_discounts')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={4} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                        <NewForm/>
                    </Grid>
                    <Grid item>
                        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
                            <Button variant='outlined'>{t('skip')} </Button>
                        </Link>
                    </Grid>
                </Grid>
              </Grid>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/" as={`/${locale}/`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                {t('registration')}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={2} direction='column' alignItems='center' justify='center' className={classes.root} >
            <Grid item>
                <Typography variant="h3" component="h2">
                    {t('get_started')}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" component="h3">
                    {t('registration_motivation')}
                </Typography>
            </Grid>
            
        </Grid>
        
          
          <br/>
          <br/>
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} >
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('payment_acceptance')}
                    </Typography>
                    
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('take_cash')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle1/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('menu_management')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('build_a_catalog')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle2/>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" component="h6">
                    {t('discounts')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('easily_add_discounts')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={4} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                        <NewForm/>
                    </Grid>
                    <Grid item>
                        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
                            <Button variant='outlined'>{t('skip')} </Button>
                        </Link>
                    </Grid> 
                </Grid>
              </Grid>
          
        </Media>
        </MediaContextProvider>
    </React.Fragment> 
}

{/*In case I want to turn on eCommerce in the future */}
{/*  
DIY.getInitialProps = async () => {

  return {
    products: [
      {id: "test_product", name: "Talech Starter", price: 25.00, description: "Great for a new business", settlement: "2 Days"} as IProduct,
      {id: "test_product2", name: "Talech Standard", price: 50.00, description: "Great for an existing business", settlement:'Next Day'} as IProduct,
      {id: "test_product3", name: "Talech Premium", price: 75.00, description: "Great for an growing business", settlement:'Same Day'} as IProduct,
    ]
  }
}

*/}

export default withLocale(Registration) 