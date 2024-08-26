"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const chalk_1 = __importDefault(require("chalk"));
const boldAllLinks = (text) => {
    return text.replace(/https?:\/\/[^\s]+/g, (url) => chalk_1.default.underline.bold(url));
};
const log = (message, type = "info") => {
    let logMessage = boldAllLinks(message);
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
