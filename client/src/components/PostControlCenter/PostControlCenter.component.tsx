import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {PostControlCenterProps} from "./PostControlCenter.types";

const PostControlCenter = (props: PostControlCenterProps) => {
  const { onBack, onAdd } = props;

  const handleBackButtonClick = () => {
    onBack();
  };

  return (
    <Container>
      <IconButton onClick={handleBackButtonClick}>
        <ArrowBackIcon />
      </IconButton>
      <Actions>
        <Button
          variant="contained"
          color="primary"
          onClick={onAdd}
        >
          Add Posts
        </Button>
      </Actions>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
`;


const Actions = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export default PostControlCenter;