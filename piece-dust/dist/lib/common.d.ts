import { DustAuthType } from '..';
import { DustAPI } from '@dust-tt/client';
export declare const DUST_BASE_URL: Record<string, string>;
export declare const createClient: (auth: DustAuthType) => DustAPI;
export declare const assistantProp: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>>;
export declare const usernameProp: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const timezoneProp: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const timeoutProp: import("@agnocon/pieces-framework").NumberProperty<true>;
export declare function getConversationContent(conversationId: string, timeout: number, auth: DustAuthType): Promise<any>;
//# sourceMappingURL=common.d.ts.map