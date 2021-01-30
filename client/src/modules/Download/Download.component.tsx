import React from 'react';
import Fab from '../../components/Fab';
import ChaptersStore from '../../modules/Chapters/Chapters.store';
import DetailsStore from '../../modules/BookDetails/BookDetails.store';
import * as DownloadSupport from './Download.support';
import DownloadStore from './Download.store';
import withObserver from "../../hocs/withObserver";

// We only need to access the store on click so this component doesn't
// have to observe the store
const { sharedInstance: chaptersStore } = ChaptersStore;
const { sharedInstance: detailsStore } = DetailsStore;

const Download = (props: IDownloadProps) => {
  const { store } = props;

  const handleDownload = async () => {
    store.setIsLoading(true);
    await DownloadSupport.downloadEbookFromRedditSources(
      detailsStore.title,
      detailsStore.author,
      'https://www.redditstatic.com/icon.png',
      chaptersStore.chapters
    );
    store.setIsLoading(false);
  };
  //
  return (
    <Fab
      onClick={handleDownload}
      disabled={store.isLoading}
    >
      { store.isLoading ? 'Generating...' : 'Download eBook' }
    </Fab>
  )
};

export default withObserver(Download, DownloadStore.sharedInstance);

// TYPES
export interface IDownloadProps {
  store: DownloadStore
}