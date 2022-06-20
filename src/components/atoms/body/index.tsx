import * as React from 'react';
import { Grid } from '@mui/material';
import './styles.scss';
import ListCategories from '../../organism/list-categories';
import TicketContainer from '../../molecules/ticket-container';
import { useSelector } from 'react-redux';
import TicketsLayout from '../../../layouts/tickets';

type BodyProps = {
  children: JSX.Element
}

const Body = ({ children }: BodyProps): JSX.Element => {
  const category = useSelector((state: any) => state.tickets.category);
  const subcategory = useSelector((state: any) => state.tickets.subcategory);

  return (
    <Grid container className="Body">
      <Grid container className="container">
        { children }
      </Grid>
    </Grid>
  );
};

export default Body;
