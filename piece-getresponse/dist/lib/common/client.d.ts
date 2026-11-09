import { GetResponseAuthValue } from './auth';
export declare function validateGetResponseAuth(auth: GetResponseAuthValue): Promise<void>;
export declare function listGetResponseCampaigns({ auth, limit, name, }: {
    auth: GetResponseAuthValue;
    limit?: number;
    name?: string;
}): Promise<GetResponseCampaign[]>;
export declare function listGetResponseFromFields(auth: GetResponseAuthValue): Promise<GetResponseFromField[]>;
export declare function listGetResponseContacts({ auth, email, campaignId, }: {
    auth: GetResponseAuthValue;
    email: string;
    campaignId?: string;
}): Promise<GetResponseContact[]>;
export declare function createGetResponseContact({ auth, request, }: {
    auth: GetResponseAuthValue;
    request: GetResponseNewContactRequest;
}): Promise<GetResponseContact>;
export declare function updateGetResponseContact({ auth, contactId, request, }: {
    auth: GetResponseAuthValue;
    contactId: string;
    request: GetResponseUpdateContactRequest;
}): Promise<GetResponseContact>;
export declare function createGetResponseNewsletter({ auth, request, }: {
    auth: GetResponseAuthValue;
    request: GetResponseNewNewsletterRequest;
}): Promise<GetResponseNewsletter>;
export declare function flattenGetResponseCampaign(campaign: GetResponseCampaign): GetResponseFlatRecord;
export declare function flattenGetResponseContact(contact: GetResponseContact): GetResponseFlatRecord;
export declare function flattenGetResponseNewsletter(newsletter: GetResponseNewsletter): GetResponseFlatRecord;
export type GetResponseFlatRecord = Record<string, string | number | boolean | null>;
type GetResponseCampaign = {
    campaignId: string;
    name?: string | null;
    description?: string | null;
    languageCode?: string | null;
    isDefault?: string | null;
    createdOn?: string | null;
    href?: string | null;
};
type GetResponseCampaignReference = {
    campaignId: string;
    name?: string | null;
    href?: string | null;
};
type GetResponseContact = {
    contactId: string;
    name?: string | null;
    email: string;
    campaign?: GetResponseCampaignReference | null;
    dayOfCycle?: string | null;
    scoring?: number | null;
    engagementScore?: number | null;
    origin?: string | null;
    timeZone?: string | null;
    note?: string | null;
    tags?: GetResponseContactTag[];
    customFieldValues?: GetResponseContactCustomFieldValue[];
    createdOn?: string | null;
    changedOn?: string | null;
    href?: string | null;
};
type GetResponseContactCustomFieldValue = {
    customFieldId: string;
    value: string[];
};
type GetResponseContactTag = {
    tagId: string;
    name?: string | null;
};
type GetResponseFromField = {
    fromFieldId: string;
    email: string;
    name?: string | null;
    isActive?: string | null;
    isDefault?: string | null;
    createdOn?: string | null;
    href?: string | null;
};
type GetResponseFromFieldReference = {
    fromFieldId: string;
    href?: string | null;
};
type GetResponseMessageContent = {
    html?: string;
    plain?: string;
};
type GetResponseNewContactRequest = {
    email: string;
    campaign: GetResponseCampaignReference;
    name?: string;
};
type GetResponseNewNewsletterRequest = {
    subject: string;
    fromField: GetResponseFromFieldReference;
    campaign: GetResponseCampaignReference;
    content: GetResponseMessageContent;
    sendSettings: GetResponseNewsletterSendSettings;
    name?: string;
    replyTo?: GetResponseFromFieldReference;
};
type GetResponseNewsletter = {
    newsletterId: string;
    name?: string | null;
    subject?: string | null;
    type?: string | null;
    status?: string | null;
    campaign?: GetResponseCampaignReference | null;
    fromField?: GetResponseFromFieldReference | null;
    replyTo?: GetResponseFromFieldReference | null;
    sendSettings?: GetResponseNewsletterSendSettings;
    content?: GetResponseMessageContent | null;
    sendOn?: string | null;
    createdOn?: string | null;
    href?: string | null;
};
type GetResponseNewsletterSendSettings = {
    selectedCampaigns: string[];
};
type GetResponseUpdateContactRequest = {
    campaign?: GetResponseCampaignReference;
    email?: string;
    name?: string;
};
export {};
//# sourceMappingURL=client.d.ts.map