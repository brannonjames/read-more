import { default as React, useEffect } from 'react';
import styled from 'styled-components';
import SearchInput from '../../components/SearchInput';
import {FlexCenter} from "../../components/Styled/layout";
import withObserver from "../../hocs/withObserver";
import SearchStore from "./Search.store";

//
// MAIN COMPONENT
//
const Search = (props: ISearchProps) => {
  const { store } = props;

  useEffect(() => {
    store.search();
  }, [store, store.input]);

  const handleAdd = post => {
    store.addPost(post);
  };

  return (
    <Container>
      <SearchInput
        onSearchFieldChange={e => store.setInput(e.target.value)}
        posts={store.stagedPosts}
        searchValue={store.input}
        onAdd={handleAdd}
      />
    </Container>
  )
};

export default withObserver(Search, SearchStore.sharedInstance);

// TYPES
export interface ISearchProps {
  store: SearchStore
}

// STYLED COMPONENTS

const Container = styled(FlexCenter)`
  width: 100%;
  padding: 40px;
  flex-direction: column;
`;