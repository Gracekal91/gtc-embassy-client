import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Logout} from "../../services/api";
// @ts-ignore
const Item = ({ title, to = '', icon, selected, setSelected, onClick }) => {
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: 'white',
            }}
            onClick={onClick || (() => setSelected(title))}
            icon={icon}
        >
            <Typography>{title}</Typography>
            {to && <Link to={to} />}
        </MenuItem>
    );
};

const Sidebar = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    const handleCollapse = () =>{
        if(isCollapsed){
            window.location.reload();
            setIsCollapsed(false)
        }
        setIsCollapsed(!isCollapsed)
    }

    // @ts-ignore
    return (
        <Box
            sx={{
                height: '100vh',
                "& .pro-sidebar-inner": {
                    backgroundColor: '#1F2A40!important'
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#fff !important",
                },
                "& .pro-menu-item.active": {
                    color: '#007fff !important',
                },
            }}
        >

            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={handleCollapse}
                        icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            //color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h6" color='white' sx={{fontSize: '.9rem'}}>
                                    EMPLOYEE
                                </Typography>
                                <IconButton onClick={handleCollapse}>
                                    <ArrowBackIosIcon sx={{color: 'white'}}/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h6"
                                    color='white'
                                    sx={{m: "10px 0 0 0"}}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography variant="h6" color='white' sx={{fontSize: '.8rem'}}>
                                    VP Fancy
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/dashboard-em"
                            icon={<HomeOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            onClick=''
                        />

                        <Item
                            title="Visa Application"
                            to="/visas"
                            icon={<PeopleOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            onClick=''
                        />
                        <Item
                            title="Tenant Lieu"
                            to="/contacts"
                            icon={<ContactsOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            onClick=''
                        />
                        <Item
                            title="Certificat de naissance"
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            onClick=''
                        />

                        <Item
                            title="Passport"
                            to="/form"
                            icon={<PersonOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            onClick=''
                        />
                        <Item
                            title="Permis de conduite"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            onClick=''
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlineOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            onClick=''
                        />
                        <Item
                            title="Logout"
                            icon={<HelpOutlineOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            onClick={Logout}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
