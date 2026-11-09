"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTargetPages = getTargetPages;
exports.mapVisualToIntrinsic = mapVisualToIntrinsic;
/**
 * Resolves which pages to apply the stamp to based on user input.
 */
function getTargetPages(pages, applyToAllPages = false, pageNumber, itemName = 'Item') {
    const totalPages = pages.length;
    if (applyToAllPages) {
        return [...pages];
    }
    if (pageNumber === undefined) {
        throw new Error(`Page Number is required when "Apply to all pages?" is not checked for ${itemName}.`);
    }
    const pageIndex = Number(pageNumber) - 1;
    if (pageIndex < 0 || pageIndex >= totalPages) {
        throw new Error(`You requested Page ${pageNumber} for ${itemName}, but this document only has ${totalPages} page(s).`);
    }
    return [pages[pageIndex]];
}
/**
 * Maps visual coordinates (Top/Left) to pdf-lib intrinsic coordinates based on page rotation.
 */
function mapVisualToIntrinsic(vX, anchorY, vWidth, vHeight, rotationAngle) {
    let iX = vX;
    let iY = anchorY;
    let mappedRotation = 0;
    if (rotationAngle === 90) {
        iX = vHeight - anchorY;
        iY = vX;
        mappedRotation = 90;
    }
    else if (rotationAngle === 180) {
        iX = vWidth - vX;
        iY = vHeight - anchorY;
        mappedRotation = 180;
    }
    else if (rotationAngle === 270) {
        iX = anchorY;
        iY = vWidth - vX;
        mappedRotation = -90;
    }
    return { iX, iY, mappedRotation };
}
//# sourceMappingURL=common.js.map