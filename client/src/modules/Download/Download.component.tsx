import React from 'react';
import Fab from '../../components/Fab';
import ChaptersStore from '../../modules/Chapters/Chapters.store';
import DetailsStore from '../../modules/BookDetails/BookDetails.store';
import * as DownloadSupport from './Download.support';

// We only need to access the store on click so this component doesn't
// have to observe the store
const { sharedInstance: chaptersStore } = ChaptersStore;
const { sharedInstance: detailsStore } = DetailsStore;

const Download = () => {
  //
  const handleDownload = () => {
    DownloadSupport.downloadEbookFromRedditSources(
      detailsStore.title,
      detailsStore.author,
      'https://www.redditstatic.com/icon.png',
      chaptersStore.chapters
    )
  };
  //
  return <Fab onClick={handleDownload}>Download eBook</Fab>
};

export default Download;