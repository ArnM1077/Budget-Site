import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import { Box, Toolbar, IconButton, Typography } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';

export default function Header(){

    const [open, setOpen] = useState(false);

    const handleDrawerOpen =()=>{
        setOpen(true)
    }

    const handleDrawerClose =()=>{
        setOpen(false);
    }

    return(
        <AppBar>
            <Toolbar>
                <IconButton
                    onClick={handleDrawerOpen}
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}>
                    <PostAddIcon/>
                </IconButton>
                <Drawer variant="permanent">
                    <Typography>
                        hello
                    </Typography>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}