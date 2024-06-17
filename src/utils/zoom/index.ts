import zoomApi from 'zoomapi';

const Client = zoomApi({
    accountId: process.env.ZOOM_ACCOUNT_ID ?? "",
    oauthClientId: process.env.ZOOM_CLIENT_ID ?? "",
    oauthClientSecret: process.env.ZOOM_CLIENT_SECRET_ID ?? "",
    webhookSecretToken: process.env.ZOOM_WEBHOOK_SECRET_TOKEN ?? "",
});

export default Client;