import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { AccountCustomFieldsResponse, ContactCustomFieldsResponse, ContactList, CreateAccountRequest, CreateContactRequest, CreateWebhookRequest, CreateWebhookResponse, ListAccountsResponse, ListContactsResponse, ListTagsResponse } from './types';
export declare function prepareQuery(request?: Record<string, any>): QueryParams;
export declare class ActiveCampaignClient {
    private apiUrl;
    private apiKey;
    constructor(apiUrl: string, apiKey: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, query?: QueryParams, body?: any | undefined): Promise<T>;
    authenticate(): Promise<unknown>;
    subscribeWebhook(request: CreateWebhookRequest): Promise<CreateWebhookResponse>;
    unsubscribeWebhook(webhookId: string): Promise<unknown>;
    listContactLists(): Promise<{
        lists: ContactList[];
    }>;
    createAccount(request: CreateAccountRequest): Promise<unknown>;
    updateAccount(accountId: number, request: Partial<CreateAccountRequest>): Promise<unknown>;
    listAccounts(search?: string): Promise<ListAccountsResponse>;
    listAccountCustomFields(): Promise<{
        accountCustomFieldMeta: AccountCustomFieldsResponse[];
    }>;
    createContact(request: CreateContactRequest): Promise<unknown>;
    updateContact(contactId: number, request: Partial<CreateContactRequest>): Promise<unknown>;
    listContacts(): Promise<ListContactsResponse>;
    listContactCustomFields(): Promise<ContactCustomFieldsResponse>;
    addContactToList(listId: string, contactId: string, status: string): Promise<unknown>;
    createAccountContactAssociation(contactId: number, accountId: number, jobTitle?: string): Promise<unknown>;
    addTagToContact(contactId: string, tagId: string): Promise<unknown>;
    listTags(): Promise<ListTagsResponse>;
}
//# sourceMappingURL=client.d.ts.map