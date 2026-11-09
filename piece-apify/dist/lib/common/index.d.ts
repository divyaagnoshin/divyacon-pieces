import { ActorClient, ApifyClient, Build, Dictionary, TaskClient, WebhookCondition, WebhookEventType } from 'apify-client';
export type ApifyAuth = {
    props: {
        apikey: string;
    };
};
type DropdownOption = {
    value: string;
    label: string;
};
export type ActorBuild = Build & {
    actorDefinition?: {
        input?: {
            properties?: Record<string, {
                prefill?: unknown | null;
            }>;
        };
    };
};
export declare enum RunType {
    ACTOR = "Actor",
    TASK = "task"
}
export declare const MEMORY_OPTIONS: {
    value: number;
    label: string;
}[];
export declare const TERMINAL_STATUSES: WebhookEventType[];
export declare const STATUS_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const createApifyClient: (apiKey: string) => ApifyClient;
export declare const listActors: (apiKey: string, actorSource: string) => Promise<DropdownOption[]>;
export declare const fetchActorInputSchema: (apiKey: string, actorId: string) => Promise<Build | undefined>;
export declare const getDefaultValuesFromBuild: (build: ActorBuild) => Dictionary;
export declare const listTasks: (apiKey: string) => Promise<DropdownOption[]>;
export declare const listDatasets: (apiKey: string) => Promise<DropdownOption[]>;
export declare const listStores: (apiKey: string) => Promise<DropdownOption[]>;
export declare const listRecords: (apiKey: string, storeId: string) => Promise<DropdownOption[]>;
export declare const pluralize: (n: number) => string;
export declare const getFileExtension: (contentType: string) => string;
export declare const isBinaryContentType: (contentType: string) => boolean;
export declare const createDropdownOptions: (auth: unknown, fetchItems: (apiKey: string) => Promise<DropdownOption[]>) => Promise<{
    disabled: boolean;
    options: DropdownOption[];
}>;
export declare const createBuildProperty: () => import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const createMemoryProperty: (runType: RunType) => import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
export declare const createTimeoutProperty: (runType: RunType) => import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const createWaitForFinishProperty: (runType: RunType) => import("@agnocon/pieces-framework").CheckboxProperty<false>;
export declare const createRunOptions: (input: {
    timeout?: number | null;
    memory?: number | null;
    build?: string | null;
}) => {
    timeout?: number;
    memory?: number;
    build?: string;
};
export declare const handleRun: ({ resourceClient, body, runOptions, waitForFinish, client }: {
    resourceClient: ActorClient | TaskClient;
    body?: Dictionary;
    runOptions: {
        timeout?: number;
        memory?: number;
        build?: string;
    };
    waitForFinish: boolean;
    client: ApifyClient;
}) => Promise<{
    run: any;
    datasetItems: any;
}>;
export declare const createActorSourceProperty: () => import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
export declare const createActorIdProperty: () => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const createTaskIdProperty: () => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const createActorInputProperty: () => import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const createTaskInputProperty: () => import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const createWebhook: (client: ApifyClient, eventTypes: WebhookEventType[], condition: WebhookCondition, webhookUrl: string, idempotencyKey: string) => Promise<string>;
export declare const deleteWebhook: (client: ApifyClient, webhookId: string) => Promise<void>;
export declare const generateIdempotencyKey: (id: string, eventTypes: WebhookEventType[], webhookUrl: string) => string;
export declare const createStatusesProperty: () => import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
export declare const createWebhookSampleData: (runType: RunType) => {
    userId: string;
    createdAt: string;
    eventType: string;
    eventData: {
        actorId: string;
        actorTaskId: string | undefined;
        actorRunId: string;
    };
    resource: {
        id: string;
        actId: string;
        startedAt: string;
        finishedAt: string;
        status: string;
        isStatusMessageTerminal: boolean;
        defaultKeyValueStoreId: string;
        defaultDatasetId: string;
        defaultRequestQueueId: string;
    };
};
export {};
//# sourceMappingURL=index.d.ts.map