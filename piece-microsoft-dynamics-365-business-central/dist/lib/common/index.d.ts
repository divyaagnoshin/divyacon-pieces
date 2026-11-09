import { DynamicPropsValue } from '@agnocon/pieces-framework';
import { EntityProp } from './types';
export declare const commonProps: {
    company_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    record_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    record_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    record_fields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    record_filter_fields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
export declare function formatRecordFields(recordFields: DynamicPropsValue, recordType: string): DynamicPropsValue;
export declare function getEntityPropSchema(recordType: string): EntityProp[];
//# sourceMappingURL=index.d.ts.map