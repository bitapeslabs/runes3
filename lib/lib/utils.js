"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
var chalk_1 = __importDefault(require("chalk"));
var boldAllLinks = function (text) {
    return text.replace(/https?:\/\/[^\s]+/g, function (url) { return chalk_1.default.underline.bold(url); });
};
var log = function (message, type) {
    if (type === void 0) { type = "info"; }
    var logMessage = boldAllLinks(message);
    switch (type) {
        case "tip":
            logMessage = chalk_1.default.blue.bold("tip: ") + chalk_1.default.white(logMessage);
            break;
        case "warn":
            logMessage = chalk_1.default.yellow.bold("WARNING: ") + chalk_1.default.yellow(logMessage);
            break;
        case "error":
            logMessage = chalk_1.default.red.bold("ERROR: ") + chalk_1.default.red(logMessage);
            break;
        case "success":
            logMessage = chalk_1.default.green.bold("SUCCESS: ") + chalk_1.default.green(logMessage);
            break;
    }
    console.log(logMessage);
};
exports.log = log;
