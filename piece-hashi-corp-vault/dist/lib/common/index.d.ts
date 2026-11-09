import { hashiCorpVaultAuth } from '../auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export interface VaultAuthResult {
    token: string;
    baseUrl: string;
    namespace?: string;
    apiVersion: string;
}
export declare function getVaultToken(auth: AppConnectionValueForAuthProperty<typeof hashiCorpVaultAuth>): Promise<VaultAuthResult>;
export declare function buildVaultHeaders(token: string, namespace?: string, customHeaders?: Record<string, string>): Record<string, string>;
export declare function buildSecretUrl(baseUrl: string, secretEngine: string, secretPath: string, apiVersion: string, operation: 'read' | 'write' | 'delete' | 'list'): string;
//# sourceMappingURL=index.d.ts.map