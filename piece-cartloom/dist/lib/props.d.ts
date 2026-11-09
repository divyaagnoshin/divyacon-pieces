import { CartloomAuthType } from './auth';
export declare function buildProductsDropdown(auth: CartloomAuthType): Promise<{
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