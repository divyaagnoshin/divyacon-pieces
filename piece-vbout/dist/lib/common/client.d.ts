import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { CampaignCreateRequest, ContactCreateRequest, ContactList, ContactUpdateRequest, EmailListCreateRequest, SocialMediaChannelListResponse, SocialMediaPostCreateRequest, TagCreateRequest, VboutResponseBody } from './models';
export declare function prepareQuery(request?: Record<string, any>): QueryParams;
export declare class VboutClient {
    private apiKey;
    constructor(apiKey: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, url: string, query?: QueryParams, body?: object): Promise<T>;
    validateAuth(): Promise<unknown>;
    listEmailLists(): Promise<{
        lists: {
            count: number;
            items: ContactList[];
        };
    }>;
    getContactByEmail(email: string, listId?: string): Promise<VboutResponseBody<{
        contact: {
            id: string;
            email: string;
            listid: string;
            list_name: string;
            [key: string]: any;
        }[];
    }>>;
    getEmailList(listId: string): Promise<VboutResponseBody<{
        list: ContactList;
    }>>;
    createEmailList(request: EmailListCreateRequest): Promise<unknown>;
    addContact(request: ContactCreateRequest): Promise<unknown>;
    updateContact(request: ContactUpdateRequest): Promise<unknown>;
    addTagToContact(request: TagCreateRequest): Promise<unknown>;
    removeTagFromContact(email: string, tagname: string): Promise<unknown>;
    addCampaign(request: CampaignCreateRequest): Promise<unknown>;
    listSocialMediaChannels(): Promise<{
        channels: SocialMediaChannelListResponse;
    }>;
    createSocialMediaPost(request: SocialMediaPostCreateRequest): Promise<unknown>;
}
//# sourceMappingURL=client.d.ts.map