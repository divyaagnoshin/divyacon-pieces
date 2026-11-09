import { BasicAuthPropertyValue } from '@agnocon/pieces-framework';
export interface WebhookInformation {
    id: string;
    description: string;
    idModel: string;
    callbackURL: string;
    active: boolean;
    consecutiveFailures: number;
    firstConsecutiveFailDate: string;
}
export declare const trelloCommon: {
    baseUrl: string;
    board_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    list_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    list_id_opt: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty>;
    board_id_opt: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty>;
    board_labels: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty>;
    create_webhook: (auth: BasicAuthPropertyValue, list_id: string, webhookUrl: string) => Promise<WebhookInformation>;
    delete_webhook: (auth: BasicAuthPropertyValue, webhook_id: string) => Promise<any>;
    list_webhooks: (auth: BasicAuthPropertyValue) => Promise<WebhookInformation[]>;
};
export declare function getCardDetail(apikey: string, token: string, card_id: string): Promise<any>;
export declare function getCardsInBoard(apikey: string, token: string, board_id: string): Promise<any>;
export declare function getCardsInList(apikey: string, token: string, list_id: string): Promise<any>;
//# sourceMappingURL=index.d.ts.map