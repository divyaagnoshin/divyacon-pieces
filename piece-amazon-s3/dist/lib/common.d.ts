import { S3 } from '@aws-sdk/client-s3';
import { SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { ServerContext } from '@agnocon/pieces-framework';
import { AccessKeyAuthProps, OidcAuthProps, S3AuthProps } from './auth';
export declare function createS3(auth: AccessKeyAuthProps): S3;
export declare function createSecretsManagerClient(auth: AccessKeyAuthProps): SecretsManagerClient;
export declare function createS3WithAssumeRole({ auth, server, durationSeconds, }: {
    auth: OidcAuthProps;
    server: ServerContext;
    durationSeconds?: number;
}): Promise<S3>;
export declare function isOidcAuth(authProps: S3AuthProps): authProps is OidcAuthProps;
export declare function resolveS3Client({ authProps, server, }: {
    authProps: S3AuthProps;
    server: ServerContext;
}): Promise<S3>;
export declare function getTemporaryCredentials({ auth, server, durationSeconds, }: {
    auth: OidcAuthProps;
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
//# sourceMappingURL=common.d.ts.map