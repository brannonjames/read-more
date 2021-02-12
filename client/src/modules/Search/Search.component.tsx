import { default as React, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import SearchInput from '../../components/SearchInput';
import {FlexCenter} from "../../components/Styled/layout";
import SearchStore from "./Search.store";
import PostControlCenter from '../../components/PostControlCenter/PostControlCenter.component';

const { sharedInstance: store } = SearchStore;

//
// MAIN COMPONENT
//
const Search = observer(() => {

  useEffect(() => {
    if (store.input !== '') {
      store.search();
    }
  }, [store.input, store.selectedSub]);

  useEffect(() => {
    store.setSelectededSubreddit('');
    store.setStagedSubredddits([]);
    if (store.input === '') {
      store.setStagedPosts([]);
    }
  }, [store.input]);

  return (
    <Container style={{ backgroundColor: store.isOpen ? '#FAFAFA' : 'initial' }}>
      <SearchInput
        isDisabled={Boolean(store.selectedSub)}
        onSearchFieldChange={store.setInput}
        searchValue={store.input}
        onFocus={() => store.setIsSearchFocued(true)}
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