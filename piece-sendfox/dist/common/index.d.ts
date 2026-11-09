import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare function getLists(accessToken: string): Promise<{
    id: number;
    name: string;
}[][]>;
export declare function getcontacts(accessToken: string): Promise<{
    id: number;
    name: string;
}[]>;
export declare const sendfoxCommon: {
    lists: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export declare function callsendfoxApi<T extends HttpMessageBody>(method: HttpMethod, apiUrl: string, accessToken: string, body: any | undefined): Promise<HttpResponse<T>>;
//# sourceMappingURL=index.d.ts.map