"use client";
import React, { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
function CommunityPage({ params }: { params: { communityid: string } }) {
  const [value, setValue] = React.useState(0);
  return (
    <Paper className="!bg-slate-400" sx={{ position: "fixed", bottom: 0, left: "20%", right: "35%"}}>
      <BottomNavigation
        className="shadow-inner !bg-slate-50"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log("VALUE +>", newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Chat" icon={<ChatBubbleOutlineOutlinedIcon />} />
        <BottomNavigationAction label="Posts" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Calendar" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default CommunityPage;
