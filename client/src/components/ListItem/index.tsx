import React from 'react';
import ListItem, {ListItemProps} from '@material-ui/core/ListItem';

export default (props: ListItemProps) => {
  return (
    //@ts-ignore
    <ListItem {...props} />
  );
}