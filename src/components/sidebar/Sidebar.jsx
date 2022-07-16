import React from 'react'
import "./sidebar.css";
import SidebarLink from "./SidebarLink";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Avatar, Button, Divider, Typography } from '@mui/material';

import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const navigate = useNavigate();


    const handleNavigate = (path)=>{
        navigate(path);
    }

    return (
        <div className="sidebar">
            <Avatar
                alt="Remy Sharp"
                src="https://source.unsplash.com/c_GmwfHBDzk/200x200"
                sx={{ width: 100, height: 100, margin:'auto' }}
            />
            <Typography variant='body' component="h2" sx={{mt:2,textAlign: 'center'}}  >Lord Pain</Typography>
            <Typography variant='subtitle1'  sx={{textAlign: 'center'}}  >Software Developer</Typography>

            <Divider sx={{background:'black',margin:2}}/>
            <SidebarLink text="Home" Icon={HomeIcon} onClick={()=>handleNavigate('')} />
            <SidebarLink text="Profile" Icon={PermIdentityIcon} />
            <SidebarLink text="Job Positions"  Icon={ListAltIcon} onClick={()=>handleNavigate('jobs')} />
            <SidebarLink text="Messages" Icon={MailOutlineIcon} />
            <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
            <div style={{ flexGrow: 1 }}></div>
            <Button id="tweet">
                Buy
            </Button>
        </div>
    )
}

