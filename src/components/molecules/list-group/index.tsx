// @Components
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// @Styles
import './styles.scss';

import ListItem from '../../atoms/list-item';

// @Interfaces & Types
interface ListGroupProps {
  category: {
    category: string;
    subCategories?:
      | {
          category: string;
          id: string;
        }[]
      | [];
  };
}

const ListGroup = ({ category }: ListGroupProps): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick} className="ListGroup">
        <ListItemText primary={category.category} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {Boolean(category?.subCategories?.length) && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {category?.subCategories?.map((subCategory) => (
              <ListItem
                category={{
                  subcategory: subCategory.category,
                  category: category.category,
                  idSubcategory: subCategory.id
                }}
                key={subCategory.category}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default ListGroup;
