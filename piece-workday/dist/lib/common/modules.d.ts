import { ServicePath } from './index';
import { WorkdayModule } from './fields';
export declare const WORKDAY_MODULE_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const BUSINESS_OBJECTS_BY_MODULE: Record<string, BusinessObjectConfig[]>;
export declare const moduleProperty: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
export declare const customBusinessObjectProperty: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const customServiceProperty: import("@agnocon/pieces-framework").StaticDropdownProperty<"v1" | "staffing/v6" | "resourceManagement/v3" | "expenseManagement/v1" | "time/v2", false>;
export declare function resolveBusinessObject(module: string | undefined, businessObject: string | undefined, customPath: string | undefined, customService: string | undefined): BusinessObjectConfig;
export declare function businessObjectPropertyForModule(module: string): import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
export declare function toWorkdayModule(module: string): WorkdayModule;
export type BusinessObjectConfig = {
    label: string;
    value: string;
    path: string;
    service: ServicePath;
    wqlDataSource?: string;
};
//# sourceMappingURL=modules.d.ts.map