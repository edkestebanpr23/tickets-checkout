import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useDispatch } from 'react-redux';
import {
  setCategory,
  setSubcategory
} from '../../../features/ticket/ticketSlice';

import './styles.scss';

interface ListGroupProps {
  category: {
    category: string;
    subcategory: string;
  };
}

const ListItem = ({ category }: ListGroupProps): JSX.Element => {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(setSubcategory(category.subcategory));
    dispatch(setCategory(category.category));
  };

  return (
    <ListItemButton
      sx={{ pl: 8, bgcolor: 'secondary.main' }}
      onClick={onHandleClick}
    >
      <ListItemText primary={category.subcategory} />
    </ListItemButton>
  );
};

export default ListItem;
