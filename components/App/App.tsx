import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import { Media, MediaContextProvider } from "../../utils/media";
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

const App: React.FC = () => {

  const boxHeight = 30;
  const headerHeight= 40;
  const headerWidth = 400;
  const listHeight = 280;
  const listWidth = 600;
  const searchInputHeight = 30;
  const searchInputWidth = 800;


    return (<React.Fragment>
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>
        <Grid container spacing={3} direction="column">
          <Grid item>
              <Box style={{height:boxHeight}}></Box>
            </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect"  style={{height:searchInputHeight, width:searchInputWidth}}></Skeleton>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:listHeight, width:listWidth}}></Skeleton>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:listHeight, width:listWidth}}></Skeleton>
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
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect"  style={{height:searchInputHeight, width:searchInputWidth}}></Skeleton>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:listHeight, width:listWidth}}></Skeleton>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:listHeight, width:listWidth}}></Skeleton>
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
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect"  style={{height:searchInputHeight, width:searchInputWidth}}></Skeleton>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:listHeight, width:listWidth}}></Skeleton>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:listHeight, width:listWidth}}></Skeleton>
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
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect"  style={{height:searchInputHeight, width:searchInputWidth}}></Skeleton>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:listHeight, width:listWidth}}></Skeleton>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:headerHeight, width:headerWidth}}></Skeleton>
          </Grid>
          <Grid item>
          <Skeleton variant="rect" style={{height:listHeight, width:listWidth}}></Skeleton>
          </Grid>
        </Grid>
        </Media>
        </MediaContextProvider>
    </React.Fragment> )
}

export default App;