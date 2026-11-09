import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import type { githubAuth } from '../auth';
export declare const githubAuthHelpers: {
    getBearerToken: (auth: GithubAuthValue) => Promise<string>;
};
export declare function isAppAuth(auth: GithubAuthValue): boolean;
export declare function getAuthenticatedLogin(auth: GithubAuthValue): Promise<string>;
export declare function signGithubAppJwt({ appId, privateKey, }: {
    appId: string;
    privateKey: string;
}): string;
export declare function exchangeAppJwtForInstallationToken({ jwt, installationId, }: {
    jwt: string;
    installationId: string;
}): Promise<{
    token: string;
    expiresAt: number;
}>;
export type GithubAuthValue = AppConnectionValueForAuthProperty<typeof githubAuth>;
//# sourceMappingURL=auth-helpers.d.ts.map