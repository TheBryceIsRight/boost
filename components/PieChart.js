// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'
import React from "react";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

import { darkTheme } from '../components/Theme';
import { lightTheme } from '../components/Theme';
import ThemeContext from '../components/Theme';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Media, MediaContextProvider } from "../utils/media";


// Nivo theming
const theme1 = {
    axis: {
      ticks: {
        line: {
          stroke: darkTheme.palette.primary.main,
          strokeWidth: 0
        },
        text: {
          fill: darkTheme.palette.primary.main,
          fontFamily: "'Roboto', sans-serif",
        }
      }
    },
    grid: {
      line: {
        stroke: darkTheme.palette.primary.main,
        strokeWidth: 0.5
      }
    },
    legends: {
      text: {
        fontFamily: "'Roboto', sans-serif",
        fill: darkTheme.palette.primary.main,
      }
    },
    tooltip: {
      container: {
          background: darkTheme.palette.background.default,
      },
  },
  };
  
  const theme2 = {
    axis: {
      ticks: {
        line: {
          stroke: lightTheme.palette.primary.main,
          strokeWidth: 0
        },
        text: {
          fill: lightTheme.palette.primary.main,
          fontFamily: "'Roboto', sans-serif",
        }
      }
    },
    grid: {
      line: {
        stroke: lightTheme.palette.primary.main,
        strokeWidth: 0.5
      }
    },
    legends: {
      text: {
        fontFamily: "'Roboto', sans-serif",
        fill: lightTheme.palette.primary.main,
      }
    },
    tooltip: {
      container: {
          background: lightTheme.palette.background.default,
      },
  },
  };

const data = 
    [{
      "id": "Created",
      "label": "Created",
      "value": 56,
      "color": "hsl(56, 70%, 50%)"
    },
    {
      "id": "Accepted",
      "label": "Accepted",
      "value": 136,
      "color": "hsl(151, 70%, 50%)"
    },
    {
      "id": "Working",
      "label": "Working",
      "value": 420,
      "color": "hsl(10, 70%, 50%)"
    },
    {
      "id": "Closed",
      "label": "Closed",
      "value": 459,
      "color": "hsl(360, 70%, 50%)"
    },
    {
      "id": "Escalated",
      "label": "Escalated",
      "value": 246,
      "color": "hsl(130, 70%, 50%)"
    },
    {
        "id": "Rejected",
        "label": "Rejected",
        "value": 459,
        "color": "hsl(360, 70%, 50%)"
    }
]

class Chart extends React.Component {

    static contextType = ThemeContext

    

    render() {
        let theme = theme2;
        theme = this.context ? theme2 : theme1;

        return (
            <div className="chart" >
                <React.Fragment>
                <MediaContextProvider>
                <Media at='sm'>
                <Card >
                  <CardContent style={{height:280}}>
                        <ResponsivePie
                            data={data}
                            margin={{ top: 20, right: 60, bottom: 20, left: 80 }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            cornerRadius={3}
                            theme={theme}
                            colors={{ scheme: 'pastel2' }}
                            borderWidth={1}
                            radialLabelsSkipAngle={10}
                            radialLabelsTextColor={theme.legends.text.fill}
                            radialLabelsLinkColor={theme.legends.text.fill}
                            sliceLabelsSkipAngle={10}
                            sliceLabelsTextColor="#333333"
                            legends={[
                                {
                                    anchor: 'left',
                                    direction: 'column',
                                    justify: false,
                                    translateX: -80,
                                    translateY: 20,
                                    itemsSpacing: 10,
                                    itemWidth: 100,
                                    itemHeight: 18,
                                    itemTextColor: '#999',
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 1,
                                    symbolSize: 18,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                  </CardContent>
                </Card>
                </Media>
                <Media at='mo'>
                <Card >
                  <CardContent style={{height:280}}>
                        <ResponsivePie
                            data={data}
                            margin={{ top: 40, right: 40, bottom: 40, left: 100 }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            cornerRadius={3}
                            theme={theme}
                            colors={{ scheme: 'pastel2' }}
                            borderWidth={1}
                            radialLabelsSkipAngle={10}
                            radialLabelsTextColor={theme.legends.text.fill}
                            radialLabelsLinkColor={theme.legends.text.fill}
                            sliceLabelsSkipAngle={10}
                            sliceLabelsTextColor="#333333"
                            legends={[
                                {
                                    anchor: 'left',
                                    direction: 'column',
                                    justify: false,
                                    translateX: -80,
                                    translateY: 20,
                                    itemsSpacing: 10,
                                    itemWidth: 80,
                                    itemHeight: 18,
                                    itemTextColor: '#999',
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 1,
                                    symbolSize: 14,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                  </CardContent>
                </Card>
                </Media>
                <Media greaterThanOrEqual='md'>
                <Card >
                  <CardContent style={{height:450}}>
                        <ResponsivePie
                            data={data}
                            margin={{ top: 40, right: 40, bottom: 40, left: 100 }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            cornerRadius={3}
                            theme={theme}
                            colors={{ scheme: 'pastel2' }}
                            borderWidth={1}
                            radialLabelsSkipAngle={10}
                            radialLabelsTextColor={theme.legends.text.fill}
                            radialLabelsLinkColor={theme.legends.text.fill}
                            sliceLabelsSkipAngle={10}
                            sliceLabelsTextColor="#333333"
                            legends={[
                                {
                                    anchor: 'left',
                                    direction: 'column',
                                    justify: false,
                                    translateX: -80,
                                    translateY: 20,
                                    itemsSpacing: 10,
                                    itemWidth: 100,
                                    itemHeight: 18,
                                    itemTextColor: '#999',
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 1,
                                    symbolSize: 18,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                  </CardContent>
                </Card>
                </Media>
                {/* <Card >
                  <CardContent style={{height:450}}>
                        <ResponsivePie
                            data={data}
                            margin={{ top: 40, right: 40, bottom: 40, left: 100 }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            cornerRadius={3}
                            theme={theme}
                            colors={{ scheme: 'pastel2' }}
                            borderWidth={1}
                            radialLabelsSkipAngle={10}
                            radialLabelsTextColor={theme.legends.text.fill}
                            radialLabelsLinkColor={theme.legends.text.fill}
                            sliceLabelsSkipAngle={10}
                            sliceLabelsTextColor="#333333"
                            legends={[
                                {
                                    anchor: 'left',
                                    direction: 'column',
                                    justify: false,
                                    translateX: -80,
                                    translateY: 20,
                                    itemsSpacing: 10,
                                    itemWidth: 100,
                                    itemHeight: 18,
                                    itemTextColor: '#999',
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 1,
                                    symbolSize: 18,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                  </CardContent>
                </Card> */}
                </MediaContextProvider>
                </React.Fragment>

            </div>
        )
    }
}

export default Chart;