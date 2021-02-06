import * as SearchSupport from './Search.support';
import {SortParam} from "./Search.types";

describe('Basic Search Support Tests', () => {

  const TEST_SUBREDDIT = 'nosleep';

  describe('Subreddit Search', () => {

    it('Returns at least one result without fail', async () => {
        const results = await SearchSupport.searchSubreddits(TEST_SUBREDDIT);

        expect(results).toBeTruthy();
        expect(results.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Subreddit Post Search', () => {
    it('Returns at least one result without failing', async () => {
      const searchParams = {
        sort: SortParam.HOT
      };

      const options = {
        name: TEST_SUBREDDIT,
        searchParams
      };

      const results = await SearchSupport.searchSubredditForPosts(options);

      expect(results).toBeTruthy();
      expect(results.length).toBeGreaterThanOrEqual(1);
    });
  });
});

