import axios from 'axios';

export const fetchRedditPost = async (url: string) : Promise<RedditPost> => {
  //
  try {
    //
    const response = await axios.get<RedditPostResponse>(url);
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

export interface RedditPost {
  author: string
  created: number
  created_utc: number
  id: string
  over_18: boolean,
  permalink: string,
  score: number,
  selftext: string,
  selftext_html: string
  title: string
  url: string
  ups: number,
  upvote_ratio: number
}

export interface RedditPostResponse {
  data: {
    children: {
      data: RedditPost
    }[]
  }[]
}

