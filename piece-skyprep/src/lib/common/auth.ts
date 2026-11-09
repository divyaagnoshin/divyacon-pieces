import { PieceAuth } from '@agnocon/pieces-framework';

export const skyprepAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  description: 'Skyprep API Key',
  required: true,
});
