import { Typography, Box, useTheme } from "@mui/material";

interface headerProps {
    title?: string,
    subtitle?: string
}

// @ts-ignore
const DashboardHeader = ({ title, subtitle }) => {

    return (
        <Box mb="30px">
            <Typography
                variant="h6"
                color="white"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography variant="h6" color="#94e2cd">
                {subtitle}
            </Typography>
        </Box>
    );
};

export default DashboardHeader;