import React from 'react';
import TextField, {TextFieldProps} from '@material-ui/core/TextField';

export default (props: TextFieldProps) => {
  return (
    // https://github.com/mui-org/material-ui/issues/15697
    // @ts-ignore
    <TextField
      variant="outlined"
      {...props}
    />
  );
};