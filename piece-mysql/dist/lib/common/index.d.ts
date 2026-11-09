import { AppConnectionValueForAuthProperty, StaticPropsValue } from '@agnocon/pieces-framework';
import { Connection } from 'promise-mysql';
import { mysqlAuth } from '../..';
export declare const warningMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
export declare function mysqlConnect(auth: AppConnectionValueForAuthProperty<typeof mysqlAuth>, propsValue: StaticPropsValue<any>): Promise<Connection>;
export declare function mysqlGetTableNames(conn: Connection): Promise<string[]>;
export declare const mysqlCommon: {
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    table: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
};
export declare function sanitizeColumnName(name: string | undefined): string;
//# sourceMappingURL=index.d.ts.map