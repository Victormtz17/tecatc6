class TweetController {
    private tweetHttpHandler: TweetHttpHandler;

    constructor() {
        this.tweetHttpHandler = new TweetHttpHandler();
    }

    async getTweets(request: Request, response: Response, next: NextFunction) {
        await this.tweetHttpHandler.getTweets(request, response, next);
    }

    async createTweet(request: Request, response: Response, next: NextFunction) {
        await this.tweetHttpHandler.createTweet(request, response, next);
    }

    async deleteTweet(request: Request, response: Response, next: NextFunction) {
        await this.tweetHttpHandler.deleteTweet(request, response, next);
    }
}