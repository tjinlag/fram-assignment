import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router-dom';

export type HeaderItemType = {
  label: string;
  to: string;
}

export type HeaderProps = {
  items: HeaderItemType[];
}

const Header = ({ items } : HeaderProps) => {
  const history = useHistory();
  const handleItemClick = (item: HeaderItemType) => () => {
    history.replace(item.to);
  }

  return (
    <AppBar position="static" color="secondary">
      <Tabs value={10} onChange={() => {}}>
        {items.map((item, idx) => (
          <Tab
            key={idx}
            label={item.label}
            onClick={handleItemClick(item)}
          />
        ))}
      </Tabs>
    </AppBar>
  )
}

export default Header;
