import { ChatType } from '../../common/types';
export declare const sendImageManualAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    session: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    chatType: import("@agnocon/pieces-framework").StaticDropdownProperty<ChatType, true>;
    recipient: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    imageUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    caption: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=send-image-manual.d.ts.map