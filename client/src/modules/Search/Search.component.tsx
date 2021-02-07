import { default as React, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import SearchInput from '../../components/SearchInput';
import {FlexCenter} from "../../components/Styled/layout";
import SearchStore from "./Search.store";
import {RedditSubreddit} from "./Search.types";

const { sharedInstance: store } = SearchStore;

//
// MAIN COMPONENT
//
const Search = observer(() => {

  useEffect(() => {
    store.search();
  }, [store.input, store.selectedSub]);

  useEffect(() => {
    store.setSelectededSubreddit('');
    store.setStagedSubredddits([]);
  }, [store.input]);

  const handleAdd = post => {
    store.addPost(post);
  };

  const handleSubSelected = (sub: RedditSubreddit) => {
    store.setSelectededSubreddit(sub.url)
  };

  return (
    <Container>
      <SearchInput
        onSearchFieldChange={e => store.setInput(e.target.value)}
        posts={store.stagedPosts}
        subreddits={store.subreddits}
        searchValue={store.input}
        onAdd={handleAdd}
        onSubSelect={handleSubSelected}
        isOpen={store.isOpen}
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