import { DATA_CENTER_REGIONS } from "./constants";
export declare function handleDropdownError(msg: string): {
    disabled: boolean;
    options: never[];
    placeholder: string;
};
export declare function getSafeLabel(item: any): string;
export declare function formatDateTime(input: string | Date): string;
export declare function formatDateOnly(input: string | Date): string;
export declare function getZohoBiginAccountAuthorizationUrl(region: (typeof DATA_CENTER_REGIONS)[number]['REGION']): "https://accounts.zoho.com" | "https://accounts.zoho.com.cn";
//# sourceMappingURL=helpers.d.ts.map