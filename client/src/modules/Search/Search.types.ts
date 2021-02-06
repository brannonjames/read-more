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

export interface RedditSubreddit {
  /**
   * ex: 'nosleep'
   */
  display_name: string


  /**
   * ex: 'r/nosleep'
   */
  display_name_prefixed

  header_img: string
  title: string
  primary_color: string
  icon_img: string
  subscribers: number
  public_description: string
  url: string
}

export interface RedditResponseDataList<R> {
  data: {
    children: {
      data: R
    }[]
  }[]
}

export interface RedditResponseData<R> {
  data: {
    children: {
      data: R
    }[]
  }
}