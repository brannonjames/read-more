import {RedditPost, RedditSubreddit} from "../../modules/Search/Search.types";

export interface SearchResultsProps {
  posts: RedditPost[]
  subreddits: RedditSubreddit[]
  onAdd: (post: RedditPost) => void
  onSubSelect: (sub: RedditSubreddit) => void
  isOpen: boolean
}