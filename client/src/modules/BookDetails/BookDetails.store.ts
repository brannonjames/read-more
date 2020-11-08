import {makeAutoObservable} from "mobx";

export default class BookDetailsStore {

  static sharedInstance: BookDetailsStore = new BookDetailsStore();

  //
  // OBSERVABLES
  title: string = `New eBook ${Math.floor(Math.random() * (999999 - 111111) + 111111)}`;
  author: string = 'Readdit';
  shouldIncludeTOC: boolean = true;


  constructor() {
    makeAutoObservable(this);
  }

  //
  // ACTIONS
  //
  setTitle = (value: string) => this.title = value;
  setAuthor = (value: string) => this.author = value;
  setShouldIncludeTOC = (value: boolean) => this.shouldIncludeTOC = value;

}