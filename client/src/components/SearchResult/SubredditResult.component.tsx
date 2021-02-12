import React from 'react';
import SearchResult from './SearchResult.component';
import {SubredditResultProps} from "./SearchResult.types";

const SubredditResult = (props: SubredditResultProps) => {
  const { subreddit, onClick } = props;
  return (
    <SearchResult onClick={() => onClick(subreddit)}>
      { subreddit.display_name_prefixed }
    </SearchResult>
  )
};

export default SubredditResult;