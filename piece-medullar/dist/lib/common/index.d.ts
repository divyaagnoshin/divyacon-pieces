import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { medullarAuth } from '../auth';
export declare const medullarCommon: {
    baseUrl: string;
    authUrl: string;
    exploratorUrl: string;
    aiUrl: string;
};
export declare function getUser(authentication: AppConnectionValueForAuthProperty<typeof medullarAuth>): Promise<any>;
export declare function getUserSpaces(authentication: AppConnectionValueForAuthProperty<typeof medullarAuth>): Promise<any>;
export declare const medullarPropsCommon: {
    spaceId: import("@agnocon/pieces-framework").DropdownProperty<{
        name: string;
        uuid: string;
    }, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    chatId: import("@agnocon/pieces-framework").DropdownProperty<{
        name: string;
        uuid: string;
    }, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
//# sourceMappingURL=index.d.ts.map