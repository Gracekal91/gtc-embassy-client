import {Typography, Box, useTheme, Button} from "@mui/material";
import {theme} from "../../utils/theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";


interface headerProps {
    title?: string,
    subtitle?: string
}

// @ts-ignore
const DashboardHeader = ({ title, subtitle }) => {

    return (
        <Box display='flex' justifyContent="space-between" alignItems='center'>
        <Box mb="30px" ml="17px">
            <Typography
                variant="h6"
                color="white"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography variant="h6" color="#94e2cd" sx={{fontSize: '.9rem'}}>
                {subtitle}
            </Typography>
        </Box>
            <div>
                <Button
                    sx={{
                        backgroundColor: theme.blue['blue700'],
                        color: "white",
                        fontSize: "10px",
                        padding: "5px 10px",
                        borderRadius: '.1rem !important',
                        fontFamily: 'Quicksand'
                    }}
                >
                    <DownloadOutlinedIcon sx={{ mr: "10px", fontSize: '1rem'}} />
                    Download
                </Button>
            </div>
        </Box>
    );
};

export default DashboardHeader;