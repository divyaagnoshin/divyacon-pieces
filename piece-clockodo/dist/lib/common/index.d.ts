import { PiecePropValueSchema } from '@agnocon/pieces-framework';
import { ClockodoClient } from './client';
import { clockodoAuth } from '../auth';
type ClockodoAuthValue = PiecePropValueSchema<typeof clockodoAuth>;
export declare function makeClient(auth: ClockodoAuthValue): ClockodoClient;
export declare const clockodoCommon: {
    absenceType: (required?: boolean) => import("@agnocon/pieces-framework").StaticDropdownProperty<number, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    customer_id: (required?: boolean, active?: boolean | null) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    project_id: (required?: boolean, requiresCustomer?: boolean, active?: boolean | null) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    user_id: (required?: boolean, active?: boolean | null) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    team_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    service_id: (required?: boolean, active?: boolean | null) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    language: (required?: boolean) => import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    color: (required?: boolean) => import("@agnocon/pieces-framework").StaticDropdownProperty<number, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
};
export declare function emptyToNull(val?: string): undefined | string | null;
export declare function currentYear(): number;
export declare function reformatDateTime(s?: string): string | undefined;
export declare function reformatDate(s?: string): string | undefined;
export {};
//# sourceMappingURL=index.d.ts.map