import { DynamicPropsValue } from '@agnocon/pieces-framework';
import { DrupalAuthType } from './jsonapi';
export declare function fetchEntityTypesForReading(auth?: DrupalAuthType): Promise<{
    disabled: boolean;
    options: never[];
    placeholder: string;
} | {
    disabled: boolean;
    options: {
        label: string;
        value: any;
    }[];
    placeholder?: undefined;
}>;
export declare function fetchEntityTypesForEditing(auth?: DrupalAuthType): Promise<{
    disabled: boolean;
    options: never[];
    placeholder: string;
} | {
    disabled: boolean;
    options: {
        label: string;
        value: any;
    }[];
    placeholder?: undefined;
}>;
/**
 * Fetches the form display configuration for an entity bundle
 *
 * In Drupal, administrators configure which fields appear on edit forms,
 * their order, and how they're displayed. This function retrieves that
 * configuration so we can show the same fields in the same order.
 *
 * Without this, we might show fields that admins have intentionally hidden
 * or fields that are read-only and shouldn't be edited.
 *
 * @param auth - Drupal authentication credentials
 * @param entityType - The entity type (e.g., 'node', 'user')
 * @param bundle - The bundle (e.g., 'article', 'page')
 * @returns Form display configuration object
 */
export declare function fetchEntityFormDisplay(auth: DrupalAuthType, entityType: string, bundle: string): Promise<any>;
/**
 * Fetches available text formats for rich text fields
 *
 * Drupal allows different text formats (like 'basic_html', 'full_html')
 * for rich text fields. This function gets the available formats so users
 * can choose how their content should be processed.
 */
export declare function fetchTextFormats(auth: DrupalAuthType): Promise<any>;
/**
 * Fetches detailed field configuration including labels and requirements
 *
 * This gets the actual field definitions including human-readable labels,
 * whether fields are required, field types, etc. This metadata is used
 * to create appropriate form inputs with proper validation.
 *
 * @param auth - Drupal authentication credentials
 * @param entityType - The entity type (e.g., 'node', 'user')
 * @param bundle - The bundle (e.g., 'article', 'page')
 * @returns Object mapping field names to their configuration
 */
export declare function fetchEntityFieldConfig(auth: DrupalAuthType, entityType: string, bundle: string): Promise<Record<string, any>>;
/**
 * Checks if the entity type and bundle are supported by the workflow
 *
 * This gets the actual workflow configuration on the site and determines if the
 * given entity type and bundle is supported by the workflow.
 *
 * @param auth - Drupal authentication credentials
 * @param entityType - The entity type (e.g., 'node', 'user')
 * @param bundle - The bundle (e.g., 'article', 'page')
 * @returns True if the entity type and bundle are supported by the workflow,
 * false otherwise
 */
export declare function isEntitySupportingWorkflow(auth: DrupalAuthType, entityType: string, bundle: string): Promise<boolean>;
/**
 * Checks if a field type can be edited with simple form inputs
 *
 * Some Drupal field types are too complex for simple text/checkbox inputs
 * (like entity references, file uploads). This function determines which
 * field types we can reasonably handle in a workflow interface.
 */
export declare function isEditableFieldType(fieldType: string): boolean;
/**
 * Gets human-readable labels for Drupal base fields
 *
 * TODO: This should be fetched from the form display instead of hardcoded.
 * Base fields like 'title', 'status' have standard labels, but these could
 * be customized by site administrators. We should get the actual labels
 * from the form display configuration.
 *
 * @param fieldName - The machine name of the field
 * @returns Human-readable label for the field
 */
export declare function getBaseFieldLabel(fieldName: string): string;
/**
 * Extracts editable fields from form display configuration
 *
 * This combines form display configuration (what fields to show) with
 * field configuration (labels, types, requirements) to create a list
 * of fields that should be editable in the workflow interface.
 *
 * @param auth - Drupal authentication credentials
 * @param entityType - The entity type (e.g., 'node', 'user')
 * @param bundle - The bundle (e.g., 'article', 'page')
 * @param formDisplayContent - Form display configuration from fetchEntityFormDisplay
 * @returns Array of field objects with name, type, label, required, weight
 */
export declare function getEditableFieldsWithLabels(auth: DrupalAuthType, entityType: string, bundle: string, formDisplayContent: Record<string, any>): Promise<{
    name: string;
    type: string;
    label: string;
    required: boolean;
    weight: number;
}[]>;
/**
 * Builds Activepieces Property objects for dynamic form generation
 *
 * This is the main function that combines all the field discovery and
 * configuration to create the actual form properties that users will
 * see in the Activepieces interface.
 *
 * @param auth - Drupal authentication credentials
 * @param entityType - Selected entity type from dropdown
 * @param isCreateAction - Whether this is for creating (true) or updating (false)
 * @returns Dynamic properties object for Activepieces form
 */
export declare function buildFieldProperties(auth: DrupalAuthType, entityType: any, isCreateAction?: boolean): Promise<DynamicPropsValue>;
//# sourceMappingURL=drupal-entities.d.ts.map