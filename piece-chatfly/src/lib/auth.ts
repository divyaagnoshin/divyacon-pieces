import { PieceAuth } from '@agnocon/pieces-framework';

export const chatflyAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  description: 'Enter your ChatFly API key',
  required: true,
});
