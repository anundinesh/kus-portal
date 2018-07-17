// This file is shared across the demos.

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import TrendingIcon from "@material-ui/icons/TrendingUp";
import WorkIcon from "@material-ui/icons/Work";
import ShippingIcon from "@material-ui/icons/LocalShipping";

export const leftPanelList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <TrendingIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Marketing Analyst" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ShippingIcon />
      </ListItemIcon>
      <ListItemText primary="Supply Chain" />
    </ListItem>
  </div>
);
