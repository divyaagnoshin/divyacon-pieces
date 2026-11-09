import { HttpMethod, HttpMessageBody, QueryParams } from '@agnocon/pieces-common';
export declare const clicksendCommon: {
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    contact_list_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    sender_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
};
interface clickSendApiParams {
    method: HttpMethod;
    username: string;
    password: string;
    path: string;
    query?: QueryParams;
    body?: any;
}
export declare function callClickSendApi<T extends HttpMessageBody>(params: clickSendApiParams): Promise<import("@agnocon/pieces-common").HttpResponse<T>>;
export {};
//# sourceMappingURL=index.d.ts.map