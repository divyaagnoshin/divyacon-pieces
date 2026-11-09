import { PieceAuth, Property } from '@agnocon/pieces-framework';

export const stableDiffusionAuth = PieceAuth.CustomAuth({
  required: true,
  props: {
    baseUrl: Property.ShortText({
      displayName: 'Stable Diffusion web UI API base URL',
      required: true,
    }),
  },
});
