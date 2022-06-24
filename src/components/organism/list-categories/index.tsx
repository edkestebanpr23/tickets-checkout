import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './styles.scss';
import ListGroup from '../../molecules/list-group';

import { config } from '../../../config';

const {
  mockdata: { categories }
} = config;

const ListCategories = (): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'Background.paper',
        color: 'primary.contrastText'
      }}
      className="ListCategories"
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={(
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          className="header"
          sx={{
            width: '100%',
            bgcolor: 'primary.main',
            color: 'primary.contrastText'
          }}
        >
          Categories
        </ListSubheader>
      )}
    >
      {categories.map((category) => (
        <ListGroup category={category} key={category.category} />
      ))}
    </List>
  );
};

export default ListCategories;
