export declare const googleChatAPIService: {
    fetchProjects(accessToken: string): Promise<any>;
    sendMessage({ accessToken, spaceId, text, thread, messageReplyOption, customMessageId, isPrivate, privateMessageViewer, }: {
        accessToken: string;
        spaceId: string;
        text: string;
        thread?: string;
        messageReplyOption?: string;
        customMessageId?: string;
        isPrivate?: boolean;
        privateMessageViewer?: string;
    }): Promise<any>;
    AddASpaceMember({ accessToken, spaceId, userId, }: {
        accessToken: string;
        spaceId: string;
        userId: string;
    }): Promise<any>;
    getMessage(accessToken: string, messageName: string): Promise<any>;
    getSpace({ accessToken, spaceId, }: {
        accessToken: string;
        spaceId: string;
    }): Promise<any>;
    listMessages(accessToken: string, spaceId: string, pageSize?: number): Promise<any>;
    fetchAllSpaces(accessToken: string): Promise<any>;
    fetchSpaces(accessToken: string): Promise<any>;
    fetchDirectMessages(accessToken: string): Promise<any>;
    fetchThreads(accessToken: string, spaceId: string): Promise<any[]>;
    fetchSpaceMembers(accessToken: string, spaceId: string): Promise<any>;
    fetchPeople(accessToken: string): Promise<any>;
    deleteWorkspaceEventsSubscription({ accessToken, subscriptionName, }: {
        accessToken: string;
        subscriptionName: string;
    }): Promise<any>;
    grantTopicPermissions({ accessToken, projectId, topicName, }: {
        accessToken: string;
        projectId: string;
        topicName: string;
    }): Promise<any>;
    createPubSubTopic({ accessToken, projectId, topicName, }: {
        accessToken: string;
        projectId: string;
        topicName: string;
    }): Promise<any>;
    deletePubSubTopic({ accessToken, projectId, topicName, }: {
        accessToken: string;
        projectId: string;
        topicName: string;
    }): Promise<any>;
    createWorkspaceEventsSubscription({ accessToken, projectId, subscriptionName, targetResource, eventTypes, topicName, includeResource, }: {
        accessToken: string;
        projectId: string;
        subscriptionName: string;
        targetResource: string;
        eventTypes: string[];
        topicName: string;
        includeResource?: boolean;
    }): Promise<any>;
    createPubSubSubscription({ accessToken, projectId, subscriptionName, topicName, pushEndpoint, }: {
        accessToken: string;
        projectId: string;
        subscriptionName: string;
        topicName: string;
        pushEndpoint: string;
    }): Promise<any>;
    createWebhookSubscription({ accessToken, projectId, topic, subscriptionName, webhookUrl, eventTypes, targetResource, }: {
        accessToken: string;
        projectId: string;
        topic: string;
        webhookUrl: string;
        subscriptionName: string;
        eventTypes: string[];
        targetResource: string;
    }): Promise<{
        workspaceSubscription: any;
        pubsubSubscription: any;
    }>;
    deletePubSubSubscription({ accessToken, projectId, subscriptionName, }: {
        accessToken: string;
        projectId: string;
        subscriptionName: string;
    }): Promise<any>;
    deleteWebhookSubscription({ accessToken, projectId, subscriptionName, topicName, event_type, }: {
        accessToken: string;
        projectId: string;
        subscriptionName: string;
        topicName: string;
        event_type: string;
    }): Promise<void>;
    fetchWorkSpaceSubscriptions({ accessToken, event_type, }: {
        accessToken: string;
        event_type: string;
    }): Promise<any>;
    cleanupWebhookResources({ accessToken, projectId, event_type, }: {
        accessToken: string;
        projectId: string;
        event_type: string;
    }): Promise<void>;
};
//# sourceMappingURL=requests.d.ts.map