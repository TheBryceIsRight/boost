
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Media, MediaContextProvider } from "../../utils/media";
import withLocale from '../../hocs/withLocale';
import Grid from '@material-ui/core/Grid';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ComboBox from '../../components/ComboBox';
import SearchList from "../../components/SearchList";
import Box from "@material-ui/core/Box";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       height: 100,
//       width: 100,
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//   }),
// );


function DIY() {

  const boxHeight = 30;

    return <React.Fragment>
      <Head>
        <title>
        Vantage Point Boost
        </title>
      </Head>
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>
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

        {/*Tablet */}
        <Media at='md'>
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

        {/*Desktop */}
        <Media at='lg'>
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