import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Topbar from "../../components/sections/Topbar";
import Sidebar from "../../components/sections/Sidebar";
import DashboardContent from "../../components/sections/DashboardContent";


export const DashboardEm = () => {
    return(
        <>
            <div className='dashboard_container'>
                <Sidebar />
                <main className='content'>
                    <Topbar />
                    <DashboardContent title="DASHBOARD" subtitle="Welcome to your dashboard" />
                </main>
            </div>
        </>
    )
}