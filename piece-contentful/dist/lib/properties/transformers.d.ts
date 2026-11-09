import { BasePropertySchema } from '@agnocon/pieces-framework';
import { ContentFields, FieldType } from 'contentful-management';
type Transformer = (field: ContentFields) => BasePropertySchema | null;
export declare const FieldTransformers: Record<FieldType['type'], Transformer>;
export {};
//# sourceMappingURL=transformers.d.ts.map