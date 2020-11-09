import {makeAutoObservable} from "mobx";
import {RedditPost} from "../Search/Search.support";

export default class ChaptersStore {

  static sharedInstance: ChaptersStore = new ChaptersStore();

  //
  // OBSERVABLES
  chapters: RedditPost[] = []


  constructor() {
    makeAutoObservable(this);
  }

  //
  // ACTIONS
  //
  addChapter = (chapter: RedditPost) => this.chapters = [...this.chapters, chapter];
  removeChapter = (id: string) => this.chapters = this.chapters.filter(chapter => chapter.id !== id);

}