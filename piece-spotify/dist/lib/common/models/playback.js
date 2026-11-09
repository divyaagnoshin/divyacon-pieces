"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceType = exports.PlayingType = exports.RepeatState = void 0;
var RepeatState;
(function (RepeatState) {
    RepeatState["OFF"] = "off";
    RepeatState["TRACK"] = "track";
    RepeatState["CONTEXT"] = "context";
})(RepeatState || (exports.RepeatState = RepeatState = {}));
var PlayingType;
(function (PlayingType) {
    PlayingType["TRACK"] = "track";
    PlayingType["EPISODE"] = "episode";
    PlayingType["AD"] = "ad";
    PlayingType["UNKNOWN"] = "unknown";
})(PlayingType || (exports.PlayingType = PlayingType = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType["COMPUTER"] = "computer";
    DeviceType["SMARTPHONE"] = "smartphone";
    DeviceType["SPEAKER"] = "speaker";
})(DeviceType || (exports.DeviceType = DeviceType = {}));
//# sourceMappingURL=playback.js.map