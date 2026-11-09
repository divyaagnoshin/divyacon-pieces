import { PieceAuth } from '@agnocon/pieces-framework';

export const flipandoAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  description: 'Flipando API Key',
  required: true,
});
