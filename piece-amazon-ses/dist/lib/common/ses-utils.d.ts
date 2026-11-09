import { SESClient } from '@aws-sdk/client-ses';
export interface SESAuth {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
}
/**
 * Creates a configured SES client
 */
export declare function createSESClient(auth: SESAuth): SESClient;
/**
 * Fetches and filters verified identities from AWS SES
 */
export declare function getVerifiedIdentities(auth: SESAuth): Promise<string[]>;
/**
 * Fetches configuration sets from AWS SES
 */
export declare function getConfigurationSets(auth: SESAuth): Promise<string[]>;
/**
 * Validates email address format
 */
export declare function isValidEmail(email: string): boolean;
/**
 * Converts HTML content to plain text
 * Strips HTML tags and converts common elements to text equivalents
 */
export declare function htmlToText(html: string): string;
/**
 * Validates and sanitizes email addresses from arrays
 */
export declare function validateEmailAddresses(emails: string[] | string | undefined, fieldName: string): string[];
/**
 * Checks AWS SES recipient limits
 */
export declare function validateRecipientLimits(toAddresses: string[], ccAddresses?: string[], bccAddresses?: string[]): void;
/**
 * Converts email tags object to AWS SES MessageTag format
 */
export declare function formatEmailTags(tags: Record<string, string> | undefined): Array<{
    Name: string;
    Value: string;
}> | undefined;
/**
 * Gets user-friendly error message for AWS SES errors
 */
export declare function getSESErrorMessage(error: any, configurationSetName?: string): string;
/**
 * Dropdown option type for Activepieces
 */
export interface DropdownOption {
    label: string;
    value: string;
}
/**
 * Creates dropdown options from verified identities
 */
export declare function createIdentityDropdownOptions(identities: string[]): {
    disabled: boolean;
    placeholder?: string;
    options: DropdownOption[];
};
/**
 * Creates dropdown options from configuration sets
 */
export declare function createConfigSetDropdownOptions(configSets: string[]): {
    disabled: boolean;
    options: DropdownOption[];
};
/**
 * Fetches existing email templates from AWS SES
 */
export declare function getEmailTemplates(auth: SESAuth): Promise<string[]>;
/**
 * Fetches a specific email template from AWS SES
 */
export declare function getEmailTemplate(auth: SESAuth, templateName: string): Promise<{
    templateName: string;
    subjectPart?: string;
    htmlPart?: string;
    textPart?: string;
} | null>;
/**
 * Validates template name format
 */
export declare function validateTemplateName(name: string): void;
/**
 * Validates template content
 */
export declare function validateTemplateContent(htmlPart?: string, textPart?: string): void;
/**
 * Gets user-friendly error message for template-related AWS SES errors
 */
export declare function getTemplateErrorMessage(error: any, templateName?: string): string;
/**
 * Extracts and validates template variables from content
 */
export declare function extractTemplateVariables(content: string): string[];
/**
 * Validates template variable syntax
 */
export declare function validateTemplateVariables(subject: string, htmlPart?: string, textPart?: string): string[];
/**
 * Creates template preview with sample data
 */
export declare function createTemplatePreview(content: string, sampleData?: Record<string, string>): string;
/**
 * Compares two template versions and returns what changed
 */
export declare function compareTemplateContent(current: {
    subjectPart?: string;
    htmlPart?: string;
    textPart?: string;
}, updated: {
    subjectPart: string;
    htmlPart?: string;
    textPart?: string;
}): {
    subjectChanged: boolean;
    htmlChanged: boolean;
    textChanged: boolean;
    summary: string[];
};
/**
 * Fetches existing custom verification email templates from AWS SES
 */
export declare function getCustomVerificationTemplates(auth: SESAuth): Promise<string[]>;
/**
 * Fetches a specific custom verification email template from AWS SES
 */
export declare function getCustomVerificationTemplate(auth: SESAuth, templateName: string): Promise<{
    templateName: string;
    fromEmailAddress?: string;
    templateSubject?: string;
    templateContent?: string;
    successRedirectionURL?: string;
    failureRedirectionURL?: string;
} | null>;
/**
 * Validates custom verification template name format
 */
export declare function validateCustomVerificationTemplateName(name: string): void;
/**
 * Validates URL format
 */
export declare function validateURL(url: string, fieldName: string): void;
/**
 * Validates custom verification template content
 */
export declare function validateCustomVerificationContent(content: string): void;
/**
 * Compares two custom verification template versions and returns what changed
 */
export declare function compareCustomVerificationContent(current: {
    fromEmailAddress?: string;
    templateSubject?: string;
    templateContent?: string;
    successRedirectionURL?: string;
    failureRedirectionURL?: string;
}, updated: {
    fromEmailAddress: string;
    templateSubject: string;
    templateContent: string;
    successRedirectionURL: string;
    failureRedirectionURL: string;
}): {
    fromEmailChanged: boolean;
    subjectChanged: boolean;
    contentChanged: boolean;
    successUrlChanged: boolean;
    failureUrlChanged: boolean;
    summary: string[];
};
/**
 * Gets user-friendly error message for custom verification template errors
 */
export declare function getCustomVerificationErrorMessage(error: any, templateName?: string): string;
/**
 * Calculates and formats content size
 */
export declare function formatContentSize(content: string): {
    bytes: number;
    formatted: string;
};
//# sourceMappingURL=ses-utils.d.ts.map