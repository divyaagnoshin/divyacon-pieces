import { HttpMethod } from "@agnocon/pieces-common";
export type VehicleEventsParams = {
    webhookId?: string;
    tokenId?: number;
};
export declare enum VehicleEventsBodyType {
    None = "none",
    WebhookDefinition = "webhookDefinition"
}
export type VehicleEventsRequiredFields = Array<'webhookId' | 'webhookDefinition' | 'tokenId'>;
export interface VehicleEventsOperation {
    label: string;
    value: string;
    method: HttpMethod;
    url: (params: VehicleEventsParams) => string;
    bodyType: VehicleEventsBodyType;
    requiredFields?: VehicleEventsRequiredFields;
}
//# sourceMappingURL=type.d.ts.map