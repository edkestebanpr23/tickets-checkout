// @Components
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
import {
  setCategory,
  setSubcategory
} from '../../../features/ticket/ticketSlice';

// @Styles
import './styles.scss';

// @Interfaces & Types
interface ListGroupProps {
  category: {
    category: string;
    subcategory: string;
    idSubcategory: string;
  };
}

const ListItem = ({ category }: ListGroupProps): JSX.Element => {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(setSubcategory(category.idSubcategory));
    dispatch(setCategory(category.category));
  };

  return (
    <ListItemButton
      sx={{ pl: 8, bgcolor: 'Background.paper' }}
      className="ListItemButton"
      onClick={onHandleClick}
    >
      <ListItemText primary={category.subcategory} />
    </ListItemButton>
  );
};

export default ListItem;
