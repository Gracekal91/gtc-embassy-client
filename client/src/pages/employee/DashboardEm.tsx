import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import Topbar from "../../components/sections/Topbar";
import Sidebar from "../../components/sections/Sidebar";
import DashboardHeader from "../../components/sections/DashboardHeader";
import {theme} from "../../utils/theme";
import StatCard from "../../components/cards/StatCard";
import LineChart from "../../components/charts/LineChart";
import GeoChart from "../../components/charts/GeoChart";
import { useMediaQuery } from '@mui/material';


export const DashboardEm = () => {
    const isMobile = useMediaQuery('(max-width:960px)');

    return(
        <>
            <div className='dashboard_container'>
                <Sidebar />
                <main className='content'>
                    <Topbar />
                    <DashboardHeader title="DASHBOARD" subtitle="Welcome to your dashboard" />
                    {/* GRID & CHARTS */}
                    <Box
                        display="grid"
                        gridTemplateColumns={isMobile ? "repeat(6, 1fr)" : "repeat(12, 1fr)"}
                        gridAutoRows="140px"
                        gap="20px"
                        ml="17px"

                    >
                        {/*first row*/}
                        <Box
                            gridColumn="span 3"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                backgroundColor: theme.primo['primo400']
                            }}
                        >
                            <StatCard
                                title="12,361"
                                subtitle="Emails Sent"
                                progress="0.75"
                                increase="+14%"
                                icon={
                                    <EmailIcon
                                        sx={{ color: theme.green['green600'], fontSize: "26px" }}
                                    />
                                }
                            />
                        </Box>


                        <Box
                            gridColumn="span 3"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                backgroundColor: theme.primo['primo400']
                            }}
                        >
                            <StatCard
                                title="12,361"
                                subtitle="Emails Sent"
                                progress="0.75"
                                increase="+14%"
                                icon={
                                    <EmailIcon
                                        sx={{ color: theme.green['green600'], fontSize: "26px" }}
                                    />
                                }
                            />
                        </Box>


                        <Box
                            gridColumn="span 3"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                backgroundColor: theme.primo['primo400']
                            }}
                        >
                            <StatCard
                                title="12,361"
                                subtitle="Emails Sent"
                                progress="0.75"
                                increase="+14%"
                                icon={
                                    <EmailIcon
                                        sx={{ color: theme.green['green600'], fontSize: "26px" }}
                                    />
                                }
                            />
                        </Box>

                        <Box
                            gridColumn="span 3"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                backgroundColor: theme.primo['primo400']
                            }}
                        >
                            <StatCard
                                title="161"
                                subtitle="Emails Sent"
                                progress="0.75"
                                increase="+49%"
                                icon={
                                    <EmailIcon
                                        sx={{ color: theme.green['green600'], fontSize: "26px" }}
                                    />
                                }
                            />
                        </Box>
                        </Box>

                    {/*chart 1*/}
                <div style={{display: 'grid', gridTemplateColumns: isMobile? '1fr' : '2fr 1fr' }}>
                    <Box
                        ml='17px'
                        mt='16px'
                        sx={{
                            backgroundColor: theme.primo['primo400']
                        }}
                    >
                        <Box
                            mt="25px"
                            p="0 30px"
                            display="flex "
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box>
                                <Typography
                                    variant="h6"
                                    color={theme.grey["grey100"]}
                                    sx={{fontSize: '.9rem'}}
                                >
                                    Revenue Generated
                                </Typography>
                                <Typography
                                    variant="h3"
                                    fontWeight="bold"
                                    color={theme.green['green500']}
                                    sx={{
                                        fontSize: '1.5rem'
                                    }}
                                >
                                    $59,342.32
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton>
                                    <DownloadOutlinedIcon
                                        sx={{ fontSize: "26px", color: theme.green['green500'] }}
                                    />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box height="250px" m="-20px 0 0 0">
                            <LineChart isDashboard={true} />
                        </Box>


                        {/*Geography*/}


                    </Box>
                    <Box
                        sx={{
                            backgroundColor: theme.primo['primo400'],
                            padding: '30px',
                            ml: '17px',
                            mt: '15px'
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            sx={{ marginBottom: "15px" }}
                        >
                            Geography Based Traffic
                        </Typography>
                        <Box height="200px">
                            <GeoChart isDashboard={true} />
                        </Box>
                    </Box>
</div>
                </main>
            </div>
        </>
    )
}