import { QueryParams } from '@agnocon/pieces-common';
import { Operator, TriggerField } from './constants';
import { AttestationResponse, AuthRespone, CreateWebhookParams, DeviceDefinitionResponse, DeviceDefinitionsSearchResponse, SignatureChallenge, VehicleEventTrigger } from './types';
export interface DimoClientOptions {
    clientId: string;
    redirectUri: string;
    apiKey: string;
}
export declare class DimoClient {
    private clientId;
    private redirectUri;
    private apiKey;
    constructor(options: DimoClientOptions);
    generateChallenge(): Promise<SignatureChallenge>;
    signChallenge(challenge: string): Promise<string>;
    submitChallenge(state: string, signature: string): Promise<AuthRespone>;
    getDeveloperJwt(): Promise<string>;
    createVinVC(input: {
        vehicleJwt: string;
        tokenId: number;
    }): Promise<AttestationResponse>;
    decodeVin(input: {
        developerJwt: string;
        countryCode: string;
        vin: string;
    }): Promise<DeviceDefinitionResponse>;
    deviceSearch(input: {
        developerJwt: string;
        params: QueryParams;
    }): Promise<DeviceDefinitionsSearchResponse>;
    sendIdentityGraphQLRequest(input: {
        query: string;
        variables: Record<string, any>;
    }): Promise<any>;
    sendTelemetryGraphQLRequest(input: {
        vehiclejwt: string;
        query: string;
        variables: Record<string, any>;
    }): Promise<any>;
    decodePermissions(permissionHex: string): number[];
    getVehiclePrivileges(input: {
        tokenId: number;
    }): Promise<string>;
    getVehicleJwt(input: {
        developerJwt: string;
        tokenId: number;
    }): Promise<string>;
    createWebhook(input: {
        developerJwt: string;
        params: CreateWebhookParams;
    }): Promise<{
        id: string;
    }>;
    deleteWebhook(input: {
        developerJwt: string;
        webhookId: string;
    }): Promise<any>;
    getVehicleTokenDID(input: {
        tokenId: number;
    }): Promise<string>;
    subscribeVehicle(input: {
        developerJwt: string;
        webhookId: string;
        tokenDID: string;
    }): Promise<any>;
    subscribeVehiclesToWebhook(input: {
        developerJwt: string;
        webhookId: string;
        vehicleTokenIds: string[];
    }): Promise<void>;
    unsubscribeVehicle(input: {
        developerJwt: string;
        webhookId: string;
        tokenDID: string;
    }): Promise<any>;
    subscribeAllVehicles(input: {
        developerJwt: string;
        webhookId: string;
    }): Promise<any>;
    unsubscribeAllVehicles(input: {
        developerJwt: string;
        webhookId: string;
    }): Promise<any>;
}
export declare function sendIdentityGraphQLRequest(query: string, variables: Record<string, any>): Promise<any>;
export declare function getNumberExpression(comparisonType: Operator, value: number): string;
export declare function getBooleanExpression(value: boolean): string;
export declare function vehicleEventTriggerToText(trigger: VehicleEventTrigger): string;
export declare function vehicleEventTriggerToText(field: TriggerField, operator: Operator, triggerNumber?: number | null, triggerExpression?: boolean): string;
export declare function isNumericField(field: TriggerField): boolean;
export declare function isBooleanField(field: TriggerField): boolean;
export declare const getTirePressurePositionLabel: (position: TriggerField) => string;
//# sourceMappingURL=helpers.d.ts.map