import {makeAutoObservable} from "mobx";
import {RedditPost} from "./Search.support";


export default class SearchStore {

  static sharedInstance: SearchStore = new SearchStore();

  private URL_PATTERN: string = 'https://www.reddit.com/r/';

  //
  // OBSERVABLES
  input: string = '';
  selectedPosts: RedditPost[] = [];


  constructor() {
    makeAutoObservable(this);
  }

  //
  // ACTIONS
  //
  setInput = (value: string) => {
    console.log('setting input...');
    this.input = value;
  };

  addPost = (post: RedditPost) => {
    this.selectedPosts = [...this.selectedPosts, post];
  };

  //
  // COMPUTEDS
  //
  get isValidUrl() {
    return this.input.startsWith(this.URL_PATTERN);
  }

  get jsonUrl() {
    return this.input.endsWith('.json') ? this.input : this.input.concat('.json');
  }
}