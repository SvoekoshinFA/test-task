module.exports = {
    client: {
        id: process.env.OAUTH_CLIENT_ID,
        secret: process.env.OAUTH_CLIENT_SECRET
    },
    auth: {
        tokenHost: process.env.OAUTH_HOST,
        tokenPath: process.env.OAUTH_TOKEN_PATH,
        authorizeHost: process.env.OAUTH_HOST,
        authorizePath: process.env.OAUTH_AUTHORIZE_PATH
    }
}