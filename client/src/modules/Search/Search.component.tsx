import { default as React, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import SearchInput from '../../components/SearchInput';
import {FlexCenter} from "../../components/Styled/layout";
import SearchStore from "./Search.store";

const { sharedInstance: store } = SearchStore;

//
// MAIN COMPONENT
//
const Search = observer(() => {

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
});

export default Search;

// STYLED COMPONENTS

const Container = styled(FlexCenter)`
  width: 100%;
  padding: 40px;
  flex-direction: column;
`;