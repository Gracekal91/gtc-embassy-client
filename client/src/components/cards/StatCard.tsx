import { Box, Typography, useTheme } from "@mui/material";
import {theme} from "../../utils/theme";
import ProgressCircle from "./ProgressCircle";
//import ProgressCircle from "./ProgressCircle";

// @ts-ignore
const StatCard = ({ title, subtitle, icon, progress, increase }) => {

    return (
        <Box width="100%" m="0 30px" >
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography
                        variant="h6"
                        sx={{ color: theme.grey['grey100'] }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
                <Typography variant="h6" sx={{ color: theme.green['green500'], fontSize: '.9rem' }}>
                    {subtitle}
                </Typography>
                <Typography
                    variant="h6"
                    fontStyle="italic"
                    sx={{ color: theme.green['green600'], fontSize: '1rem' }}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatCard;
