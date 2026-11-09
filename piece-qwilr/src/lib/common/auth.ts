import { PieceAuth } from "@agnocon/pieces-framework";
import { httpClient, HttpMethod } from "@agnocon/pieces-common";

export const qwilrAuth = PieceAuth.SecretText({
    displayName: 'API Key',
    required: true,
    description: `
    1. Go to your Qwilr account settings.
    2. Navigate to API Settings.
    3. Copy your access token.`,
})
