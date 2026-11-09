import { pdfcrowdAuth } from './auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const BASE_URL = "https://api.pdfcrowd.com/api";
export declare const DEFAULT_CONVERTER_VERSION = "24.04";
export declare function getConvertUrl(version?: string): string;
export declare function getAuthHeader(auth: AppConnectionValueForAuthProperty<typeof pdfcrowdAuth>): string;
//# sourceMappingURL=client.d.ts.map