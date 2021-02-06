import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import BookDetailsStore from './BookDetails.store'
import TextInput from '../../components/TextInput';

const { sharedInstance: store } = BookDetailsStore;


const BookDetails = observer(() => {
  return (
    <Container>
      <ContainerDescription>Edit your ebook details</ContainerDescription>
      <TitleInput
        onChange={e => store.setTitle(e.target.value)}
        value={store.title}
        label="Title"
      />
      <DetailInput
        onChange={e => store.setAuthor(e.target.value)}
        value={store.author}
        label="Author"
      />
    </Container>
  )

});

export default BookDetails;

// STYLED COMPONENTS
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  text-align: center;
`;

const ContainerDescription = styled.p`
  font-style: italic;
  margin-bottom: 24px;
  color: #666;
`;

const DetailInput = styled(TextInput)`
  && {
    margin-bottom: 24px;
  }  
`;

const TitleInput = styled(DetailInput)``;