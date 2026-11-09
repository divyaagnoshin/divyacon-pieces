import { SendyAuthType } from './auth';
export declare function buildBrandDropdown(auth: SendyAuthType): Promise<{
    options: never[];
    disabled: boolean;
    placeholder: string;
} | {
    options: {
        label: any;
        value: any;
    }[];
    disabled?: undefined;
    placeholder?: undefined;
}>;
export declare function buildListDropdown(auth: SendyAuthType): Promise<{
    options: never[];
    disabled: boolean;
    placeholder: string;
} | {
    options: {
        label: any;
        value: any;
    }[];
    disabled?: undefined;
    placeholder?: undefined;
}>;
//# sourceMappingURL=props.d.ts.map