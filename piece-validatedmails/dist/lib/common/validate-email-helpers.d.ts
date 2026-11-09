import { HttpClient } from '@agnocon/pieces-common';
import { ValidateEmailProps, ValidatedMailsValidationResponse } from './types';
export declare function sanitizeEmail(email: string): string;
export declare function assertEmailInput(email: string): void;
export declare function normalizeDnsTimeoutMs(dnsTimeoutMs?: number): number;
export declare function mapHttpStatusToError(status: number): Error;
export declare function isTransportOrServerError(error: unknown): boolean;
export declare function toValidationOutput(body: Record<string, unknown>): ValidatedMailsValidationResponse;
export declare function executeValidateEmailRequest(propsValue: ValidateEmailProps, apiKey: string, requestSender?: HttpClient['sendRequest']): Promise<ValidatedMailsValidationResponse>;
//# sourceMappingURL=validate-email-helpers.d.ts.map