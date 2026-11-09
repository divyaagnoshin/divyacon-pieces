import { PieceAuth } from '@agnocon/pieces-framework';

export const loftyAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  description: 'API Key for Lofty',
  required: true,
});
