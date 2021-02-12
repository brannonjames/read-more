import React from 'react';
import {RedditPost, RedditSubreddit} from "../../modules/Search/Search.types";

export interface SearchResultProps {
  onClick: React.MouseEventHandler<HTMLDivElement>
  style?: React.CSSProperties
  children: React.ReactNode
}

export interface SubredditResultProps {
  subreddit: RedditSubreddit
  onClick: (subreddit: RedditSubreddit) => void
}

export interface PostResultProps {
  post: RedditPost
  onClick: (post: RedditPost) => void
  isSelected: boolean
}