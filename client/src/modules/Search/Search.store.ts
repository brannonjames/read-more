import {makeAutoObservable} from "mobx";
import * as SearchSupport from "./Search.support";
import ChaptersStore from '../Chapters/Chapters.store';
import {RedditPost, RedditSubreddit, SearchParams, SortParam} from "./Search.types";


export default class SearchStore {

  static sharedInstance: SearchStore = new SearchStore();
  chaptersStore = ChaptersStore.sharedInstance;

  //
  // OBSERVABLES
  input: string = '';
  stagedPosts: RedditPost[] = [];
  subreddits: RedditSubreddit[] = [];
  isSearchFocued: boolean = false;
  selectedSub: string = '';
  searchParams: SearchParams = {
    sort: SortParam.HOT,
    limit: 5
  };


  constructor() {
    makeAutoObservable(this);
  }

  //
  // ACTIONS
  //
  setInput = (value: string) => {
    this.input = value;
  };

  setStagedPosts = (posts: RedditPost[]) => {
    this.stagedPosts = posts;
  };

  setStagedSubredddits = (subs: RedditSubreddit[]) => {
    this.subreddits = subs;
  };

  setIsSearchFocued = (isFocued: boolean) => {
    this.isSearchFocued = isFocued;
  };

  setSelectededSubreddit = (sub: string) => {
    this.selectedSub = sub;
  };

  addPost = (post: RedditPost) => {
    // TODO Add better experience for adding multiple chapters quickly
    this.setInput('');
    this.setSelectededSubreddit('');
    this.setStagedPosts([]);
    this.setStagedSubredddits([]);
    this.chaptersStore.addChapter(post);
  };

  search = async () => {
    if (this.isValidUrl) {
      const response = await SearchSupport.fetchRedditPost(this.jsonUrl);
      this.setStagedPosts([response]);
    } else if (this.selectedSub) {
      const options = { name: this.selectedSub, searchParams: this.searchParams };
      const response = await SearchSupport.searchSubredditForPosts(options);
      this.setStagedPosts(response);
    } else {
      const response = await SearchSupport.searchSubreddits(this.input);
      this.setStagedSubredddits(response);
    }
  };

  //
  // COMPUTEDS
  //
  get isValidUrl() {
    return this.input.startsWith(SearchSupport.URL_PATTERN);
  }

  get jsonUrl() {
    return this.input.endsWith('.json') ? this.input : this.input.concat('.json');
  }

  get isOpen() : boolean {
    if (this.input === '') {
      return false;
    }
    return this.isSearchFocued && (this.stagedPosts.length !== 0 || this.subreddits.length !== 0);
  }
}