import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
import { Client } from '@microsoft/microsoft-graph-client';
declare function createClient(auth: OAuth2PropertyValue): Client;
/**
 * Delegated connections act as the signed-in user (`/me`). App-only
 * (client-credentials) tokens have no user context, so they must address a
 * specific mailbox via `/users/{id}`. Presence of the `mailbox` prop is what
 * distinguishes the two, since the piece cannot read the connection's grant type.
 */
declare function mailboxPrefix(auth: OAuth2PropertyValue): string;
export declare const outlookCommon: {
    createClient: typeof createClient;
    mailboxPrefix: typeof mailboxPrefix;
};
export {};
//# sourceMappingURL=client.d.ts.map