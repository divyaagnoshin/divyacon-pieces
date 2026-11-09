import { AtpAgent } from '@atproto/api';
import { BlueSkyAuthType } from './auth';
export declare function createBlueskyAgent(auth: BlueSkyAuthType): Promise<AtpAgent>;
export declare function getCurrentSession(auth: BlueSkyAuthType): Promise<{
    did: string | undefined;
    handle: string | undefined;
}>;
//# sourceMappingURL=client.d.ts.map