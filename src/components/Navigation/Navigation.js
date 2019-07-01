import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PhoneIcon from '@material-ui/icons/Phone';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';

import { NavWrapper, useStyles } from './Navigation.style';

const Navigation = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NavWrapper>
      <AppBar className={classes.wrapper} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          indicatorColor="text.primary"
          scrollButtons="off"
        >
          <Tab icon={<HomeIcon />} aria-label="Home" />
          <Tab icon={<FavoriteIcon />} aria-label="Favorite" />
          <Tab icon={<PhoneIcon />} aria-label="Phone" />
          <Tab icon={<HelpIcon />} aria-label="Help" />
        </Tabs>
      </AppBar>
      {/* {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
      {value === 3 && <TabContainer>Item Four</TabContainer>}
      {value === 4 && <TabContainer>Item Five</TabContainer>}
      {value === 5 && <TabContainer>Item Six</TabContainer>}
      {value === 6 && <TabContainer>Item Seven</TabContainer>} */}
    </NavWrapper>
  );
};

export default Navigation;
