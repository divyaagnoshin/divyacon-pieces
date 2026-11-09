import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';
import { ElevenLabsEnvironment } from '@elevenlabs/elevenlabs-js/environments';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { elevenlabsAuth } from '..';
export type ElevenResidency = 'default' | 'us' | 'eu';
export interface ExtendedReadableStream<R> extends ReadableStream {
    [Symbol.asyncIterator](): AsyncIterableIterator<R>;
}
export declare const ELEVEN_RESIDENCY: Record<ElevenResidency, ElevenLabsEnvironment>;
export declare const getApiKey: (auth: AppConnectionValueForAuthProperty<typeof elevenlabsAuth> | string) => string;
export declare const getRegionApiUrl: (region?: ElevenResidency) => "https://api.elevenlabs.io" | "https://api.us.elevenlabs.io" | "https://api.eu.residency.elevenlabs.io";
export declare const createClient: (auth: AppConnectionValueForAuthProperty<typeof elevenlabsAuth>) => ElevenLabsClient;
//# sourceMappingURL=common.d.ts.map