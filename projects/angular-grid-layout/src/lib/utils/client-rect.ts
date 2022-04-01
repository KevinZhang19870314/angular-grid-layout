
// tslint:disable

/**
 * Client rect utilities.
 * This file is taken from Angular Material repository. This is the reason why the tslint is disabled on this case.
 * Don't enable it until some custom change is done on this file.
 */


/** Gets a mutable version of an element's bounding `ClientRect`. */
export function getMutableClientRect(element: Element): ClientRect {
    const { top, right, bottom, left, width, height, x, y, toJSON } = element.getBoundingClientRect();

    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return { top, right, bottom, left, width, height, x, y, toJSON };
}

/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param clientRect ClientRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */
// export function isInsideClientRect(clientRect: ClientRect, x: number, y: number) {
//   const {top, bottom, left, right} = clientRect;
//   return y >= top && y <= bottom && x >= left && x <= right;
// }

/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param clientRect `ClientRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */
// export function adjustClientRect(clientRect: ClientRect, top: number, left: number) {
//   clientRect.top += top;
//   clientRect.bottom = clientRect.top + clientRect.height;

//   clientRect.left += left;
//   clientRect.right = clientRect.left + clientRect.width;
// }

/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param rect ClientRect to check against.
 * @param threshold Threshold around the ClientRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */
// export function isPointerNearClientRect(rect: ClientRect,
//                                         threshold: number,
//                                         pointerX: number,
//                                         pointerY: number): boolean {
//   const {top, right, bottom, left, width, height} = rect;
//   const xThreshold = width * threshold;
//   const yThreshold = height * threshold;

//   return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
//          pointerX > left - xThreshold && pointerX < right + xThreshold;
// }
