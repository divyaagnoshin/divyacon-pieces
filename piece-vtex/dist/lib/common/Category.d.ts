import { CreateCategoryParams, UpdateCategoryParams } from './types';
export declare class Category {
    private baseURL;
    private headers;
    constructor(host: string, appKey: string, appToken: string);
    getCategory(CategoryID?: number): Promise<any>;
    getCategoryTree(categoryLevels: number): Promise<any>;
    createCategory(newCategoryData: CreateCategoryParams): Promise<any>;
    updateCategory(CategoryID: number, updatedCategoryData: UpdateCategoryParams): Promise<any>;
}
//# sourceMappingURL=Category.d.ts.map