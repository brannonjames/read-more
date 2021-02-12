import React from 'react';
import SearchStore from '../../modules/Search/Search.store';
import ChaptersStore from '../../modules/Chapters/Chapters.store';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import SubredditResult from '../SearchResult/SubredditResult.component';
import PostResult from '../SearchResult/PostResult.component';
import {RedditPost} from "../../modules/Search/Search.types";
import PostControlCenter from '../PostControlCenter/PostControlCenter.component';

const { sharedInstance: searchStore } = SearchStore;
const { sharedInstance: chaptersStore } = ChaptersStore;

//
// COMPONENT
//
const SearchResults = observer(() => {

  const isOpen = searchStore.isOpen;
  const posts = searchStore.stagedPosts;
  const selectedPostIds = searchStore.selectedPostIds;
  const subreddits = searchStore.subreddits;
  const showPosts = searchStore.shouldShowSearchResults;

  const handleToggle = (post: RedditPost) => {
    if (selectedPostIds.has(post.id)) {
      searchStore.removeSelectedPostId(post.id)
    } else {
      searchStore.addSelectedPostId(post.id)
    }
  };

  const handleAdd = () => {
    chaptersStore.addChapters(searchStore.selectedPosts);
    searchStore.clear();
  };

  const handleBackButtonClick = () => {
    searchStore.setSelectededSubreddit('');
  };

  return (
    <SearchResultsContainer style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
      <NavigationContainer screenNum={showPosts ? 1 : 0}>
        <PageContainer>
          <SearchResultsList>
            {
              subreddits.map(sub => (
                <SubredditResult
                  key={sub.id}
                  subreddit={sub}
                  onClick={() => searchStore.setSelectededSubreddit(sub.url)}
                />
              ))
            }
          </SearchResultsList>
        </PageContainer>
        <PageContainer>
          <PostControlCenter
            onBack={handleBackButtonClick}
            onAdd={handleAdd}
          />
          <SearchResultsList>
            {
              posts.map(post => (
                <PostResult
                  key={post.id}
                  post={post}
                  onClick={handleToggle}
                  isSelected={selectedPostIds.has(post.id)}
                />
              ))
            }
          </SearchResultsList>
        </PageContainer>
      </NavigationContainer>
    </SearchResultsContainer>
  )
});

//
// STYLED COMPONENTS
//
const SearchResultsContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  background-color: #FAFAFA;
  z-index: 999;
  overflow: hidden;
`;

const NavigationContainer = styled.div`
  width: 200%;
  display: flex;
  transition: transform 200ms;
  transform: translateX(-${props => props.screenNum * 50}%);
`;

const PageContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  margin: 0;
  padding: 0 12px;
`;

const SearchResultsList = styled.ul`
  width: 100%;
  list-style: none;
  border-radius: 4px;
  margin: 0;
  padding: 0;
`;

export default SearchResults;

