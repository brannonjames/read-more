import * as SearchSupport from './Search.support';

describe('Basic Search Support Tests', () => {
  describe('Subreddit Search', () => {

    const TEST_SUBREDDIT = 'nosleep';

    it('Returns at least one result without fail', async () => {
        const results = await SearchSupport.searchSubreddits(TEST_SUBREDDIT);

        expect(results).toBeTruthy();
        expect(results.length).toBeGreaterThanOrEqual(1);
    });
  });
});

