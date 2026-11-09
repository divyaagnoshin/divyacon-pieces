import { SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { ServerContext } from '@agnocon/pieces-framework';
import { SecretsAuthProps, SecretsOidcAuthProps } from './auth';
export declare function isOidcAuth(auth: SecretsAuthProps): auth is SecretsOidcAuthProps;
export declare function resolveSecretsManagerClient({ auth, server, }: {
    auth: SecretsAuthProps;
    server: ServerContext;
}): Promise<SecretsManagerClient>;
export declare function getTemporaryCredentials({ auth, server, durationSeconds, }: {
    auth: SecretsOidcAuthProps;
    server: ServerContext;
    durationSeconds?: number;
}): Promise<TemporaryCredentials>;
export declare const MIN_STS_DURATION_SECONDS = 900;
export declare const MAX_STS_DURATION_SECONDS = 43200;
type TemporaryCredentials = {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string | undefined;
};
export {};
//# sourceMappingURL=client.d.ts.map