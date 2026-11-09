import { PieceAuth } from '@agnocon/pieces-framework';

export const memAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: `You can obtain your API key by navigating to **Integrations→ API**.`,
});
