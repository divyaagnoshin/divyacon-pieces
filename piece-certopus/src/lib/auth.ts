import { PieceAuth } from '@agnocon/pieces-framework';

export const certopusAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: 'API key acquired from your Certopus profile',
});
