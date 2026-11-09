/**
 * Reusable properties for Productboard pieces.
 */
export declare const productboardProps: {
    /**
     * Property for selecting a feature from Productboard.
     * @param required Whether the property is mandatory.
     */
    feature_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    /**
     * Property for selecting a feature status from Productboard.
     * @param required Whether the property is mandatory.
     */
    status_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
//# sourceMappingURL=props.d.ts.map