// @Components
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListGroup from '../../molecules/list-group';

// @Styles
import './styles.scss';

// @Scripts
import { config } from '../../../config';
import { Typography } from '@mui/material';

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
            color: 'primary.contrastText',
            paddingTop: '1em'
          }}
        >
          <Typography variant="h5" className="sub-header">Categories</Typography>
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
