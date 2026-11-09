import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { MongoClient, Db } from 'mongodb';
import { mongodbAuth } from '../..';
export declare function mongodbConnect(authWithProps: AppConnectionValueForAuthProperty<typeof mongodbAuth>): Promise<MongoClient>;
export declare function getDatabase(client: MongoClient, databaseName?: string): Promise<Db>;
export declare function getCollections(client: MongoClient, databaseName: string): Promise<string[]>;
export declare const mongodbCommon: {
    database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    collection: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        useAtlasUrl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        authSource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        useAtlasUrl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        authSource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
};
//# sourceMappingURL=index.d.ts.map