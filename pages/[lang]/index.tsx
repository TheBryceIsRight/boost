
import Head from 'next/head';
import React, {useContext} from 'react';
import {
  Typography,
} from '@material-ui/core';
import CheckboxesGroup from '../../components/CheckboxesGroup';
import { Media, MediaContextProvider } from "../../utils/media";
import withLocale from '../../hocs/withLocale';
import StarterBundle from '../../components/StarterBundle';
import StandardBundle from '../../components/StandardBundle';
import useTranslation from '../../hooks/useTranslation';
import PremiumBundle from '../../components/PremiumBundle';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ThemeContext from '../../components/Theme';
import { Button } from '@material-ui/core';
import ComboBox from '../../components/ComboBox';
import SearchList from "../../components/SearchList";
import Box from "@material-ui/core/Box";

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
{/*
interface IIndexProps {
  products: IProduct[]
} 
*/}

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


function DIY() {

  const classes = useStyles();
  const boxHeight = 30;

    return <React.Fragment>
      <Head>
        <title>
        DIY Sales Demo
        </title>
      </Head>
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>
        <ComboBox/>
        <br/>
        <SearchList/>
        </Media>

        {/*Tablet */}
        <Media at='md'>
        <ComboBox/>
        <br/>
        <SearchList/>
        </Media>

        {/*Desktop */}
        <Media at='lg'>
        <ComboBox/>
        <br/>
        <SearchList/>
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
        <ComboBox/>
        <br/>
        <SearchList/>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <Grid container spacing={3} direction="column">
        <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
        <Grid item>
            <Typography variant="h3">Search for a merchant</Typography>
          </Grid>
          <Grid item>
          <ComboBox/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h4">Recent searches</Typography>
          </Grid>
          <Grid item>
          <SearchList/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h4">Saved searches</Typography>
          </Grid>
          <Grid item>
          <SearchList/>
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

export default withLocale(DIY) 