import axios from 'axios';
import {RedditPost, RedditResponseData, RedditResponseDataList, RedditSubreddit} from "./Search.types";

export const REDDIT_URL: string = 'https://www.reddit.com';
export const URL_PATTERN: string = `${REDDIT_URL}/r/`;
export const SEARCH_PATTERN: string = `${REDDIT_URL}/search/`;

export const getJsonUrl = (url: string) => url.concat('.json');


export const fetchRedditPost = async (url: string) : Promise<RedditPost> => {
  //
  try {
    //
    const response = await axios.get<RedditResponseDataList<RedditPost>>(url);
    console.log(response);
    //
    const post: RedditPost = response.data[0]?.data?.children[0]?.data;
    //
    if (!post) {
      const msg = 'No post data - Perhaps an invalid URL';
      console.error(msg);
      return Promise.reject(msg);
    }
    //
    return post;
    //
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

/**
 * Uses search query 'q' to search for the top most relevant subreddits
 */
export const searchSubreddits = async (query: string) : Promise<RedditSubreddit[]> => {
  try {

    const url = getJsonUrl(SEARCH_PATTERN);

    const params = {
      q: query,
      type: 'sr',
      sort: 'relevance',
      t: 'month',
      limit: '6'
    };

    const response = await axios.get<RedditResponseData<RedditSubreddit>>(url, { params });

    return response.data?.data?.children.map(child => child.data);

  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

