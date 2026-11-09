import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { cognitoFormsAuth } from '../auth';
export declare const BASE_URL = "https://www.cognitoforms.com/api";
export declare function makeRequest({ secret_text }: AppConnectionValueForAuthProperty<typeof cognitoFormsAuth>, method: HttpMethod, path: string, body?: unknown): Promise<any>;
//# sourceMappingURL=index.d.ts.map