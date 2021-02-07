import {RedditPost, RedditSubreddit} from "../../modules/Search/Search.types";

export interface SearchInputProps {
  onSearchFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  searchValue: string
  posts: RedditPost[]
  subreddits: RedditSubreddit[]
  onAdd: (post: RedditPost) => void
  onSubSelect: (sub: RedditSubreddit) => void
  isOpen: boolean
  onFocus: () => void
}