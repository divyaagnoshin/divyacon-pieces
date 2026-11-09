import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { Pinecone } from '@pinecone-database/pinecone';
import { pineconeAuth } from '../auth';
export interface PineconeAuthConfig {
    apiKey: string;
}
export declare function createPineconeClient(authConfig: PineconeAuthConfig): Pinecone;
export declare function validateApiKey(apiKey: string): void;
export declare function createPineconeClientFromAuth(auth: AppConnectionValueForAuthProperty<typeof pineconeAuth>): Pinecone;
//# sourceMappingURL=pinecone-client.d.ts.map