import { PieceAuthProperty, ShortTextProperty, StaticDropdownProperty } from '@agnocon/pieces-framework';
import { PieceStoreScope } from './common';
export declare const storageGetAction: import("@agnocon/pieces-framework").IAction<PieceAuthProperty, {
    key: ShortTextProperty<true>;
    defaultValue: ShortTextProperty<false>;
    store_scope: StaticDropdownProperty<PieceStoreScope, true>;
}>;
//# sourceMappingURL=store-get-action.d.ts.map