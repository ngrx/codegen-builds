import * as _ from 'lodash';
const /** @type {?} */ actionTypeRegex = new RegExp(/\[(.*?)\](.*)/);
/**
 * @param {?} type
 * @return {?}
 */
function parseActionType(type) {
    const /** @type {?} */ result = actionTypeRegex.exec(type);
    if (result === null) {
        throw new Error(`Could not parse action type "${type}"`);
    }
    return {
        category: /** @type {?} */ (result[1]),
        name: /** @type {?} */ (result[2]),
    };
}
export const /** @type {?} */ getActionType = (enterface) => enterface.actionType;
export const /** @type {?} */ getActionName = (enterface) => enterface.name;
export const /** @type {?} */ getActionCategory = _.flow(getActionType, parseActionType, v => v.category);
export const /** @type {?} */ getActionCategoryToken = _.flow(getActionCategory, _.camelCase, _.upperFirst);
export const /** @type {?} */ getActionEnumName = _.flow(getActionCategoryToken, v => `${v}ActionType`);
export const /** @type {?} */ getActionEnumPropName = _.flow(getActionName, _.snakeCase, v => v.toUpperCase());
export const /** @type {?} */ getActionUnionName = _.flow(getActionCategoryToken, v => `${v}Actions`);
export const /** @type {?} */ getActionLookupName = _.flow(getActionCategoryToken, v => `${v}ActionLookup`);
export const /** @type {?} */ getActionFactoryName = _.flow(getActionName, _.camelCase, _.upperFirst, v => `create${v}`);
//# sourceMappingURL=action-interface.js.map