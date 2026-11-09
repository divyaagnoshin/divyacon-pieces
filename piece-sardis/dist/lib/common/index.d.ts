import { HttpMethod } from '@agnocon/pieces-common';
export declare function sardisApiCall<T>(apiKey: string, method: HttpMethod, path: string, body?: unknown, query?: Record<string, string>): Promise<T>;
export declare const sardisCommon: {
    walletId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    chain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
};
//# sourceMappingURL=index.d.ts.map