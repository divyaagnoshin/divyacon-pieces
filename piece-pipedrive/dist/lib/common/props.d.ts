import { pipedriveAuth } from '../auth';
import { DropdownOption, DynamicPropsValue, PiecePropValueSchema } from '@agnocon/pieces-framework';
import { GetField } from './types';
/**
 * Fetches options for Pipedrive filters.
 * @param auth Pipedrive authentication.
 * @param type The type of object for the filter (e.g., 'deals', 'people', 'org').
 * @returns Dropdown options for filters.
 */
export declare function fetchFiltersOptions(auth: PiecePropValueSchema<typeof pipedriveAuth>, type: string): Promise<DropdownOption<number>[]>;
/**
 * Fetches options for Pipedrive activity types.
 * @param auth Pipedrive authentication.
 * @returns Dropdown options for activity types.
 */
export declare function fetchActivityTypesOptions(auth: PiecePropValueSchema<typeof pipedriveAuth>): Promise<DropdownOption<string>[]>;
/**
 * Fetches options for Pipedrive pipelines.
 * @param auth Pipedrive authentication.
 * @returns Dropdown options for pipelines.
 */
export declare function fetchPipelinesOptions(auth: PiecePropValueSchema<typeof pipedriveAuth>): Promise<DropdownOption<number>[]>;
/**
 * Fetches options for Pipedrive persons.
 * @param auth Pipedrive authentication.
 * @returns Dropdown options for persons.
 */
export declare function fetchPersonsOptions(auth: PiecePropValueSchema<typeof pipedriveAuth>): Promise<DropdownOption<number>[]>;
/**
 * Fetches options for Pipedrive users (owners).
 * @param auth Pipedrive authentication.
 * @returns Dropdown options for owners.
 */
export declare function fetchOwnersOptions(auth: PiecePropValueSchema<typeof pipedriveAuth>): Promise<DropdownOption<number>[]>;
/**
 * Creates a property definition for a custom field based on its Pipedrive field type.
 * @param property The Pipedrive custom field definition.
 * @returns A Property.ShortText, Property.LongText, Property.StaticDropdown, Property.StaticMultiSelectDropdown, or Property.Number.
 */
export declare function createPropertyDefinition(property: GetField): import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").LongTextProperty<false> | import("@agnocon/pieces-framework").StaticDropdownProperty<number, false> | import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<number, false> | import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").DateTimeProperty<false> | null;
/**
 * Retrieves custom properties for a given Pipedrive object type.
 * @param auth Pipedrive authentication.
 * @param objectType The type of object (e.g., 'person', 'deal', 'organization', 'product', 'lead').
 * @returns Dynamic properties for custom fields.
 */
export declare function retrieveObjectCustomProperties(auth: PiecePropValueSchema<typeof pipedriveAuth>, objectType: string): Promise<DynamicPropsValue>;
/**
 * Property definition for selecting a search field for an object type.
 * @param objectType The type of object (e.g., 'deal', 'person').
 */
export declare const searchFieldProp: (objectType: string) => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
/**
 * Property definition for the value of a search field.
 * Dynamically renders based on the selected searchField's type.
 * @param objectType The type of object (e.g., 'deal', 'person').
 */
export declare const searchFieldValueProp: (objectType: string) => import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const ownerIdProp: (displayName: string, required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const filterIdProp: (type: string, required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const organizationIdProp: (required?: boolean) => import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
export declare const dealPipelineIdProp: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const dealStageIdProp: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const personIdProp: (required?: boolean) => import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
export declare const labelIdsProp: (objectType: string, labelFieldName: string, required?: boolean) => import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const leadLabelIdsProp: (required?: boolean) => import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const productIdProp: (required?: boolean) => import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
/**
 * Property definition for 'Visible To' setting.
 */
export declare const visibleToProp: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
export declare const leadIdProp: (required?: boolean) => import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const activityTypeIdProp: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const dealIdProp: (required?: boolean) => import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
export declare const dealCommonProps: {
    creationTime: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    stageId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    pipelineId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    ownerId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    organizationId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    personId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    labelIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    probability: import("@agnocon/pieces-framework").NumberProperty<false>;
    expectedCloseDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    dealValue: import("@agnocon/pieces-framework").NumberProperty<false>;
    dealValueCurrency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    visibleTo: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    customfields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
/**
 * Common properties for Lead actions.
 */
export declare const leadCommonProps: {
    ownerId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    organizationId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    personId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    labelIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    expectedCloseDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    visibleTo: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    channel: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    leadValue: import("@agnocon/pieces-framework").NumberProperty<false>;
    leadValueCurrency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customfields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
/**
 * Common properties for Organization actions.
 */
export declare const organizationCommonProps: {
    ownerId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    visibleTo: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    labelIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    address: import("@agnocon/pieces-framework").LongTextProperty<false>;
    customfields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
export declare const personCommonProps: {
    ownerId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    organizationId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    email: import("@agnocon/pieces-framework").ArrayProperty<false>;
    phone: import("@agnocon/pieces-framework").ArrayProperty<false>;
    labelIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    visibleTo: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    marketing_status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customfields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
export declare const activityCommonProps: {
    organizationId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    personId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    dealId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    leadId: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    assignTo: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    type: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    dueDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    dueTime: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    duration: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    isDone: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    busy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    note: import("@agnocon/pieces-framework").LongTextProperty<false>;
    publicDescription: import("@agnocon/pieces-framework").LongTextProperty<false>;
};
export declare function customFieldsProp(objectType: string): import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
//# sourceMappingURL=props.d.ts.map