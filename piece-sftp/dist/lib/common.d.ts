import Client from 'ssh2-sftp-client';
import { ServerHostKeyAlgorithm } from 'ssh2';
import { Client as FTPClient } from 'basic-ftp';
export declare function getProtocolBackwardCompatibility(protocol: string | undefined): Promise<string>;
export declare function getClient<T extends Client | FTPClient>(auth: {
    protocol: string | undefined;
    host: string;
    port: number;
    allow_unauthorized_certificates: boolean | undefined;
    allow_anonymous_login: boolean | undefined;
    username: string;
    password: string | undefined;
    privateKey: string | undefined;
    algorithm: ServerHostKeyAlgorithm[] | string[] | undefined;
}): Promise<T>;
export declare function endClient(client: Client | FTPClient, protocol: string | undefined): Promise<void>;
//# sourceMappingURL=common.d.ts.map