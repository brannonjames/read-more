import { default as React, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../components/TextInput';
import {FlexCenter} from "../../components/Styled/layout";
import withObserver from "../hocs/withObserver";
import SearchStore from "./Search.store";
import * as SearchSupport from './Search.support';

//
// MAIN COMPONENT
//
const Search = (props: ISearchProps) => {
  const { store } = props;
  const { input, setInput, isValidUrl, jsonUrl, addPost, selectedPosts } = store;

  useEffect(() => {
    if (isValidUrl) {
      SearchSupport.fetchRedditPost(jsonUrl)
        .then(addPost)
        .catch(console.error);
    }
  }, [isValidUrl, jsonUrl, addPost, input]);

  return (
    <Container>
      <SearchInput
        placeholder="Paste Reddit post URL"
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      {
        selectedPosts.map(post => (
          <div key={post.id}>
            <p>{`Title: ${post.title}`}</p>
            <p>{`Author: ${post.author}`}</p>
            <p>{`Upvotes: ${post.ups}`}</p>
          </div>
        ))
      }
    </Container>
  )
};

export default withObserver(Search, SearchStore.sharedInstance);

// TYPES
export interface ISearchProps {
  store: SearchStore
}

// STYLED COMPONENTS
const SearchInput = styled(Input)`
  font-size: 24px;
  padding: 12px;
  width: 90%;
  max-width: 680px;
`;

const Container = styled(FlexCenter)`
  padding: 40px;
  flex-direction: column;
`;