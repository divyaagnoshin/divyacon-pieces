import { StreakWebhook } from './types';
export declare function createPipelineWebhook({ apiKey, pipelineKey, event, targetUrl, }: {
    apiKey: string;
    pipelineKey: string;
    event: string;
    targetUrl: string;
}): Promise<StreakWebhook>;
export declare function createTeamWebhook({ apiKey, teamKey, event, targetUrl, }: {
    apiKey: string;
    teamKey: string;
    event: string;
    targetUrl: string;
}): Promise<StreakWebhook>;
export declare function deleteWebhook({ apiKey, webhookKey, }: {
    apiKey: string;
    webhookKey: string;
}): Promise<void>;
//# sourceMappingURL=webhooks.d.ts.map