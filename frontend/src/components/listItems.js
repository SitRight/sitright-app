import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom'

const text = {
  color: 'black'
}

export const mainListItems = (
  <div>
    <ListItem component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon style={text} />
      </ListItemIcon>
      <ListItemText style={text} primary="Dashboard" textColor="black" />
    </ListItem>
    <ListItem component={Link} to="/marketplace">
      <ListItemIcon>
        <ShoppingCartIcon style={text} />
      </ListItemIcon>
      <ListItemText style={text} primary="Marketplace" />
    </ListItem>
    <ListItem component={Link} to="/reports">
      <ListItemIcon>
        <BarChartIcon style={text} />
      </ListItemIcon>
      <ListItemText style={text} primary="Reports" />
    </ListItem>
    <ListItem component={Link} to="/settings">
      <ListItemIcon>
        <SettingsIcon style={text} />
      </ListItemIcon>
      <ListItemText style={text} primary="Settings" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>My Data Reports</ListSubheader>
    <ListItem component={Link} to="/reports/week" >
      <ListItemIcon>
        <AssignmentIcon style={text}/>
      </ListItemIcon>
      <ListItemText style={text} primary="This Week" />
    </ListItem>
    <ListItem component={Link} to="/reports/month">
      <ListItemIcon>
        <AssignmentIcon style={text}/>
      </ListItemIcon>
      <ListItemText style={text} primary="This Month" />
    </ListItem>
    <ListItem component={Link} to="/reports/year">
      <ListItemIcon>
        <AssignmentIcon style={text}/>
      </ListItemIcon>
      <ListItemText style={text} primary="This Year" />
    </ListItem>
    <ListItem component={Link} to="/reports/alltime" >
      <ListItemIcon>
        <AssignmentIcon style={text}/>
      </ListItemIcon>
      <ListItemText style={text} primary="All Time" />
    </ListItem>
  </div>
);