import React from 'react';
import styled from 'styled-components';
import BookDetailsStore from './BookDetails.store'
import withObserver from "../../hocs/withObserver";
import TextInput from '../../components/TextInput';
import Checkbox from '../../components/Checkbox';


const BookDetails = (props: IBookDetailsProps) => {
  const { store } = props;
  return (
    <Container>
      <ContainerDescription>Edit your ebook details...</ContainerDescription>
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
      <Checkbox
        label="Include Table of Contents"
        checked={store.shouldIncludeTOC}
        onChange={e => store.setShouldIncludeTOC(e.target.checked)}
      />
    </Container>
  )

};

export default withObserver(BookDetails, BookDetailsStore.sharedInstance);

// TYPES
export interface IBookDetailsProps {
  store: BookDetailsStore
}

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
`;

const DetailInput = styled(TextInput)`
  && {
    margin-bottom: 24px;
  }  
`;

const TitleInput = styled(DetailInput)`
  && {
    .MuiInputBase-root {
      font-size: 2rem;
    }    
  }
`;