import {RedditPost} from "../../modules/Search/Search.support";

export interface SearchInputProps {
  onSearchFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  searchValue: string
  posts: RedditPost[]
  onAdd: (post: RedditPost) => void
}