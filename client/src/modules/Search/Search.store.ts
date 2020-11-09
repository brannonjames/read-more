import {makeAutoObservable} from "mobx";
import * as SearchSupport from "./Search.support";
import ChaptersStore from '../Chapters/Chapters.store';
import {RedditPost} from "./Search.support";


export default class SearchStore {

  static sharedInstance: SearchStore = new SearchStore();
  chaptersStore = ChaptersStore.sharedInstance;

  //
  // OBSERVABLES
  input: string = '';
  stagedPosts: SearchSupport.RedditPost[] = [];


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

  addPost = (post: SearchSupport.RedditPost) => {
    this.setStagedPosts([]);
    this.setInput('');
    this.chaptersStore.addChapter(post);
  };

  search = async () => {
    if (this.isValidUrl) {
      const response = await SearchSupport.fetchRedditPost(this.jsonUrl);
      this.setStagedPosts([response]);
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
}