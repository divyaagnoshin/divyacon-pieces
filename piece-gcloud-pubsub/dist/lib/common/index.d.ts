import { JWT } from 'google-auth-library';
export declare const common: {
    getClient(authJson: string): JWT;
    getProjectId(json: string): any;
    getPrivateKey(json: string): any;
    getEmail(json: string): any;
    /**
     * @returns options topics, topic value contain project name: projects/{pname}/topics/{tname}
     */
    getTopics(json: string): Promise<{
        disabled: boolean;
        options: {
            label: string;
            value: string;
        }[];
        placeholder: string | undefined;
    }>;
};
export interface IAuth {
    email: string;
    privateKey: string;
    projectId: string;
}
export interface ITopicsInfo {
    topics: {
        name: string;
    }[];
}
//# sourceMappingURL=index.d.ts.map