"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenStreakBox = flattenStreakBox;
function flattenStreakBox(box) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return {
        box_key: (_a = box.boxKey) !== null && _a !== void 0 ? _a : box.key,
        name: box.name,
        pipeline_key: box.pipelineKey,
        stage_key: (_b = box.stageKey) !== null && _b !== void 0 ? _b : null,
        creator_key: (_c = box.creatorKey) !== null && _c !== void 0 ? _c : null,
        notes: (_d = box.notes) !== null && _d !== void 0 ? _d : null,
        follower_count: (_e = box.followerCount) !== null && _e !== void 0 ? _e : null,
        comment_count: (_f = box.commentCount) !== null && _f !== void 0 ? _f : null,
        task_total: (_g = box.taskTotal) !== null && _g !== void 0 ? _g : null,
        file_count: (_h = box.fileCount) !== null && _h !== void 0 ? _h : null,
        gmail_thread_count: (_j = box.gmailThreadCount) !== null && _j !== void 0 ? _j : null,
        creation_timestamp: (_k = box.creationTimestamp) !== null && _k !== void 0 ? _k : null,
        last_updated_timestamp: (_l = box.lastUpdatedTimestamp) !== null && _l !== void 0 ? _l : null,
        followers: Array.isArray(box.followerKeys) ? box.followerKeys.join(', ') : null,
        fields_json: box.fields && Object.keys(box.fields).length > 0
            ? JSON.stringify(box.fields)
            : null,
    };
}
//# sourceMappingURL=flatten.js.map