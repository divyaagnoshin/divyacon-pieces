import { DynamicPropsValue } from '@agnocon/pieces-framework';
export type LeverFieldType = {
    id: string;
    text: string;
    description: string;
    required: boolean;
    type: string;
    options?: {
        text: string;
        optionId: string;
    }[];
    scores?: {
        text: string;
        description: string;
    }[];
};
export declare const LeverFieldMapping: Record<string, {
    buildActivepieceType: (fields: DynamicPropsValue, field: LeverFieldType) => void;
    buildLeverType: (id: string, propsValues: DynamicPropsValue[]) => {
        id: string;
        value: string | string[] | number | number[] | {
            score: number;
            comment?: string;
        }[];
    };
}>;
//# sourceMappingURL=common.d.ts.map