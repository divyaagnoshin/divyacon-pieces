export declare const zagoMailApiService: {
    createSubscriber: (publicKey: string, listUid: string, body: any) => Promise<any>;
    updateSubscriber: (publicKey: string, listUid: string, subscriberUid: string, body: any) => Promise<any>;
    unsubscribeSubscriber: (publicKey: string, listUid: string, subscriberUid: string) => Promise<any>;
    searchSubscriberByEmail: (publicKey: string, listUid: string, body: {
        email: string;
    }) => Promise<any>;
    getSubscriberDetails: (publicKey: string, listUid: string, subscriberUid: string) => Promise<any>;
    getCampaignDetails: (publicKey: string, campaignUid: string) => Promise<any>;
    addTagToSubscriber: (publicKey: string, { listUid, tagId, subscriberUid, }: {
        listUid: string;
        subscriberUid: string;
        tagId: string;
    }) => Promise<any>;
    createTag: (publicKey: string, tagName: string) => Promise<any>;
    getTags: (publicKey: string) => Promise<any>;
    createWebhook: (publicKey: string, webhookUrl: string, event_type: "subscriber-activate" | "subscriber-unsubscribe" | "tag-added", extraParams?: {
        formID?: string;
        tagID?: string;
        linkUrl?: string;
    }) => Promise<any>;
    deleteWebhook: (publicKey: string, webhookId: string) => Promise<any>;
    getAllLists: (publicKey: string) => Promise<any>;
    getListFields: (publicKey: string, listUid: string) => Promise<any>;
    getCampaigns: (publicKey: string) => Promise<any>;
};
//# sourceMappingURL=request.d.ts.map