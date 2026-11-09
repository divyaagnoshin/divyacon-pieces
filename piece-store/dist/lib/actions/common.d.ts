import { StoreScope } from "@agnocon/pieces-framework";
export declare enum PieceStoreScope {
    PROJECT = "COLLECTION",
    FLOW = "FLOW",
    RUN = "RUN"
}
export declare function getScopeAndKey(params: Params): {
    scope: StoreScope;
    key: string;
};
type Params = {
    runId: string;
    key: string;
    scope: PieceStoreScope;
    isTestMode: boolean;
};
export declare const common: {
    store_scope: import("@agnocon/pieces-framework").StaticDropdownProperty<PieceStoreScope, true>;
};
export {};
//# sourceMappingURL=common.d.ts.map