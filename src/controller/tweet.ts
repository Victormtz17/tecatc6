import db from '../db/tweet';

class TweetController {
    private db: db;

    constructor() {
        this.db = new db();
    }

    async getAllTweets(): Promise<number[]> {
        const tweets = await this.db.getAllTweets();
        return tweets.filter(tweet => tweet % 2 === 0); 
    }
}

export default TweetController;

