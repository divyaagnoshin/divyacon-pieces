import { ChatType } from './types';
/**
 * Recipient types for WhatsScale actions.
 *
 * DROPDOWN recipients (Contact, Group, Channel) return pre-formatted
 * chatId values from the proxy RPC endpoints — no suffix needed.
 *
 * MANUAL recipient appends @c.us or @g.us based on ChatType.
 *
 * CRM_CONTACT uses a different body shape entirely — no chatId,
 * instead sends contact_type + crm_contact_id.
 */
export declare enum RecipientType {
    CONTACT = "contact",
    GROUP = "group",
    CHANNEL = "channel",
    MANUAL = "manual",
    CRM_CONTACT = "crm_contact"
}
/**
 * Build the message body for any recipient type.
 *
 * @param type - The recipient type
 * @param session - WhatsApp session ID
 * @param recipientValue - The dropdown value or manual entry
 * @param chatType - Only used for MANUAL type (ChatType.CONTACT or ChatType.GROUP)
 * @returns Object to spread into the API request body
 */
export declare function buildRecipientBody(type: RecipientType, session: string, recipientValue: string, chatType?: ChatType): Record<string, string>;
//# sourceMappingURL=recipients.d.ts.map