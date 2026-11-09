type GetClientByIdResponse = {
    email: string;
    id: string;
    accountId: string;
    accountName: string;
    dataEntityId: string;
};
type GetClientListResponse = GetClientByIdResponse[];
export declare class Client {
    private baseURL;
    private headers;
    constructor(host: string, appKey: string, appToken: string);
    getClientById(clientID: number): Promise<GetClientByIdResponse>;
    getClientList(): Promise<GetClientListResponse>;
}
export {};
//# sourceMappingURL=Client.d.ts.map