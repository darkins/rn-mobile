import AWSAppSyncClient from 'aws-appsync';

export const awsmobile = {
    aws_appsync_graphqlEndpoint: 'https://zia7groqefckzpg3wb2hdgmjsy.appsync-api.us-east-1.amazonaws.com/graphql',
    aws_appsync_region: 'us-east-1',
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: 'da2-k7rklvx3qnapnlvynvj365fh7y',
};

export const client = new AWSAppSyncClient({
    url: awsmobile.aws_appsync_graphqlEndpoint,
    region: awsmobile.aws_appsync_region,
    disableOffline: true,
    auth: {
        type: 'API_KEY',
        apiKey: awsmobile.aws_appsync_apiKey,
    },
});
