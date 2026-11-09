import { cyberarkAuth } from '../auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export interface CyberArkAuth {
    serverUrl: string;
    username: string;
    password: string;
}
export interface AuthToken {
    token: string;
    serverUrl: string;
}
export declare function getAuthToken(auth: AppConnectionValueForAuthProperty<typeof cyberarkAuth>): Promise<AuthToken>;
//# sourceMappingURL=auth-helper.d.ts.map