import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import './styles.scss';

interface ListGroupProps {
  category: {
    category: string;
  };
}

const ListItem = ({ category }: ListGroupProps): JSX.Element => (
  <ListItemButton sx={{ pl: 8, bgcolor: 'secondary.main' }}>
        <ListItemText primary={category.category} />
  </ListItemButton>
);

export default ListItem;
