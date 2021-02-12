import {makeAutoObservable} from "mobx";
import {RedditPost} from "../Search/Search.types";

export default class ChaptersStore {

  static sharedInstance: ChaptersStore = new ChaptersStore();

  //
  // OBSERVABLES
  chapters: RedditPost[] = [];


  constructor() {
    makeAutoObservable(this);
  }

  //
  // ACTIONS
  //
  addChapter = (chapter: RedditPost) => this.chapters = [...this.chapters, chapter];
  addChapters = (chapters: RedditPost[]) => this.chapters = [...this.chapters, ...chapters];
  removeChapter = (id: string) => this.chapters = this.chapters.filter(chapter => chapter.id !== id);

}