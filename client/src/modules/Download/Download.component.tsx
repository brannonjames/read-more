import React from 'react';
import { observer } from 'mobx-react-lite';
import Fab from '../../components/Fab';
import ChaptersStore from '../../modules/Chapters/Chapters.store';
import DetailsStore from '../../modules/BookDetails/BookDetails.store';
import * as DownloadSupport from './Download.support';
import DownloadStore from './Download.store';

const { sharedInstance: chaptersStore } = ChaptersStore;
const { sharedInstance: detailsStore } = DetailsStore;
const { sharedInstance: downloadtsore } = DownloadStore;

const Download = observer(() => {

  const handleDownload = async () => {
    downloadtsore.setIsLoading(true);
    await DownloadSupport.downloadEbookFromRedditSources(
      detailsStore.title,
      detailsStore.author,
      'https://www.redditstatic.com/icon.png',
      chaptersStore.chapters
    );
    downloadtsore.setIsLoading(false);
  };
  //
  return (
    <Fab
      onClick={handleDownload}
      disabled={downloadtsore.isLoading}
    >
      { downloadtsore.isLoading ? 'Generating...' : 'Download eBook' }
    </Fab>
  )
});

export default Download;
