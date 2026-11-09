import type { JsonObject, PolyDocDelivery, PolyDocParams, PolyDocSourceType } from './types';
export declare const sourceTypeProp: (defaultValue?: PolyDocSourceType) => import("@agnocon/pieces-framework").StaticDropdownProperty<"url" | "html" | "template", true>;
export declare const sourceProp: import("@agnocon/pieces-framework").LongTextProperty<true>;
export declare const templateDataProp: import("@agnocon/pieces-framework").JsonProperty<false>;
export declare const deliveryModeProp: import("@agnocon/pieces-framework").StaticDropdownProperty<"download" | "cloudStorage" | "webhook", true>;
export declare const presignedUrlProp: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const webhookUrlProp: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const webhookOptionsProp: import("@agnocon/pieces-framework").JsonProperty<false>;
export declare const filenameProp: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const tagProp: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const timeoutProp: import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const advancedProp: import("@agnocon/pieces-framework").JsonProperty<false>;
/** Coerce a Property.Json / object / JSON-string value into a non-empty plain object. */
export declare function asJsonObject(value: unknown): JsonObject | undefined;
type Props = Record<string, unknown>;
export declare function resolveSourceParams(props: Props): Pick<PolyDocParams, 'sourceType' | 'url' | 'html' | 'templateId' | 'templateData'>;
export declare function resolveDelivery(props: Props): PolyDocDelivery;
export declare function resolveMetadata(props: Props): Pick<PolyDocParams, 'filename' | 'tag' | 'timeout' | 'advanced'>;
export {};
//# sourceMappingURL=props.d.ts.map