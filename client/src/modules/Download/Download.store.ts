import {makeAutoObservable} from "mobx";

export default class DownloadStore {

  static sharedInstance: DownloadStore = new DownloadStore();

  //
  // OBSERVABLES
  isLoading: boolean = false;


  constructor() {
    makeAutoObservable(this);
  }

  //
  // ACTIONS
  //
  setIsLoading = (isLoading: boolean) => this.isLoading = isLoading;

}