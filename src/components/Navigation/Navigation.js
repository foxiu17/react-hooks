import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PhoneIcon from '@material-ui/icons/Phone';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';

import { NavWrapper, NavBar } from './Navigation.style';

const Navigation = ({ content, handleChange }) => {

  return (
    <NavWrapper>
      <NavBar position="static" color="primary">
        <Tabs
          value={content}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="default"
          // textColor="primary"
        >
          <Tab icon={<HomeIcon />} aria-label="Home" />
          <Tab icon={<FavoriteIcon />} aria-label="Favorite" />
          <Tab icon={<PhoneIcon />} aria-label="Phone" />
          <Tab icon={<HelpIcon />} aria-label="Help" />
        </Tabs>
      </NavBar>
    </NavWrapper>
  );
};

export default Navigation;
