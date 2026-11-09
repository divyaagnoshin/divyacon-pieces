import { ShortTextProperty, StaticDropdownProperty } from '@agnocon/pieces-framework';
export declare const callMethod: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    type: StaticDropdownProperty<string, true>;
    username: ShortTextProperty<false>;
    password: ShortTextProperty<false>;
    customHeader: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>, {
    wsdl: ShortTextProperty<true>;
    method: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        type: StaticDropdownProperty<string, true>;
        username: ShortTextProperty<false>;
        password: ShortTextProperty<false>;
        customHeader: import("@agnocon/pieces-framework").LongTextProperty<false>;
    }>>;
    args: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        type: StaticDropdownProperty<string, true>;
        username: ShortTextProperty<false>;
        password: ShortTextProperty<false>;
        customHeader: import("@agnocon/pieces-framework").LongTextProperty<false>;
    }>>;
    parsed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=call-method.d.ts.map