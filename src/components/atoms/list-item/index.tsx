import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useSelector, useDispatch } from 'react-redux';
import {
  setCategory,
  setSubcategory,
  State
} from '../../../features/ticket/ticketSlice';

import './styles.scss';

interface ListGroupProps {
  category: {
    category: string;
  };
}

const ListItem = ({ category }: ListGroupProps): JSX.Element => {
  const category2 = useSelector((state: any) => state.tickets.category);
  const subcategory = useSelector((state: any) => state.tickets.subcategory);

  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(setSubcategory(category.category));
  };

  console.log('res', category2, subcategory);
  return (
    <ListItemButton
      sx={{ pl: 8, bgcolor: 'secondary.main' }}
      onClick={onHandleClick}
    >
      <ListItemText primary={category.category} />
    </ListItemButton>
  );
};

export default ListItem;
