import { createPiece, PieceAuth } from '@agnocon/pieces-framework';
import { HttpMethod } from '@agnocon/pieces-common';
import { makeRequest } from './lib/common';
import { newAlertTrigger } from './lib/triggers';
import { PieceCategory } from '@agnocon/pieces-framework';
import { lucidyaAuth } from './lib/auth';

export const lucidya = createPiece({
  displayName: 'Lucidya',
  description: 'AI-powered social media analytics and customer experience management',
  auth: lucidyaAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.activepieces.com/pieces/lucidya.png',
  categories: [PieceCategory.MARKETING],
  authors: ["onyedikachi-david"],
  actions: [],
  triggers: [newAlertTrigger],
});
