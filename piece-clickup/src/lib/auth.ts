import { PieceAuth } from '@agnocon/pieces-framework';

export const clickupAuth = PieceAuth.OAuth2({
  description: '',
  authUrl: 'https://app.clickup.com/api',
  tokenUrl: 'https://api.clickup.com/api/v2/oauth/token',
  required: true,
  scope: [],
});
