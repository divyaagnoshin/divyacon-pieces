/**
 * Reusable domain dropdown property (single-select)
 * Fetches domains from /activepieces/domains endpoint
 */
export declare const domainProp: () => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
/**
 * Reusable subscriber dropdown property (single-select)
 * Fetches subscribers from /activepieces/subscribers endpoint filtered by domain
 * Uses subscriber UUID as value
 */
export declare const subscriberUuidProp: () => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
/**
 * Reusable device dropdown property (single-select)
 * Fetches registrations from /users/{user}/registration endpoint filtered by selected user
 * Uses AOR (without "sip:" prefix) as both label and value
 */
export declare const deviceProp: () => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
/**
 * Reusable SMS number dropdown property (single-select)
 * Fetches SMS numbers from /sms/numbers endpoint
 * Uses number as both label and value
 */
export declare const smsNumberProp: () => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
/**
 * Reusable SMS recipients dropdown property (multi-select)
 * Fetches SMS numbers from /sms/numbers endpoint
 * Uses number as both label and value
 */
export declare const smsRecipientsProp: () => import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
/**
 * Reusable users dropdown property (multi-select)
 * Fetches subscribers from /activepieces/subscribers endpoint
 * Includes "All Always" option with value "*"
 */
export declare const usersProp: () => import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
/**
 * Reusable user dropdown property (single-select)
 * Fetches subscribers from /activepieces/subscribers endpoint filtered by domain
 * Uses subscriber user as value (no "All" option)
 */
export declare const userProp: () => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
//# sourceMappingURL=props.d.ts.map