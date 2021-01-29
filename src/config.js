const config = {
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-uploads-dusan",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://kf3rkhwwt6.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_tLP49JUMb",
        APP_CLIENT_ID: "3b7ra1mouqtst377ac262ldnb6",
        IDENTITY_POOL_ID: "us-east-2:eaafbba4-5154-40cf-b788-e3769f2fb64e",
    },
};
export default config;
