import React from 'react';
import Fab, {FabProps} from '@material-ui/core/Fab';
import styled from 'styled-components';

export default (props: FabProps) => {
  return (
    <StyledFab
      color="secondary"
      disableRipple
      variant="extended"
      size="large"
      {...props}
    />
  )
}

const StyledFab = styled(Fab)`
  && {
    position: absolute;
    bottom: 0;
    right: 0;
    text-transform: none;
    margin: 24px;
  }
`;