import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { ContentfulAuth } from './auth';
import * as Contentful from 'contentful-management';
export declare const makeClient: (auth: AppConnectionValueForAuthProperty<typeof ContentfulAuth>) => {
    client: Contentful.PlainClientAPI;
};
//# sourceMappingURL=client.d.ts.map