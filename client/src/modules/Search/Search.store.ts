import {makeAutoObservable} from "mobx";
import * as SearchSupport from "./Search.support";


export default class SearchStore {

  static sharedInstance: SearchStore = new SearchStore();

  //
  // OBSERVABLES
  input: string = '';
  stagedPosts: SearchSupport.RedditPost[] = [];
  selectedPosts: SearchSupport.RedditPost[] = [];


  constructor() {
    makeAutoObservable(this);
  }

  //
  // ACTIONS
  //
  setInput = (value: string) => {
    this.input = value;
  };

  addPost = (post: SearchSupport.RedditPost) => {
    this.selectedPosts = [...this.selectedPosts, post];
    this.stagedPosts = [];
    this.input = '';
  };

  search = async () => {
    if (this.isValidUrl) {
      const response = await SearchSupport.fetchRedditPost(this.jsonUrl);
      this.stagedPosts = [response]
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