import { PDFPage } from 'pdf-lib';
/**
 * Resolves which pages to apply the stamp to based on user input.
 */
export declare function getTargetPages(pages: PDFPage[], applyToAllPages?: boolean, pageNumber?: number, itemName?: string): PDFPage[];
/**
 * Maps visual coordinates (Top/Left) to pdf-lib intrinsic coordinates based on page rotation.
 */
export declare function mapVisualToIntrinsic(vX: number, anchorY: number, vWidth: number, vHeight: number, rotationAngle: number): {
    iX: number;
    iY: number;
    mappedRotation: number;
};
//# sourceMappingURL=common.d.ts.map