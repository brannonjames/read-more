import {makeAutoObservable} from "mobx";

export default class NavigationStore {

  //
  // OBSERVABLES
  //
  navIndex = 0;
  shouldAnimateTransition = true;

  //
  // ACTIONS
  //
  setNavIndex = (index: number) => {
    this.navIndex = index;
  };

  constructor() {
    makeAutoObservable(this);
  }

  static sharedInstancce = new NavigationStore();
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // @ts-ignore
  window.navigationStore = NavigationStore.sharedInstancce;
}