import { BonjoroAuthType } from './auth';
export declare function buildCampaignDropdown(auth: BonjoroAuthType): Promise<{
    options: never[];
    disabled: boolean;
    placeholder: string;
} | {
    options: {
        label: string;
        value: string;
    }[];
    disabled?: undefined;
    placeholder?: undefined;
}>;
export declare function buildTemplateDropdown(auth: BonjoroAuthType): Promise<{
    options: never[];
    disabled: boolean;
    placeholder: string;
} | {
    options: {
        label: string;
        value: string;
    }[];
    disabled?: undefined;
    placeholder?: undefined;
}>;
export declare function buildUserDropdown(auth: BonjoroAuthType): Promise<{
    options: never[];
    disabled: boolean;
    placeholder: string;
} | {
    options: {
        label: string;
        value: string;
    }[];
    disabled?: undefined;
    placeholder?: undefined;
}>;
//# sourceMappingURL=props.d.ts.map