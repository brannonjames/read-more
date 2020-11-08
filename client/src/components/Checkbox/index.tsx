import React from 'react';
import Checkbox, {CheckboxProps} from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface ICheckboxProps extends CheckboxProps {
  label: string
}

export default (props: ICheckboxProps) => {
  const { label, ...restProps } = props;
  return (
    <FormControlLabel
      control={<Checkbox disableRipple {...restProps} />}
      label={label}
    />
  )
}