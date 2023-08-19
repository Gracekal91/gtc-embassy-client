
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { mockLineData as data } from "../../data/mockData";
import {theme} from "../../utils/theme";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {

    return (
        <ResponsiveLine
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: theme.grey['grey100'],
                        },
                    },
                    legend: {
                        text: {
                            fill: theme.grey['grey100'],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: theme.grey['grey100'],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: theme.grey['grey100'],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: theme.grey['grey300'],
                    },
                },
                tooltip: {
                    container: {
                        color: theme.primo['primo400'],
                    },
                },
            }}
            colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "transportation", // added
                legendOffset: 36,
                legendPosition: "middle",
            }}
            axisLeft={{
                tickValues: 5, // added
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "count", // added
                legendOffset: -40,
                legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={8}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default LineChart;
