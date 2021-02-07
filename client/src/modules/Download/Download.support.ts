import axios from 'axios';
import {RedditPost} from "../Search/Search.types";
import getServiceUrl, {SERVICE_ENDPOINT} from '../../service-urls';


export interface IChapter {
  id: string
  title: string
  author: string
  data: string
}

export interface IDownloadRequestBody {
  title: string
  author: string
  cover?: string
  content: IChapter[]
}

const EPUB_GEN_URL = getServiceUrl(SERVICE_ENDPOINT.EPUB);

export const downloadEbookFromRedditSources = async (title: string, author: string, coverURL: string, chapters: RedditPost[]) => {
  try {

    const parser = new DOMParser();

    const body: IDownloadRequestBody = {
      title,
      author,
      cover: coverURL,
      content: chapters.map(chapter => ({
        id: chapter.id,
        title: chapter.title,
        author: chapter.author,
        data: decodeHTML(chapter.selftext_html, parser)
      }))
    };

    const response = await axios.post(EPUB_GEN_URL, body, { responseType: 'blob' });
    const blob = new Blob([response.data]);

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = title.replace(/ /g, '').concat('.epub');

    document.body.appendChild(link);

    // create an <a> element and simulate the click operation.
    link.click();

  } catch (err) {
    console.error(err);
  }
};

const decodeHTML = (encoded: string, parser: DOMParser) => {
  const doc = parser.parseFromString(encoded, 'text/html');
  return doc.documentElement.textContent || '';
};