// @Components
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Ticket } from '../../services/tickets';
import { TicketInterface } from '../../interface/ticket';
import Stage from '../../components/molecules/stage';
import PaymentEstimate from '../../components/molecules/payment-estimate';

// @Styles
import './styles.scss';

const EventLayout = (): JSX.Element => {
  const category = useSelector((state: any) => state.tickets.category);
  const subcategory = useSelector((state: any) => state.tickets.subcategory);
  const event = useSelector((state: any) => state.tickets.event);

  const ticket: TicketInterface | null = new Ticket().getEvent(
    category || 'Familiar',
    subcategory || '1',
    event || '1'
  );

  return (
    <Grid container className="EventInfo">
      <Grid className="card">
        <Grid
          item
          xs={5}
          className="image"
          style={{ backgroundImage: `url("${ticket?.image}")` }}
        />
        <Grid item xs={7} className="text-cnt">
          <Typography color="text.primary" variant="h3" className="title">
            {ticket?.event}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            className="description"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem unde ab aspernatur adipisci inventore, reprehenderit
            fuga doloribus, eum sequi et, commodi ut? Deleniti totam error
            doloremque maiores facere modi sunt.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="description"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            nam quisquam aspernatur beatae nesciunt, recusandae quas consectetur
            earum quia sint facere unde rerum magnam aliquam voluptas iste.
            Quaerat, reiciendis explicabo?
          </Typography>
        </Grid>
      </Grid>
      <Grid container columnSpacing={2} className="palco-info" rowGap={2}>
        <Grid item xs={12} md={8}>
          <Stage type="basic" />
        </Grid>
        <Grid item xs={12} md={4}>
          <PaymentEstimate />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventLayout;
