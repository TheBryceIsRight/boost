// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'
import React from "react";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
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

    render() {
        return (
            <div className="chart" style={{height:400, minWidth:"100%", borderRadius:4}}>
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'pastel2' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkColor={{ from: 'color' }}
                    sliceLabelsSkipAngle={10}
                    sliceLabelsTextColor="#333333"
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
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
            </div>
        )
    }
}

export default Chart;